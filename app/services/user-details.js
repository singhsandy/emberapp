import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class User {
  @tracked userName;
  @tracked passWord;
  constructor(username) {
    this.userName = username.usename;
    this.passWord = username.uspassword;
  }
}

export default class UserDetailsService extends Service {
  userDetails = [];

  addUserDeatils(usename, uspassword) {
    this.userDetails = [
      new User({
        usename,
        uspassword,
      }),
    ];
  }
}
