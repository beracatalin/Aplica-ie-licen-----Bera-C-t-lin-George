import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionProiectareWebService {

  constructor(private http: HttpClient) { }
  getQuestionJson(){
    return this.http.get<any>("assets/intrebari-proiectare-web.json");
    
  }
}
