import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profile = {
    name: 'Andreas Lemesios',
    location: 'Larnaca',
    address: '23 Larnaca str',
    about: 'I have secretly planted weed on my neighbours porch',
    rating: 5,
    url: 'assets/andreas.jpg',
  }

  constructor() { }

  ngOnInit(): void {

  }

}
