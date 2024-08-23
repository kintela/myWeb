import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunService {
  urlWebApi = 'https://localhost:7228/api';
  
  constructor() { }
}
