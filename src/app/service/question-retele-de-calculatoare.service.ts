import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestionReteleDeCalculatoareService {

  constructor(private http: HttpClient) { }
  getQuestionJson(){
    return this.http.get<any>("assets/intrebari-retele-calculatoare.json");
    
  }
}
