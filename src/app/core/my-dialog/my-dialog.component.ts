import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Article } from 'src/app/models/article';

export interface MyDialogData {
  type: 'addReading' | 'deleteArticle',
  article?:Article
}

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<MyDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:MyDialogData) { }

  ngOnInit() {
  }

  handleArticleDelete(confirm:boolean) {
    this.dialogRef.close(confirm)
  }
}
