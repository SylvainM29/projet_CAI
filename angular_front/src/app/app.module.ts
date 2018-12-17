import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConsulterCatalogueComponent } from './consulter-catalogue/consulter-catalogue.component';
import { ConsulterBieresProposeesComponent } from './consulter-bieres-proposees/consulter-bieres-proposees.component';
import { AuthComponent } from './auth/auth.component';
import { CatalogueViewComponent } from './catalogue-view/catalogue-view.component';
import { BeerComponent } from './beer/beer.component';

import { CatalogueService } from './services/catalogue.service';
import { AuthService } from './services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'catalogue', canActivate: [AuthGuard], component: CatalogueViewComponent },
  { path: 'catalogue/:name', canActivate: [AuthGuard], component: BeerComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' } // ATTENTION : cette route est à mettre obligatoirement à la fin
]

@NgModule({
  declarations: [
    AppComponent,
    ConsulterCatalogueComponent,
    ConsulterBieresProposeesComponent,
    AuthComponent,
    CatalogueViewComponent,
    BeerComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CatalogueService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
