import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontact } from 'src/app/model/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-viewcontacts',
  templateUrl: './viewcontacts.component.html',
  styleUrls: ['./viewcontacts.component.scss']
})
export class ViewcontactsComponent implements OnInit {
  id:any;
  btnInfo = [
    {link:"dialup", text:"phone",color:"success"},
    {link:"contacts", text:"video",color:"light"},
    {link:"/", text:"mail",color:"success"},
  ]

  oneContact:Icontact | any
  constructor(private router:Router,private route: ActivatedRoute,private contactservice: ContactService) { 
     this.oneContact = this.contactservice.addContactList
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next:(params)=>{
       this.id = params.get("name") 
        if (this.id) {
          this.contactservice.getOneContact(this.id).subscribe(
            {
              next:(response)=>{
                this.oneContact = response
                this.contactservice.startsWithfunc(response)       
              },
              error:(err)=>{
                console.log(err); 
              }
            }
          )
        }
        }
      }
    )
  }

  delete(e:string){
    this.contactservice.deleteOne(e).subscribe(
      {
        next:(response)=>{
          this.router.navigate(['/contacts'])
        },
        error:(error)=>{
          console.log(error);
        }
      }
    )
  }

}
