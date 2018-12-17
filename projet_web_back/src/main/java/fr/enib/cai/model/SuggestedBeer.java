package fr.enib.cai.model;

import java.util.Date;

public class SuggestedBeer {

    private Beer beer;
    private int nb_vote;
    private Date date;

    public SuggestedBeer() {
    }

    public SuggestedBeer(Beer beer){
        this.beer = beer;
        nb_vote = 0;
        date = new Date();
    }

    public void setBeer(Beer beer) {
        this.beer = beer;
    }

    public void setNb_vote(int nb_vote) {
        this.nb_vote = nb_vote;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Beer getBeer() {
        return beer;
    }

    public int getNb_vote() {
        return nb_vote;
    }

    public Date getDate() {
        return date;
    }

    public void upvote() { this.nb_vote++; }
}
