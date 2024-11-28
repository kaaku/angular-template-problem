import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'shared';

import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
