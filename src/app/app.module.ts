import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from './base/base.component';
import {NoContentComponent} from './no-content/no-content.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {Web3Service} from './util/web3.service';
import {FormsModule} from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  },
  {
    path: '**',
    component: NoContentComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    NoContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false,
        useHash: true
      }
    )
  ],
  providers: [
    Web3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
