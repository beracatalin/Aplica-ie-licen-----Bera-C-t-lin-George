import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DocumentatieBazeDeDateComponent } from 'src/app/baze-de-date/documentatie-baze-de-date/documentatie-baze-de-date.component';

@Component({
  selector: 'app-documentatie-baze-de-date-distribuite',
  templateUrl: './documentatie-baze-de-date-distribuite.component.html',
  styleUrls: ['./documentatie-baze-de-date-distribuite.component.css']
})
export class DocumentatieBazeDeDateDistribuiteComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentatieBazeDeDateComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  
}
