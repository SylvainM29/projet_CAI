import { reject } from 'q';
import { Subject } from 'rxjs';

export class AuthService {
  isAuth = false;

  authSubject = new Subject<boolean>();

  signIn() {
    this.authSubject.next(this.isAuth);

    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 1000)
      });
  }

  signOut() {
    this.isAuth = false;
    this.authSubject.next(this.isAuth);
  }
}
