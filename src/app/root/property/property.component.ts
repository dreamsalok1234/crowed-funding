import { Component, OnInit, ViewEncapsulation, ViewChild, Inject, ViewContainerRef, ElementRef } from '@angular/core';
import { DOCUMENT, DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import 'hammerjs';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';
import { PropertyService } from '../../_services/root/property.service';
import { RootLayoutComponent } from '../../layouts/root/root-layout.component';

import {
  NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation,
  NgxGalleryImageSize, NgxGalleryComponent, NgxGalleryLayout,
  NgxGalleryOrder
} from 'ngx-gallery';

import { Example } from './image-slider.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PropertyComponent implements OnInit {
  isFirstOpen: boolean = true;
  model : any = {};
  loading = false;
  propertyItem = false;
  propertyId : any;
  responseItem : any; 
  propertyDeatils : any;
  constructor(private loremIpsumService: NgxLoremIpsumService, public toastr: ToastsManager, public rootLayout: RootLayoutComponent, private pageScrollService: PageScrollService, private router: Router, private propertyService: PropertyService, vcr: ViewContainerRef,
    @Inject(DOCUMENT) private document: any, private sanitization: DomSanitizer) { 
    this.rootLayout.globalloader = false;
    this.rootLayout.headerOne = 'abut_header';
    this.toastr.setRootViewContainerRef(vcr);
  }

// slider data fatching
examples: Example[];

  onlyPreviewExample: Example;
  @ViewChild('onlyPreviewGallery') onlyPreviewGallery: NgxGalleryComponent;
  @ViewChild('signupBtn2') signupBtn2: ElementRef;
  buttonsNavigationExample: Example;
  @ViewChild('buttonsNavigationGallery') buttonsNavigationGallery: NgxGalleryComponent;


  ngOnInit(): void {

    this.examples = new Array<Example>();
    this.BindPropertyDetails(this.router.url);
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

  BindPropertyDetails(projectSlug : string) {
    var projectData = projectSlug.split('/');
    var propertySlug = projectData[projectData.length - 1];
    var objectType = this;
    this.propertyService.getPropertyDetails(propertySlug, function(err, response){
        objectType.rootLayout.globalloader = true;
        if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        if( response.statusCode == 200 ) {
            objectType.propertyDeatils = response.data.data;
            objectType.propertyItem = true;
            objectType.propertyId = objectType.propertyDeatils.propertyId;  
        }
        else 
          objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
    })
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

  RequestDocement() {
    this.rootLayout.globalloader = false;
    var objectType = this;
    if(localStorage.getItem('userAccessToken') !='' && localStorage.getItem('userAccessToken') != undefined) {
      this.propertyService.requestPropertyDocuments(this.propertyId,function(err, response){
        this.rootLayout.globalloader = true;
        if( err )
          objectType.toastr.error("Something Going Wrong",null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});
        if( response.statusCode == 200 ) 
            objectType.toastr.success(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true}); 
        else 
          objectType.toastr.error(response.data.message,null,{autoDismiss: true, maxOpened: 1,preventDuplicates: true});

      })
    }
    else {
      this.rootLayout.globalloader = true;
       document.getElementById('signupBtn2').click();
     }
     
  }

}
