import { Component, OnInit, ViewChild, ElementRef, NgModule} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-quiz-sisteme-de-operare',
  templateUrl: './quiz-sisteme-de-operare.component.html',
  styleUrls: ['./quiz-sisteme-de-operare.component.css']
})
export class QuizSistemeDeOperareComponent implements OnInit {
  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
}
