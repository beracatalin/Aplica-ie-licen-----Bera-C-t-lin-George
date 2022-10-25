import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-web-semantic',
  templateUrl: './documentatie-web-semantic.component.html',
  styleUrls: ['./documentatie-web-semantic.component.css']
})
export class DocumentatieWebSemanticComponent implements OnInit {

  
  constructor(public dialogRef:MatDialogRef<DocumentatieWebSemanticComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  
}
