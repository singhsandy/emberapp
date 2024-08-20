import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class ProductComponent extends Component {
  imgPath = this.args.product.colors[0].image;
  @service('user-details') userInfo;
  toggleZoom() {}
}
