import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-frontend',
  templateUrl: './quiz-frontend.component.html',
  styleUrls: ['./quiz-frontend.component.css']
})
export class QuizFrontendComponent implements OnInit {

  nameGroup!: FormGroup;
  @ViewChild('name') nameKey!:ElementRef;
 
  constructor(private fb : FormBuilder) {  
    this.createForm();
  }
  
  ngOnInit(): void {
  
  }
  startQuiz(){
    localStorage.setItem('name', this.nameKey.nativeElement.value);
  }
  createForm() {
    this.nameGroup = this.fb.group({
       name: ['', Validators.required ]
    });
  }
}
