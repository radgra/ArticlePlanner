import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-my-snackbar',
  templateUrl: './my-snackbar.component.html',
  styleUrls: ['./my-snackbar.component.css']
})
export class MySnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data:any) { }

  ngOnInit() {
  }

}
