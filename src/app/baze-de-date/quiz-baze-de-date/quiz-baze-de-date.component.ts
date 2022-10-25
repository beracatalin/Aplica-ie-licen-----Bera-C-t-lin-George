import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-baze-de-date',
  templateUrl: './quiz-baze-de-date.component.html',
  styleUrls: ['./quiz-baze-de-date.component.css']
})
export class QuizBazeDeDateComponent implements OnInit{
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