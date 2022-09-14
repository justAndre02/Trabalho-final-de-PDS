import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  apiUrl = `http://localhost:3000`
  barberUrl = `${this.apiUrl}/barber`;
  tatooartistUrl = `${this.apiUrl}/tatooartist`;
  customerUrl = `${this.apiUrl}/customer`;
  vipcustomerUrl = `${this.apiUrl}/vipcustomer`;
  choiceUrl = `${this.apiUrl}/choice`;
  loginUrl= `${this.apiUrl}/login`;
  timetableUrl= `${this.apiUrl}/timetable`;
  planUrl= `${this.apiUrl}/plan`;
  servicetypeUrl = `${this.apiUrl}/servicetype`;
  cuttypeUrl= `${this.apiUrl}/cuttype`;
  tatootypeUrl= `${this.apiUrl}/tatootype`;
  barbershopUrl= `${this.apiUrl}/barbershop`;
  
  getAllbarbers(){
      return this._http.get(this.barberUrl+"/all");
  }

  getAllTatooArtist(){
      return this._http.get(this.tatooartistUrl+"/all");  
  }
  

  getAllbarbershop(){
    return this._http.get(this.barbershopUrl +"/all");
  }

  getAllservicetype(){
    return this._http.get(this.servicetypeUrl +"/all");
  }

  getAlltatootype(){
    return this._http.get(this.tatootypeUrl +"/all");
  }


  getAllcuttype(){
    return this._http.get(this.cuttypeUrl +"/all");
  }


  logout(){
    localStorage.removeItem('token'); 
    localStorage.removeItem('email'); 
    localStorage.removeItem('Lid'); 
    return this._http.get(this.apiUrl+"/logout");
  }

  logoutCommon(){
    localStorage.removeItem('token'); 
    localStorage.removeItem('name'); 
    localStorage.removeItem('nif'); 
    return this._http.get(this.apiUrl+"/logout");
  }

  loginVip(logindata:Login){
    return this._http.post(this.loginUrl+"/vip",logindata);
  }

  loginBarber(logindata:Login){
    return this._http.post(this.loginUrl+"/barber",logindata);
  }

  loginTatooArtist(logindata:Login){
    return this._http.post(this.loginUrl+"/tattoartist",logindata);
  }

  loginCustomer(logindata:LoginCustomer){
    return this._http.post(this.loginUrl+"/common",logindata);
  }
  registerVipCustomer(vipCustomerData:VIPCustumerRegisterData){
    return this._http.post(this.vipcustomerUrl+"/signup",vipCustomerData);
  }
  registerCustomer(regularCustomerData:RegularCustomerRegisterData){
    return this._http.post(this.customerUrl+"/signup", regularCustomerData);
  }
  registerTattooArtist(tatooArtistRegisterData:EmployeeRegisterData)
  {
    return this._http.post(this.tatooartistUrl+"/signup", tatooArtistRegisterData);
  }
  registerBarber(barberRegisterData:EmployeeRegisterData)
  {
    return this._http.post(this.barberUrl+"/signup", barberRegisterData);
  }
  editVipCostumer(editdataVip:editCostumer,id:any){
    id = id.slice(1,-1)
    return this._http.put(this.vipcustomerUrl+`/update/${id}`,editdataVip);
  }
  editBarber(editdataBarber:editEmployer,id:any){
    id = id.slice(1,-1)
    return this._http.put(this.barberUrl+`/update/${id}`,editdataBarber);
  }
  editTatto(editdataTatto:editEmployer,id:any){
    id = id.slice(1,-1);
    return this._http.put(this.tatooartistUrl+`/update/${id}`,editdataTatto);
  }

  getVip(id:any){
    id = id.slice(1,-1)
    return this._http.get(this.vipcustomerUrl+`/${id}`);
  }

  getBarber(id:any){
    id = id.slice(1,-1)
    return this._http.get(this.barberUrl+`/${id}`);
  }

  getCustomer(nif:any){
    return this._http.get(this.customerUrl+`/${nif}`);
  }

  getTatooArtist(id:any){
    id = id.slice(1,-1)
    return this._http.get(this.tatooartistUrl+`/${id}`);
  }

  make_scheduleCustomer(dados:Schedule,nif:any){
    nif = nif.slice(1,-1)
    return this._http.post(this.customerUrl+`/schedule/${nif}`,dados);

  }
  make_scheduleVip(dados:Schedule,nif:any){
    return this._http.post(this.vipcustomerUrl+`/schedule/${nif}`,dados);
  }
  cancel_scheduleCustomer(dados:CancelSchedule){
    //return this._http.delete(this.customerUrl+"/scheduleCancel",dados);
    
  }
  cancel_scheduleVip(dados:CancelSchedule){
    //return this._http.delete(this.vipcustomerUrl+"/scheduleCancel",dados);
  }

  getCurrentScheduleTatooArtist(id:any){
    id = id.slice(1,-1)
    return this._http.get(this.tatooartistUrl+`/schedule/${id}`);
  }

  getCurrentScheduleBarber(id:any){
    id = id.slice(1,-1)
    console.log(id);
    return this._http.get(this.barberUrl+`/schedule/${id}`);
  }

  getCurrentScheduleCustomer(nif:any){
    nif = nif.slice(1,-1)
    return this._http.get(this.customerUrl+`/schedule/${nif}`);
  }

  getCurrentScheduleVip(nif:any){
    return this._http.get(this.vipcustomerUrl+`/schedule/${nif}`);
  }
  
}

export interface LoginCustomer{
  name?:string;
  nif?:number;
}

export interface editCostumer{
name?:string;
}

export interface editEmployer{
name?:string;
phone?:string;
}

export interface Login{
  email?:string;
  pass?:string;
}

export interface EmployeeRegisterData {
  email?:any; 
  phone?:any;
  pass?:any;
  name?:any;
}

export interface VIPCustumerRegisterData {
  nif:any;
  pid:any;
  email:any;
  pass:any;
}

export interface RegularCustomerRegisterData {
  nif:any;
  name: string;
}

export interface Schedule {
  Bid: any;
  date: string;
  Time: string;
  ServiceType: any;
  Desc: string;
  typeId: any;
  FuncId: any;
}

export interface CancelSchedule {
  Scid:any;
}





