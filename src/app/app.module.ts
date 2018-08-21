import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';

import { RestApiService } from './rest-api.service';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
