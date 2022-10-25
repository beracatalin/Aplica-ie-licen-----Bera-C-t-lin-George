import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-algoritmi',
  templateUrl: './documentatie-algoritmi.component.html',
  styleUrls: ['./documentatie-algoritmi.component.css']
})
export class DocumentatieAlgoritmiComponent implements OnInit {
  constructor(public dialogRef:MatDialogRef<DocumentatieAlgoritmiComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  
}
