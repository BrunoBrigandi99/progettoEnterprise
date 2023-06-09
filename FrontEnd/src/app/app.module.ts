import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { PagAnnuncioComponent } from './component/pag-annuncio/pag-annuncio.component';
import { ChiSiamoComponent } from './component/footer/chi-siamo/chi-siamo.component';
import { PrivacyComponent } from './component/footer/privacy/privacy.component';
import { ComeFunzionaComponent } from './component/footer/come-funziona/come-funziona.component';
import { ProfiloComponent } from './component/toolbar/profilo/profilo.component';
import { CarrelloComponent } from './component/toolbar/carrello/carrello.component';
import { AggiungiAnnuncioComponent } from './component/aggiungi-annuncio/aggiungi-annuncio.component';
import { AccediComponent } from './component/toolbar/accedi/accedi.component';
import { RegistratiComponent } from './component/toolbar/registrati/registrati.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ChatComponent } from './component/toolbar/chat/chat.component';
import { JsonParser, LoggingInterceptor } from './Interceptor/logging.interceptor';








@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PagAnnuncioComponent,
    ChiSiamoComponent,
    PrivacyComponent,
    ComeFunzionaComponent,
    ProfiloComponent,
    CarrelloComponent,
    AggiungiAnnuncioComponent,
    AccediComponent,
    RegistratiComponent,
    ChatComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatCardModule,


  ],
  providers: [

    { provide: JsonParser, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
