import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
getBackgroundUrl()
{
  return "url('../../assets/images/home2.jpg')";
}

getSmallBackgroundUrl(){
  return "url('../../assets/images/home3.jpg')";
}

}
