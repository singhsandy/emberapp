import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subTotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return (acc += item.price);
    }, 0);
  }

  get tax() {
    return this.subTotal * 0.09;
  }

  get total() {
    return this.subTotal + this.tax;
  }

  @action
  updateItem(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
