import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
// We are going to use `beer-list-item`, so we import it
import './beer-list-item.js';
// Import template repeater
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@granite-elements/granite-bootstrap/granite-bootstrap.js';

export class BeerList extends PolymerElement {

  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
      <div class="beers container">
        <div class="row">
          <div class="col-md-3">
            <!--Sidebar content--> 
            <div class="form-group">
              <label 
                  for="search">
                Search
              </label>
              <input 
                type="text" 
                class="form-control" 
                id="search"  
                placeholder="Enter search"
                on-input="_inputChange">
            </div>
          </div>
          <div>Current search: [[filterText]]</div>
          <div class="col-md-9">
            <div class="beers">
              <template id="beerList" is="dom-repeat" items="[[beers]]" filter="_beerFilter">
                <beer-list-item name="[[item.name]]" description="[[item.description]]">
                </beer-list-item>
              </template>
            </div>
            <div>Number of beers in list: [[beers.length]]</div>
          </div>          
        </div>
      </div>
    `;
  }

/*  static get template() {
    return html`
      <style include="granite-bootstrap"></style>
      <div class="beers">
        <template is="dom-repeat" items="[[beers]]">
          <beer-list-item name="[[item.name]]" description="[[item.description]]">
          </beer-list-item>
        </template>
      </div>
      <div>Number of beers in list: [[beers.length]]</div>
      <div>
        <table>
          <tr><th colspan="8">Row number</th></tr>
          <template is="dom-repeat" items="[0, 1, 2, 3, 4, 5, 6, 7]" index-as="line">
            <tr>
            <template is="dom-repeat" items="[0, 1, 2, 3, 4, 5, 6, 7]" index-as="column">
              <td>[[line]]/[[column]]&nbsp&nbsp&nbsp</td>
            </template>
            </tr>
          </template>
        </table>
      </div>
    `;
  }*/

  static get properties() {
    return {
      beers: {
        type: Array,
      },
      filterText: {
        type: String,
      },
    }
  }

  _inputChange() {
    this.filterText = this.$.search.value;
  }

  _beerFilter(item) {
      return item.name.match(new RegExp(this.filterText, 'i'));
  }

  _inputChange() {
    this.filterText = this.$.search.value;
    this.$.beerList.render();
  }

  constructor() {
    super();

    this.beers = [
      {
        alcohol: 8.5,
        name: "Affligem Tripel",
        description: "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
      },
      {
        alcohol: 9.2,
        name: "Rochefort 8",
        description: "A dry but rich flavoured beer with complex fruity and spicy flavours."
      },
      {
        alcohol: 7,
        name: "Chimay Rouge",
        description: "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature "
      }
    ];
  }

}

customElements.define('beer-list', BeerList);