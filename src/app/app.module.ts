import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { OrderByPipe } from './order-by.pipe';
import { PersonFilterPipe } from './person-filter.pipe';
import { ChildPersonComponent } from './child-person/child-person.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe,
    PersonFilterPipe,
    ChildPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
