import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular2-oauth2/oauth-service';

import { ExactOnlineService } from './exactonline.service';
import template from './app.component.html';
import './app.component.css';

@Component({
    selector: 'app',
    template: template,
})
export class AppComponent { 
    accounts: any[];
    activeAccount: any;

	constructor(exactOnlineService: ExactOnlineService, router: Router) {
        exactOnlineService.accounts.subscribe(x => this.accounts = x);
        exactOnlineService.activeAccount.subscribe(x => this.activeAccount = x);
    }

    get loaded() {
        return this.activeAccount != null;
    }
}