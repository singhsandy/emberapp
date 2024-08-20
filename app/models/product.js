import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr name;
  @attr features;
  @attr description;
  @attr price;
  @attr colors;
}
