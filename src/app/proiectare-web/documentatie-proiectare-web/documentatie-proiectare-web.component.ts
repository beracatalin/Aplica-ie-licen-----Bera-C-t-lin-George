import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-proiectare-web',
  templateUrl: './documentatie-proiectare-web.component.html',
  styleUrls: ['./documentatie-proiectare-web.component.css']
})
export class DocumentatieProiectareWebComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentatieProiectareWebComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  
}
