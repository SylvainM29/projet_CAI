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
import { FormCatalogueComponent } from './form-catalogue/form-catalogue.component';
import { FormCatalogueService } from './services/form-catalogue.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { BieresProposeesViewComponent } from './bieres-proposees-view/bieres-proposees-view.component';
import { BieresProposeesService } from './services/bieres-proposees.service';
import { SuggestedBeerComponent } from './suggested-beer/suggested-beer.component';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'catalogue', component: CatalogueViewComponent },
  { path: 'catalogue/:name', component: BeerComponent },
  { path: 'bieresProposees', component: BieresProposeesViewComponent },
  { path: 'bieresProposees/:name', component: SuggestedBeerComponent },
  { path: 'proposition', component: FormPropositionComponent },
  { path: 'add',  canActivate: [AuthGuard], component: FormCatalogueComponent },
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
    FourOhFourComponent,
    FormCatalogueComponent,
    BieresProposeesViewComponent,
    SuggestedBeerComponent
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
    FormPropositionService,
    FormCatalogueService,
    BieresProposeesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
