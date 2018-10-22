import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-transaction',
  template: '<router-outlet><spinner></spinner></router-outlet>'
})
export class ManageTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
