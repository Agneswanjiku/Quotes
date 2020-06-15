import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DateCountPipe } from './date-counts.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DateCountPipe,
    QuoteFormComponent,
    QuoteDetailComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }