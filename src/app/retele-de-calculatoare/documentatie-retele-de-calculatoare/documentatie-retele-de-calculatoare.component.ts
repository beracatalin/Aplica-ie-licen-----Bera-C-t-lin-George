import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-retele-de-calculatoare',
  templateUrl: './documentatie-retele-de-calculatoare.component.html',
  styleUrls: ['./documentatie-retele-de-calculatoare.component.css']
})
export class DocumentatieReteleDeCalculatoareComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentatieReteleDeCalculatoareComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  
}
