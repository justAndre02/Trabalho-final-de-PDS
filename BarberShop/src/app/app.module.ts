import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NavComponent } from './views/home-page/components/nav/nav.component';
import { ContentComponent } from './views/home-page/components/content/content.component';
import { AboutComponent } from './views/home-page/components/about/about.component';
import { FooterComponent } from './views/home-page/components/footer/footer.component';
import { SocialComponent } from './views/home-page/components/social/social.component';
import { GaleryComponent } from './views/galery/galery.component';
import { ChoiceComponent } from './views/choice/choice.component';
import { UserOptionsComponent } from './views/choice/components/user-options/user-options.component';
import { LoginComponent } from './views/login/login.component';
import { LoginFieldComponent } from './views/login/components/login-field/login-field.component';
import { RegisterMeComponent } from './views/login/components/register-me/register-me.component';
import { SignupComponent } from './views/signup/signup.component';
import { LoginField2Component } from './views/signup/components/login-field2/login-field2.component';
import { CustomerViewComponent } from './views/customer-view/customer-view.component';
import { FuncViewComponent } from './views/func-view/func-view.component';
import { ApiServiceService } from './api-service.service';
import { NavAfterLoginComponent } from './views/home-page/components/nav-after-login/nav-after-login.component';
import { SignupTattooComponent } from './views/signup-tattoo/signup-tattoo.component';
import { SignupBarberComponent } from './views/signup-barber/signup-barber.component';
import { SignupFieldComponent } from './views/signup-barber/components/signup-field/signup-field.component';
import { SignupRegularCustomerComponent } from './views/signup-regular-customer/signup-regular-customer.component';
import { RegisterOptionsComponent } from './views/choice/components/register-options/register-options.component';
import { EmployeeOptionsComponent } from './views/choice/components/employee-options/employee-options.component';
import { ChoiceRegisterComponent } from './views/choice-register/choice-register.component';
import { ChoiceEmployeeComponent } from './views/choice-employee/choice-employee.component';
import { LoginCustomerComponent } from './views/login-customer/login-customer.component';
import { RegisterCustomerComponent } from './views/login/components/register-customer/register-customer.component';
import { TattooartistComponent } from './views/tattooartist/tattooartist.component';
import { BarberComponent } from './views/barber/barber.component';
import { CustomerComponent } from './views/customer/customer.component';
import { EditTattooartistComponent } from './views/edit-tattooartist/edit-tattooartist.component';
import { EditBarberComponent } from './views/edit-barber/edit-barber.component';
import { EditCustomerComponent } from './views/edit-customer/edit-customer.component';
import { VipCustomerComponent } from './views/vip-customer/vip-customer.component';
import { VipcustomeViewComponent } from './views/vipcustome-view/vipcustome-view.component';
import { FuncTatooArtistViewComponent } from './views/func-tatoo-artist-view/func-tatoo-artist-view.component';
import { LoginTatooArtistComponent } from './views/login-tatoo-artist/login-tatoo-artist.component';
import { LoginBarberComponent } from './views/login-barber/login-barber.component';
import { NavAfterLoginBarberComponent } from './views/home-page/components/nav-after-login-barber/nav-after-login-barber.component';
import { NavAfterLoginTattoartistComponent } from './views/home-page/components/nav-after-login-tattoartist/nav-after-login-tattoartist.component';
import { NavAfterLoginVipComponent } from './views/home-page/components/nav-after-login-vip/nav-after-login-vip.component';
import {tablepriceComponent } from './views/table-price/tableprice.component';
import { MapsComponent } from './views/maps/maps.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavComponent,
    ContentComponent,
    AboutComponent,
    FooterComponent,
    SocialComponent,
    GaleryComponent,
    ChoiceComponent,
    UserOptionsComponent,
    LoginComponent,
    LoginFieldComponent,
    RegisterMeComponent,
    SignupComponent,
    LoginField2Component,
    CustomerViewComponent,
    FuncViewComponent,
    NavAfterLoginComponent,
    SignupTattooComponent,
    SignupBarberComponent,
    SignupFieldComponent,
    SignupRegularCustomerComponent,
    RegisterOptionsComponent,
    EmployeeOptionsComponent,
    ChoiceRegisterComponent,
    ChoiceEmployeeComponent,
    LoginCustomerComponent,
    RegisterCustomerComponent,
    TattooartistComponent,
    BarberComponent,
    CustomerComponent,
    EditTattooartistComponent,
    EditBarberComponent,
    EditCustomerComponent,
    VipCustomerComponent,
    VipcustomeViewComponent,
    FuncTatooArtistViewComponent,
    LoginTatooArtistComponent,
    LoginBarberComponent,
    NavAfterLoginBarberComponent,
    NavAfterLoginTattoartistComponent,
    NavAfterLoginVipComponent,
    tablepriceComponent,
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
