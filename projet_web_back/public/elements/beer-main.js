import { PolymerElement, html } from "../node_modules/@polymer/polymer/polymer-element.js";
import "../node_modules/@polymer/polymer/lib/elements/dom-if.js";
import "../node_modules/@polymer/app-route/app-route.js";
import "../node_modules/@polymer/app-route/app-location.js";
import "../node_modules/@granite-elements/granite-bootstrap/granite-bootstrap.js";
import "./beer-list.js";
import "./beer-detail.js";
export class BeerMain extends PolymerElement {
  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
    
      <app-location route="{{route}}" use-hash-as-path></app-location>

      <app-route route="[[route]]" pattern="/beers" active="{{beerListActive}}"></app-route>
      <app-route route="[[route]]" pattern="/beer/:id" data="{{beerId}}" active="{{beerIdActive}}"></app-route>


      <template is="dom-if" if="{{beerListActive}}">
        <beer-list></beer-list>
      </template>
      
      <template is="dom-if" if="{{beerIdActive}}">
        <beer-detail id="[[beerId.id]]"></beer-detail>
      </template>
    `;
  }

  static get properties() {
    return {
      beerListActive: {
        type: Boolean
      },
      beerIdActive: {
        type: Boolean
      },
      beerId: {
        tpe: String
      },
      route: {
        type: Object
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.route.path) {
      this.route = { ...this.route,
        path: '/beers'
      };
    }
  }

}
customElements.define('beer-main', BeerMain);