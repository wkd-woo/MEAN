import { Component, OnInit } from '@angular/core';

export class Location {
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  name = 'Burger King'

  locations: Location[] = [{
    _id: '615c6b1f60fdf2845a6b94b4',
    name: 'Burger King - 2017265104',
    distance: 1.3,
    address: '경기도 수원시 팔달구 인계동',
    rating: 3,
    facilities: ['Hot drinks', 'Premium wifi', 'Food']
  },
  {
    _id: '615c6cbe60fdf2845a6b94b9',
    name: 'AY Coffee - 장재영',
    distance: 2.3,
    address: '경기도 수원시 팔달구 인계동',
    rating: 5,
    facilities: ['Hot drinks', 'Premium wifi', 'Food']
  }  
  ]

  ngOnInit(): void { }
}
