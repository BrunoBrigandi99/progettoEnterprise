import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PagAnnuncioComponent } from './component/pag-annuncio/pag-annuncio.component';
import { AbbigliamentoComponent } from './component/topper/abbigliamento/abbigliamento.component';
import { AccessoriComponent } from './component/topper/accessori/accessori.component';
import { CasaComponent } from './component/topper/casa/casa.component';
import { ElettronicaComponent } from './component/topper/elettronica/elettronica.component';
import { LibriComponent } from './component/topper/libri/libri.component';
import { ScarpeComponent } from './component/topper/scarpe/scarpe.component';
import { SportComponent } from './component/topper/sport/sport.component';
import { ChiSiamoComponent } from './component/footer/chi-siamo/chi-siamo.component';
import { ComeFunzionaComponent } from './component/footer/come-funziona/come-funziona.component';
import { PrivacyComponent } from './component/footer/privacy/privacy.component';
import { ProfiloComponent } from './component/toolbar/profilo/profilo.component';
import { CarrelloComponent } from './component/toolbar/carrello/carrello.component';
import { AccediComponent } from './component/toolbar/accedi/accedi.component';
import { RegistratiComponent } from './component/toolbar/registrati/registrati.component';
import { AggiungiAnnuncioComponent } from './component/aggiungi-annuncio/aggiungi-annuncio.component';
import { MessaggisticaComponent } from './component/toolbar/messaggistica/messaggistica.component';
import { ProfiloVenditoreComponent } from './component/profilo-venditore/profilo-venditore.component';
import { MessaggioComponent } from './component/messaggio/messaggio.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},

    {path: 'messaggistica', component: MessaggisticaComponent},

    {path: 'profilo', component: ProfiloComponent},
    {path: 'accedi', component: AccediComponent},
    {path: 'registrati', component: RegistratiComponent},

    {path: 'carrello', component: CarrelloComponent},

    {path: 'pag-annuncio/:id', component: PagAnnuncioComponent},
    {path: 'aggiungi-annuncio', component: AggiungiAnnuncioComponent},

    {path: 'abbigliamento', component: AbbigliamentoComponent},
    {path: 'accessori', component: AccessoriComponent},
    {path: 'casa', component: CasaComponent},
    {path: 'elettronica', component: ElettronicaComponent},
    {path: 'libri', component: LibriComponent},
    {path: 'scarpe', component: ScarpeComponent},
    {path: 'sport', component: SportComponent},

    {path: 'chi-siamo', component: ChiSiamoComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'come-funziona', component: ComeFunzionaComponent},

    {path: 'profilo-venditore/:id', component: ProfiloVenditoreComponent},
    {path: 'messaggio', component: MessaggioComponent},
  ]},

  {path: 'pag-annuncio', component: PagAnnuncioComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
