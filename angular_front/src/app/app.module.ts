import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConsulterCatalogueComponent } from './consulter-catalogue/consulter-catalogue.component';
import { ConsulterBieresProposeesComponent } from './consulter-bieres-proposees/consulter-bieres-proposees.component';
import { AuthComponent } from './auth/auth.component';
import { CatalogueViewComponent } from './catalogue-view/catalogue-view.component';
import { BeerComponent } from './beer/beer.component';

import { CatalogueService } from './services/catalogue.service';
import { AuthService } from './services/auth.service';
import { FormPropositionComponent } from './form-proposition/form-proposition.component';
import { FormPropositionService } from './services/form-proposition.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'catalogue', canActivate: [AuthGuard], component: CatalogueViewComponent },
  { path: 'catalogue/:name', canActivate: [AuthGuard], component: BeerComponent },
  { path: 'proposition', component: FormPropositionComponent },
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
    FormPropositionComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    CatalogueService,
    AuthService,
    AuthGuard,
    FormPropositionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
