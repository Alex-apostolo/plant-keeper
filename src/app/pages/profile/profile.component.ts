import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private db: DatabaseService) {}

  public profile = {
    name: 'Andreas Lemesios',
    location: 'Larnaca',
    address: '23 Larnaca str',
    about: 'I have secretly planted weed on my neighbours porch',
    rating: 5,
    url: 'assets/andreas.jpg',
  };

  constructor() {}

  ngOnInit(): void {}
}
