import { Component, OnInit, ViewChild, ElementRef, NgModule} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-quiz-algoritmi',
  templateUrl: './quiz-algoritmi.component.html',
  styleUrls: ['./quiz-algoritmi.component.css']
})

export class QuizAlgoritmiComponent implements OnInit{
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
