Doc back bieres jooby

  GET  /                                         [*/*]     [*/*]    (/anonymous)
	-> "Hello World!"

  GET  /catalog                                  [*/*]     [*/*]    (/CatalogControler.catalog)
	->List<CatalogBeer> 

  GET  /catalog/id/:beerId                       [*/*]     [*/*]    (/CatalogControler.retrieveCatalogBeerById)
	localhost:8080/catalog/id/ChimayTriple -> CatalogBeer avec l'id ChimayTriple s'il existe.
 
  POST /catalog/new                 [application/json]     [*/*]    (/CatalogControler.newCatalogBeer)
	POST Beer -> int�gre une new CatalogBeer dans mongoDB

  GET  /catalog/delete/:beerId                   [*/*]     [*/*]    (/CatalogControler.deleteCatalogBeerById)
	localhost:8080/catalog/delete/ChimayTriple -> Supprime la CatalogBeer avec l'id ChimayTriple s'il existe dans mongo.
	return 0



  GET  /suggested                                [*/*]     [*/*]    (/SuggestedControler.suggested)
	-> List<SuggestedBeer>

  GET  /suggested/id/:beerId                     [*/*]     [*/*]    (/SuggestedControler.retrieveSuggestedBeerById)
	localhost:8080/suggested/id/ChimayTriple -> SuggestedBeer avec l'id ChimayTriple s'il existe.

  GET  /suggested/upvote/:beerId                 [*/*]     [*/*]    (/SuggestedControler.upvoteSuggestedBeerById)
	localhost:8080/upvote/id/ChimayTriple -> SuggestedBeer avec l'id ChimayTriple s'il existe avec nb_vote++.

  POST /suggested/new               [application/json]     [*/*]    (/SuggestedControler.addSuggestedBeer)
	POST Beer -> int�gre une new SuggestedBeer dans mongoDB

  GET  /suggested/delete/:beerId                 [*/*]     [*/*]    (/SuggestedControler.deleteSuggestedBeerById)
	localhost:8080/suggested/delete/ChimayTriple -> Supprime la SuggestedBeer avec l'id ChimayTriple s'il existe dans mongo.
	return 0

  GET  /suggested/tocatalog:beerId               [*/*]     [*/*]    (/SuggestedControler.toCatalog)
  	localhost:8080/suggested/tocatalog/ChimayTriple -> Supprime la SuggestedBeer avec l'id ChimayTriple s'il existe dans mongo.
  	Crée une CatalogBeer à partir de la suggestedBeer.
  	return 0