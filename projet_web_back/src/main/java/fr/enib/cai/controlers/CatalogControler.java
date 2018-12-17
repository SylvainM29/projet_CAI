package fr.enib.cai.controlers;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.WriteResult;
import fr.enib.cai.model.Beer;
import fr.enib.cai.model.CatalogBeer;
import org.jongo.Jongo;
import org.jongo.MongoCursor;
import org.jooby.mvc.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.inject.Inject;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Path("/catalog")
public class CatalogControler {
    private final Logger log = LoggerFactory.getLogger(getClass());
    private final ObjectMapper mapper;
    private final Jongo jongo;

    @Inject
    public CatalogControler(ObjectMapper jacksonMapper, Jongo jongo) {
        mapper = jacksonMapper;
        this.jongo = jongo;
    }

    @GET
    public List<CatalogBeer> catalog(@Header("User-Agent") String ua) throws IOException {
        log.info("Received request for catalog from" + ua);

        MongoCursor<CatalogBeer> mongoBeers = jongo.getCollection("catalogBeers").find().as(CatalogBeer.class);

        List<CatalogBeer> beers = new ArrayList<>();
        mongoBeers.iterator().forEachRemaining(beer -> beers.add(beer));

        if(beers == null){
            throw new IOException("Catalog vide.");
        }

        return beers;
    }

    @GET
    @Path("/id/:beerId")
    public CatalogBeer retrieveCatalogBeerById(String beerId) throws IOException {
        log.info("Received request for "+ beerId);
        CatalogBeer beer = jongo.getCollection("catalogBeers").findOne("{beer.id: #}", beerId).as(CatalogBeer.class);

        if(beer == null){
            throw new IOException("La biere " + beerId + " n'existe pas de le catalog");
        }

        return beer;

    }

    @POST
    @Path("/new")
    @Consumes("json")
    public int newCatalogBeer(final @Body Beer newBeer) throws IOException{

        if(newBeer.getId() == null){
            throw new IOException("La biere n'a pas un id valide");
        }

        long n = jongo.getCollection("catalogBeers").count("{beer.id : #}", newBeer.getId());

        if(n!=0){
            throw new IOException("Une biere avec l'id " + newBeer.getId() + " existe deja dans le Catalog");
        }

        CatalogBeer newCatalogBeer = new CatalogBeer(newBeer);
        jongo.getCollection("catalogBeers").insert(newCatalogBeer);
        return 0;
    }

    public void newCatalogBeer2(final @Body CatalogBeer newBeer) {

        jongo.getCollection("catalogBeers").insert(newBeer);
    }



    @GET
    @Path("/delete/:beerId")
    public int deleteCatalogBeerById(String beerId){
        WriteResult res =jongo.getCollection("catalogBeers").remove("{beer.id: #}", beerId);
        return 0;
    }
}
