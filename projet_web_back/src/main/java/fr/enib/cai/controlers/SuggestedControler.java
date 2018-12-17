package fr.enib.cai.controlers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.enib.cai.model.Beer;
import fr.enib.cai.model.SuggestedBeer;
import org.jongo.Jongo;
import org.jongo.MongoCursor;
import org.jooby.mvc.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Path("/suggested")
public class SuggestedControler {
    private final Logger log = LoggerFactory.getLogger(getClass());
    private final ObjectMapper mapper;
    private final Jongo jongo;

    @Inject
    public SuggestedControler(ObjectMapper jacksonMapper, Jongo jongo) {
        mapper = jacksonMapper;
        this.jongo = jongo;
    }

    @GET
    public List<SuggestedBeer> suggested(@Header("User-Agent") String ua) throws IOException {
        log.info("Received GET all request for catalog from" + ua);

        MongoCursor<SuggestedBeer> mongoBeers = jongo.getCollection("suggestedBeers").find().as(SuggestedBeer.class);
        List<SuggestedBeer> beers = new ArrayList<>();
        mongoBeers.iterator().forEachRemaining(beer -> beers.add(beer));

        if(beers == null){
            throw new IOException("Suggested vide.");
        }

        return beers;
    }

    @GET
    @Path("/id/:beerId")
    public SuggestedBeer retrieveSuggestedBeerById(String beerId) throws IOException {
        log.info("Received GET by id request for "+ beerId);

        SuggestedBeer beer = jongo.getCollection("suggestedBeers").findOne("{beer.id: #}", beerId).as(SuggestedBeer.class);

        if(beer == null){
            throw new IOException("La biere " + beerId + " n'existe pas de les suggestions");
        }
        return beer;
    }


    @GET
    @Path("/upvote/:beerId")
    public SuggestedBeer upvoteSuggestedBeerById(String beerId) throws IOException {
        log.info("Received UPVOTE request for "+ beerId);

        SuggestedBeer beer = retrieveSuggestedBeerById(beerId);
        if(beer != null){
            beer.upvote();
            deleteSuggestedBeerById(beerId);
            addSuggestedBeer2(beer);
        }

        return beer;
    }

    @POST
    @Path("/new")
    @Consumes("json")
    public int addSuggestedBeer(final @Body Beer newBeer) throws IOException{

        if(newBeer.getId() == null){
            throw new IOException("La biere n'a pas un id valide");
        }

        long n = jongo.getCollection("suggestedBeers").count("{beer.id : #}", newBeer.getId());

        if(n!=0){
            throw new IOException("Une biere avec l'id " + newBeer.getId() + " existe deja dans les suggestions");
        }

        SuggestedBeer newSuggestedBeer = new SuggestedBeer(newBeer);
        jongo.getCollection("suggestedBeers").insert(newSuggestedBeer);
        return 0;
    }

    public void addSuggestedBeer2(final @Body SuggestedBeer newBeer) {

        jongo.getCollection("suggestedBeers").insert(newBeer);
    }

    @GET
    @Path("/delete/:beerId")
    public int deleteSuggestedBeerById(String beerId) {
        jongo.getCollection("suggestedBeers").remove("{beer.id: #}", beerId);
        return 0;
    }
}
