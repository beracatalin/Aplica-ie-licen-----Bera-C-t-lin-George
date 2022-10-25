import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-web-semantic',
  templateUrl: './quiz-web-semantic.component.html',
  styleUrls: ['./quiz-web-semantic.component.css']
})
export class QuizWebSemanticComponent implements OnInit {

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
