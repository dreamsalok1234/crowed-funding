import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage-contact',
  template: '<router-outlet><spinner></spinner></router-outlet>'
})
export class ManageContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
