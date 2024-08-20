import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UserLoginComponent extends Component {
  @service('user-details') userService;
  @tracked userName;
  @tracked passWord;

  @action
  saveUserName(event) {
    this.userName = event.target.value;
  }

  @action
  savePassword(event) {
    this.passWord = event.target.value;
  }

  @action
  storeUserDeatils() {
    this.userService.addUserDeatils(this.userName, this.passWord);
  }
}
