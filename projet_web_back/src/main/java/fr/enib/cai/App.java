package fr.enib.cai;

import fr.enib.cai.controlers.CatalogControler;
import fr.enib.cai.controlers.SuggestedControler;
import org.jooby.json.Jackson;
import org.jooby.mongodb.Jongoby;
import org.jooby.mongodb.Mongodb;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.jooby.handlers.CorsHandler;

import java.nio.file.Paths;

import org.jooby.Jooby;

/**
 * @author jooby generator
 */
public class App extends Jooby {

  private final Logger log = LoggerFactory.getLogger(getClass());

  {
    get("/", () -> "Hello World!");

	use("*", new CorsHandler());

    use(new Jackson());
    use(new Mongodb());
    use(new Jongoby());

    use(CatalogControler.class);
    use(SuggestedControler.class);

    assets("/beers/img/**", Paths.get("../img"));
    assets("/**");
  }
  
  public static void main(final String[] args) {
    run(App::new, args);
  }

}
