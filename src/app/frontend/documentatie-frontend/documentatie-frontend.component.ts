import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-frontend',
  templateUrl: './documentatie-frontend.component.html',
  styleUrls: ['./documentatie-frontend.component.css']
})
export class DocumentatieFrontendComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentatieFrontendComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  
}
