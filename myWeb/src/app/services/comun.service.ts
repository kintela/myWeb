import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunService {
  urlWebApi = 'https://localhost:7228/api';
  //urlWebApi = 'https://kintelaapi-e0axhtfzdzdycqec.northeurope-01.azurewebsites.net/api';
  
  constructor() { }
}
