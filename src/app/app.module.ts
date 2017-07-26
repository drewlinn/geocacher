import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { GeocacheFormComponent } from './geocache-form/geocache-form.component';
import { LocateGeocacheService } from './locate-geocache.service';

@NgModule({
  declarations: [
    AppComponent,
    GeocacheFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LocateGeocacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
