import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductImageComponent extends Component {
  @tracked isZoomed = false;

  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}
