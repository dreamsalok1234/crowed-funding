import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-manage-property',
  template: '<router-outlet><spinner></spinner></router-outlet>'
})
export class ManagePropertyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
