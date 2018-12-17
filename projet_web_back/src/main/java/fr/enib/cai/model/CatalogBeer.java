package fr.enib.cai.model;

public class CatalogBeer {

    private Beer beer;
    private boolean served;
    private String contenant;

    public CatalogBeer() {
    }

    public CatalogBeer(Beer beer) {
        this.beer = beer;
        served = false;
        contenant = "none";
    }

    public Beer getBeer() {
        return beer;
    }

    public boolean isServed() {
        return served;
    }

    public String getContenant() {
        return contenant;
    }

    public void setBeer(Beer beer) {
        this.beer = beer;
    }

    public void setServed(boolean served) {
        this.served = served;
    }

    public void setContenant(String contenant) {
        this.contenant = contenant;
    }
}
