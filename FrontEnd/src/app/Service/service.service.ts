import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map, tap } from 'rxjs/operators';

import { Prodotto } from '../Model/Prodotto';
import { Utente } from '../Model/Utente';
import { Recensione } from '../Model/Recensione';
import { ProdottoBackend } from '../Model/ProdottoBackend';
import { Messaggio } from '../Model/Messaggio';
import { ReturnStatement } from '@angular/compiler';
import { AuthService } from '../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient, private auth: AuthService ) { }

 



  //############################################################## PRODOTTO ##############################################################
  getProdotto(idProdotto: string): Observable <Prodotto> {
    return this.http.get<Prodotto>('http://localhost:8080/prodotto-api/prodotti/'+ idProdotto);
  }

  getProdotti(): Observable <Prodotto[]>{
    return this.http.get<Prodotto[]>('http://localhost:8080/prodotto-api/prodotti')
  }

  setProdotto(prodotto: ProdottoBackend): Observable <Prodotto>{
    return this.http.post<Prodotto>('http://localhost:8080/prodotto-api/salvaWeb', prodotto);
  }

  deleteProdotto(prodottoId: number){
    return this.http.delete('http://localhost:8080/prodotto-api/prodotti/'+ prodottoId);
  }

  getProdottiByUserId(idUtente: String): Observable <Prodotto[]> {
    return this.http.get<Prodotto[]>('http://localhost:8080/prodotto-api/prodotti/utente/'+ idUtente);
  }



  //############################################################## RECENSIONE ##############################################################

  //Dato l'id di un venditore restituisce tutte le recensioni che ha ricevuto quel venditore
  getRecensione(idUtente: string): Observable <Recensione[]> {
    return this.http.get<Recensione[]>("http://localhost:8080/recensione-api/recensioni/"+ idUtente);
  }

  setRecensione(recensione: Recensione){
    return this.http.post("http://localhost:8080/recensione-api/crea-recensione/", recensione);
  }

  



  //############################################################## UTENTE ##############################################################

  getUtente(idUtente: string): Observable <Utente> {
    return this.http.get<Utente>("http://localhost:8080/utente-api/utenti/"+ idUtente );
  }

  getUtenteByEmail(emailUtente: string): Observable <Utente> {
    return this.http.get<Utente>("http://localhost:8080/utente-api/utente/"+ emailUtente);
  }

  async accedi(encodedStr: string): Promise<Observable<any>>{
    let headers = new HttpHeaders( { Authorization: "Basic "+encodedStr } )
    return this.http.post('http://localhost:8080/login', null, { headers: headers } )
  }

  registrati(utente: Utente): Observable<Utente> {
    return this.http.post<Utente>('http://localhost:8080/utente-api/salva', utente);
  }

  modificaProfilo(utente: Utente): Observable<Utente> {
    return this.http.put<Utente>('http://localhost:8080/utente-api/utenti/'+ utente.id, utente);
  }

  eliminaProfilo(utente: Utente): Observable<Utente> {
    return this.http.delete<Utente>('http://localhost:8080/utente-api/utenti/'+ utente.id);
  }

  


  
  
  //############################################################## MESSAGGI ##############################################################
  getMessaggiByIdUtente(idUtente: string ): Observable <Messaggio[]>{
    return this.http.get<Messaggio[]>("http://localhost:8080/messaggio-api/messaggi/utente/"+ idUtente)

  }

  salvaMessaggio(messaggio: Messaggio){
    return this.http.post("http://localhost:8080/messaggio-api/salva", messaggio)
  }







  /*METODI PER NOTIFICHE MESSAGGISTICA */
  // badgeValue: number = 5;

  // azzeraNumero(){
  //   this.badgeValue = 0;
  // }




}
