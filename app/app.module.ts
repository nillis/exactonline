import { NgModule, enableProdMode }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { OAuthService } from 'angular2-oauth2/oauth-service';
import { ExactOnlineService } from './exactonline.service';
import { AppConfig, ProductionConfig, TestConfig } from './app.config';

import { AppComponent }  from './app.component';
import { HomeComponent }  from './home.component';
import { JournalsComponent }  from './journals.component';

const isDevelopment = location.hostname === 'localhost';
if(!isDevelopment) enableProdMode();

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'journals', component: JournalsComponent }
];

@NgModule({
  imports:      [ 
	  BrowserModule, 
    HttpModule,
	  RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
	  AppComponent,
	  HomeComponent,
    JournalsComponent 
  ],
  providers: [ 
    OAuthService, 
    ExactOnlineService,
    { provide: AppConfig, useValue: isDevelopment ? TestConfig : ProductionConfig }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }