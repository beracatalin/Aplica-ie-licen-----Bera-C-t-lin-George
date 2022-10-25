import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { QuestionWebSemanticService } from 'src/app/service/question-web-semantic.service';
import { DocumentatieWebSemanticComponent } from '../../documentatie-web-semantic/documentatie-web-semantic.component';

@Component({
  selector: 'app-intrebari-web-semantic',
  templateUrl: './intrebari-web-semantic.component.html',
  styleUrls: ['./intrebari-web-semantic.component.css']
})
export class IntrebariWebSemanticComponent implements OnInit {

  public name : string="";
  public questionList : any = [];
  public currentQuestion : number = 0;
  public points : number =0;
  counter=60;
  correctAnswer: number = 0;
  incorrectAnswer : number = 0;
  interval$:any; 
  progress:string="0";
  isQuizCompleted:boolean=false;
  constructor(public questionService : QuestionWebSemanticService, private router: Router,public dialog:MatDialog){ }

 
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
    this.isQuizCompleted;
  }
  openDialog(){
    this.dialog.open(DocumentatieWebSemanticComponent, {panelClass: 'custom-dialog-container'});
  }
  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      this.questionList = res.questions;
    })
  }
  nextQuestion(){
    if(this.currentQuestion < this.questionList.length){
      this.currentQuestion++;
      
    }
  }
  previousQuestion(){
    this.currentQuestion--;
  }
  answer(currentQno:number,option:any){
    if(currentQno == this.questionList.length-1){
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if(option.correct){
      this.points+=1;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.getProgress();
        this.counter = 60;
      }, 1000);
    }else{
      this.incorrectAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.counter = 60;
      }, 1000);
    }
  }
  startCounter(){
    this.interval$ = interval(1000)
    .subscribe(_val=>{
      this.counter--;
      if(this.counter===0){
        this.currentQuestion++;
        this.counter=60;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter(){
      this.interval$.unsubscribe();
      this.counter = 0;
  }
  resetCounter(){
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }
  resetQuiz(){
    this.resetCounter();
    this.getAllQuestions();
    this.points=0;
    this.counter=60;
    this.currentQuestion=0;
    this.progress="0";
    this.correctAnswer = 0;
    this.incorrectAnswer = 0;
  }
  getProgress(){
    this.progress = ((this.currentQuestion/this.questionList.length)*100).toString();
    return this.progress;
  }
 
}

