import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcat',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  viewMode = 'tab1'
  constructor() { }

  ngOnInit() {
  }

}
