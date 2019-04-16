import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Output('confirm') responseEvent:EventEmitter<boolean> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  handleResponse(res:boolean) {
    this.responseEvent.emit(res)
  }


}
