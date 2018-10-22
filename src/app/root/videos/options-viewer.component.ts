import { Component, Input } from '@angular/core';

import { NgxGalleryOptions } from 'ngx-gallery';

@Component({
    selector: 'options-viewer',
    templateUrl: './options-viewer.component.html'
})
export class OptionsViewerComponent {

    visibleCode: boolean = false;

    @Input() options: NgxGalleryOptions;

    showCode(): void {
        this.visibleCode = true;
    }

    hideCode(): void {
        this.visibleCode = false;
    }
}
