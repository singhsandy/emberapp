import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class UserInfoComponent extends Component {
  @service('user-details') userInfo;
}
