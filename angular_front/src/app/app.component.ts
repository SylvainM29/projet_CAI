import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  // Modify Pseudo/password
  USERNAME: string = "admin";
  PASSWORD: string = "admin";

  secondes: number;

  counterSubscription: Subscription;

  authStatus: boolean;

  password: string;
  username: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    )
  }

  onSignIn() {
    if (this.username == this.USERNAME && this.password == this.PASSWORD) {
      this.authService.signIn().then(
        () => {
          this.authStatus = this.authService.isAuth;
          this.router.navigate(['catalogue']);
        });
    }
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
