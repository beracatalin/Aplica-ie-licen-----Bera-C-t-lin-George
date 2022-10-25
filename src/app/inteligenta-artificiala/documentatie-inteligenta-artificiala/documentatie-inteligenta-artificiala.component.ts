import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-documentatie-inteligenta-artificiala',
  templateUrl: './documentatie-inteligenta-artificiala.component.html',
  styleUrls: ['./documentatie-inteligenta-artificiala.component.css']
})
export class DocumentatieInteligentaArtificialaComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DocumentatieInteligentaArtificialaComponent>){}
  
  ngOnInit(): void {}
  closeModal(){
    this.dialogRef.close();
  }
  
}
