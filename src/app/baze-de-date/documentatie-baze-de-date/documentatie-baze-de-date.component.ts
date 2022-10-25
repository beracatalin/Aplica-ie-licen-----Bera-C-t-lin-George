import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-baze-de-date',
  templateUrl: './documentatie-baze-de-date.component.html',
  styleUrls: ['./documentatie-baze-de-date.component.css']
})
export class DocumentatieBazeDeDateComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentatieBazeDeDateComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  

}
