import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { BehaviorSubject } from 'rxjs';

import { AppConfig } from './app.config';

@Injectable()
export class ExactOnlineService {
	accounts: BehaviorSubject<any[]>;
	activeAccount: BehaviorSubject<any>;

	constructor(private appConfig: AppConfig, private _http: Http, private _oauthService: OAuthService) {
		_oauthService.loginUrl = "https://start.exactonline.be/api/oauth2/auth"; 
        _oauthService.redirectUri = window.location.origin;
        _oauthService.clientId = this.appConfig.exactonline.clientId;
        _oauthService.setStorage(sessionStorage);
        _oauthService.tryLogin({});

        if(!_oauthService.hasValidAccessToken()){            
            _oauthService.initImplicitFlow();
        }

		this.accounts = new BehaviorSubject(null);
		this.activeAccount = new BehaviorSubject(null);

		this.accounts.subscribe(x => this.activeAccount.next(x ? x[0] : null));

		this.get('/current/Me', true).subscribe(x => this.accounts.next(x));
	}

	get(path: string, ignoreDivison: boolean = false) {
		let url = 'http://cors-proxy.nillis.it/?url=https://start.exactonline.be/api/v1';

		if(!ignoreDivison){
			if(!this.activeAccount.getValue()) {
				return this.activeAccount
							.skip(1)
							.take(1)
							.flatMap(x => this.get(path, ignoreDivison));
			}

			url += '/' + this.activeAccount.getValue().CurrentDivision;
		}

		url += path;

		return this._http.get(
			url, 
			{
				headers: new Headers({
				    'Authorization': `Bearer ${this._oauthService.getAccessToken()}`,
				    'Accept': 'application/json'
				})
			}
		).map(res => res.json().d.results);
	}
}