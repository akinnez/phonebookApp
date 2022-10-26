import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { Icontact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public addContactList:Icontact = 
     {
      id:"",
     saveTo:"phone",
     firstName:"",
     lastName:"",
     middleName:"",
     mobileNumber:"",
     homeNumber:"",
     otherNumber:"",
     workNumber:"",
     homeEmail:"",
     workEmail:"",
     otherEmail:"",
     whatsapp:'',
     facebook:"",
     ticktok:"",
     twitter:"",
     instagram:"",
     linkedin:"",
     otherMedia:""
    } 

  alpha = ["a","b","c",'d','e','f','g','h','i','j',
  'k','l','m','n','o','p','q','r','s','t',
  'u','v','w','x','y','z'
]

baseUrl:string = "https://localhost:7236/api/phonebook/"
  constructor(private http:HttpClient) { }
  
  convertToNumber(list:Icontact){
   list.mobileNumber = Number(list.mobileNumber)
   list.whatsapp = Number(list.whatsapp)
   list.workNumber = Number(list.workNumber)
   list.homeNumber = Number(list.homeNumber)
   list.otherNumber = Number(list.otherNumber)
    
  }
  startsWithfunc(contact:Icontact| any){
    for (let index = 0; index < this.alpha.length; index++) {
        if(contact.firstName.toLocaleLowerCase().startsWith(this.alpha[index])){
          contact.startsWith = this.alpha[index].toUpperCase();
        }
 }
   }
   
   clean(){
    var clear = document.querySelectorAll('.clear');
    clear.forEach((e:any)=>{
     e.value = "";
    })
  }
  getAllContact():Observable<Icontact[]>{
    return this.http.get<Icontact[]>(this.baseUrl)
  }
  addContact(addContactData:Icontact):Observable<Icontact>{
    addContactData.id = "00000000-0000-0000-0000-000000000000"
    return this.http.post<Icontact>(this.baseUrl, addContactData )
  }
  getOneContact(id:string):Observable<Icontact>{
    return this.http.get<Icontact>(this.baseUrl + `${id}`)
  }
  updateContact(data:Icontact,id:string):Observable<Icontact>{
    return this.http.put<Icontact>(this.baseUrl + `${id}`, data)
  }
  deleteOne(id:string):Observable<Icontact>{
    return this.http.delete<Icontact>(this.baseUrl + `${id}`)
  }
  deleteMultiple(data:any):Observable<any>{
    return this.http.delete<any>(this.baseUrl, {
      body: data
    })
  }
}
