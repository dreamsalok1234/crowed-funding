import { Component, OnInit, ViewEncapsulation, ViewChild, Inject } from '@angular/core';
import { DOCUMENT, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import 'hammerjs';
import { Observable } from 'rxjs/Observable';

import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';

import {
  NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation,
  NgxGalleryImageSize, NgxGalleryComponent, NgxGalleryLayout,
  NgxGalleryOrder
} from 'ngx-gallery';

import { Example } from './image-slider.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VideosComponent implements OnInit {
  isFirstOpen: boolean = true;
  constructor(private loremIpsumService: NgxLoremIpsumService, private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any, private sanitization: DomSanitizer) { }

// slider data fatching
examples: Example[];

  onlyPreviewExample: Example;
  @ViewChild('onlyPreviewGallery') onlyPreviewGallery: NgxGalleryComponent;
  buttonsNavigationExample: Example;
  @ViewChild('buttonsNavigationGallery') buttonsNavigationGallery: NgxGalleryComponent;


  ngOnInit(): void {

    this.examples = new Array<Example>();

    this.examples.push(

      new Example('Auto play', this.getImages(), [{
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: true,
        previewAutoPlayPauseOnHover: true,

        arrowPrevIcon: 'fa fa-arrow-circle-o-left',
        arrowNextIcon: 'fa fa-arrow-circle-o-right',
        closeIcon: 'fa fa-window-close',
        fullscreenIcon: 'fa fa-arrows',
        spinnerIcon: 'fa fa-refresh fa-spin fa-3x fa-fw',
        previewFullscreen: true,

        imageAnimation: NgxGalleryAnimation.Zoom,

        imageArrowsAutoHide: true,
        thumbnailsArrowsAutoHide: true
      }])
    )

  }



  getUrlTitle(title: string) {
    return title.toLowerCase()
      .replace(new RegExp(' ', 'g'), '-')
      .replace(new RegExp('---', 'g'), '-');
  }

  showNext(): void {
    this.buttonsNavigationGallery.showNext();
  }

  showPrev(): void {
    this.buttonsNavigationGallery.showPrev();
  }



  private getImages(description: boolean = false, randomCount: boolean = false, randomize: boolean = true): NgxGalleryImage[] {
    let images = new Array<NgxGalleryImage>();
    let indexes = [1, 2, 3, 4, 5, 6, 7, 8];

    if (randomize) {
      indexes = this.randomizeArray(indexes);
    }

    if (randomCount) {
      indexes = indexes.slice(0, this.getRandomInt(1, 4));
    }

    indexes.map(i => images.push(this.getImage(i, description)));

    return images;
  }

  private getImage(index: number, description: boolean): NgxGalleryImage {
    return {
      small: 'assets/img/' + index + '-small.jpeg',
      medium: 'assets/img/' + index + '-medium.jpeg',
      big: 'assets/img/' + index + '-big.jpeg',
      description: description ? this.getRandomDescription() : ''
    }
  }

  private getSafeImages(description: boolean = false): NgxGalleryImage[] {
    let images = new Array<NgxGalleryImage>();
    let indexes = this.randomizeArray([1, 2, 3, 4, 5, 6, 7, 8]);

    indexes.map(i => images.push(this.getImage(i, description)));

    return images;
  }


  private getRandomDescription(): string {
    return this.loremIpsumService.getRandom(1, 5);
  }

  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private randomizeArray(numbersArray: number[]) {
    return numbersArray.sort(() => .5 - Math.random());
  }

}
