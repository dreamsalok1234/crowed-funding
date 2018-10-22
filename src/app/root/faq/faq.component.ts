import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit {
  isFirstOpen: boolean = true;
  constructor() { }
  ngOnInit() {
    $(document).ready(function () {
      $('.tab_clicked').click(function () {
        $('.tab_clicked').removeClass('active');
        $(this).toggleClass('active');
      });
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 400) {
          $(".stickyMenu").addClass("darkHeader");
        } else {
          $(".stickyMenu").removeClass("darkHeader");
        }
      });
    });
  }

}
