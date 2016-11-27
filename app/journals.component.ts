import { Component } from '@angular/core';
import { ExactOnlineService } from './exactonline.service';

import template from './journals.component.html';

@Component({
    template: template
})
export class JournalsComponent {
	journals: any[];

    constructor(private _exactOnlineService: ExactOnlineService) {
    	_exactOnlineService.get('/salesentry/SalesEntries').subscribe(x => this.journals = x);
    }

    get loaded() {
    	return this.journals !== null;
    }
}