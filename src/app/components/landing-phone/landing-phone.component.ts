import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-landing-phone',
  templateUrl: './landing-phone.component.html',
  styleUrls: ['./landing-phone.component.scss']
})
export class LandingPhoneComponent implements OnInit {
  btnInfo = [
    {link:"dialup", text:"phone",color:"success"},
    {link:"contacts", text:"user",color:"light"},
    {link:"/", text:"mail",color:"success"},
    {link:"/", text:"wheel",color:"light"},
  ]

  ngOnInit(): void {}

}
