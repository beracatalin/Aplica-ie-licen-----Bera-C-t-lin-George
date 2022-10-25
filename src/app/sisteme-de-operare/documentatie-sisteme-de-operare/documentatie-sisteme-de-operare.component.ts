import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-sisteme-de-operare',
  templateUrl: './documentatie-sisteme-de-operare.component.html',
  styleUrls: ['./documentatie-sisteme-de-operare.component.css']
})
export class DocumentatieSistemeDeOperareComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentatieSistemeDeOperareComponent>) { }

  ngOnInit(): void {
  }
  closeModal(){
    this.dialogRef.close();
  }
}
