import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PensionDetailsComponent } from './pension-portal/pension-details/pension-details.component';
import { PensionPortalComponent } from './pension-portal/pension-portal.component';

const routes: Routes = [
  {path: "login", component: AuthenticationComponent},
  {path: "pensionportal", component: PensionPortalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
