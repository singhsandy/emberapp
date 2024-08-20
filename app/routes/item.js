import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service store;

  async model(params) {
    // const response = await fetch('/api/products.json');
    // const { products } = await response.json();
    const products = await this.store.findAll('product');
    const { item_id } = params;
    const product = products.find(({ id }) => id === item_id);
    return product;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
    controller.isZoomed = false;
  }
}
