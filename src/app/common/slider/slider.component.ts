import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/Ilogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  carouselOptions = 
    {
      items: 1, 
      dots: true, 
      navigation: false, 
      loop:true,
      margin:10,
      autoplay:true,
      animateOut: 'fadeOut',
      autoHeight: true,
      autoHeightClass: 'owl-height',
      
  }


    images = [

        {
            text: "Festive Deer",
            image: "https://rukminim1.flixcart.com/flap/1800/1800/image/bd9c3758e25371d7.jpg?q=80"
        },
        {
            text: "Festive Deer",
            image: "https://cdn.shopify.com/s/files/1/1298/4787/files/proshopbanner_bc167048-5edb-4908-97d5-c59e31483e39_1400x.progressive.jpg?v=1522416883"
        },
        {
            text: "Festive Deer",
            image: "https://sambern.com/image/cache/catalog/123/slider-02-1570x450-1570x450.jpg"
        }
    ];
 
  constructor() { }

  ngOnInit() {
  }


}
