import { MapsComponent } from './views/maps/maps.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { GaleryComponent } from './views/galery/galery.component';
import { ChoiceComponent } from './views/choice/choice.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { CustomerViewComponent } from './views/customer-view/customer-view.component';
import { FuncViewComponent } from './views/func-view/func-view.component';
import { SignupRegularCustomerComponent } from './views/signup-regular-customer/signup-regular-customer.component';
import { SignupBarberComponent } from './views/signup-barber/signup-barber.component';
import { SignupTattooComponent } from './views/signup-tattoo/signup-tattoo.component';
import { ChoiceRegisterComponent } from './views/choice-register/choice-register.component';
import { ChoiceEmployeeComponent } from './views/choice-employee/choice-employee.component';
import { LoginCustomerComponent } from './views/login-customer/login-customer.component';
import { TattooartistComponent } from './views/tattooartist/tattooartist.component';
import { BarberComponent } from './views/barber/barber.component';
import { CustomerComponent } from './views/customer/customer.component';
import { VipCustomerComponent } from './views/vip-customer/vip-customer.component';
import { EditBarberComponent } from './views/edit-barber/edit-barber.component';
import { EditTattooartistComponent } from './views/edit-tattooartist/edit-tattooartist.component';
import { EditCustomerComponent } from './views/edit-customer/edit-customer.component';
import { VipcustomeViewComponent } from './views/vipcustome-view/vipcustome-view.component';
import { FuncTatooArtistViewComponent } from './views/func-tatoo-artist-view/func-tatoo-artist-view.component';
import { LoginBarberComponent } from './views/login-barber/login-barber.component';
import { LoginTatooArtistComponent } from './views/login-tatoo-artist/login-tatoo-artist.component';
import {tablepriceComponent } from './views/table-price/tableprice.component';

const routes: Routes = [
  {path:'', redirectTo:'/homepage', pathMatch:'full'},
  {path: "homepage", component: HomePageComponent},
  {path: "gallery", component: GaleryComponent},
  {path: "choice", component: ChoiceComponent},
  {path: "loginvip", component: LoginComponent},
  {path: "logincustomer", component: LoginCustomerComponent},
  {path: "logintatooartist", component: LoginTatooArtistComponent},
  {path: "loginbarber", component: LoginBarberComponent},
  {path: "signupVip", component: SignupComponent},
  {path: "dashboardcustomer", component: CustomerViewComponent},
  {path: "dashboardvip", component: VipcustomeViewComponent},
  {path: "dashboardtatooartist" ,component: FuncTatooArtistViewComponent},
  {path: "dashboardbarber", component: FuncViewComponent} ,
  {path: "signupCustomer", component: SignupRegularCustomerComponent},
  {path: "signupBarber", component: SignupBarberComponent},
  {path: "signupTattoo", component: SignupTattooComponent},
  {path: "choiceregister", component: ChoiceRegisterComponent},
  {path: "choiceemployee", component: ChoiceEmployeeComponent},
  {path: "tattooartist", component: TattooartistComponent},
  {path: "barber", component: BarberComponent},
  {path: "customer", component: CustomerComponent},
  {path: "vipcustomer", component: VipCustomerComponent},
  {path: "editbarber", component: EditBarberComponent},
  {path: "edittattooartist", component: EditTattooartistComponent},
  {path: "editvipcustomer", component: EditCustomerComponent},
  {path: "prices", component: tablepriceComponent},
  {path: "maps", component: MapsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
