import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PensionPortalComponent } from './pension-portal/pension-portal.component';
import { PensionDetailsComponent } from './pension-portal/pension-details/pension-details.component';
import { PensionerDetailsComponent } from './pension-portal/pensioner-details/pensioner-details.component';
import { ErrorDetailsComponent } from './pension-portal/error-details/error-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    PensionPortalComponent,
    PensionDetailsComponent,
    PensionerDetailsComponent,
    ErrorDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
