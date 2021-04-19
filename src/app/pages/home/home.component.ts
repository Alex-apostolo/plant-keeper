import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  keywordExists: boolean = true;
  keepers = [{ name: '', location: '', address: '', about: '', rating: 0, url: '' }];
  tempkeepers = [{ name: '', location: '', address: '', about: '', rating: 0, url: '' }];

  ngOnInit(): void {
    this.keepers = [
      {
        name: 'Andreas Lemesios',
        location: 'Larnaca',
        address: '23 Larnaca str',
        about: 'I have secretly planted weed on my neighbours porch',
        rating: 5,
        url: 'assets/andreas.jpg',
      },
      {
        name: 'Lea Baviere',
        location: 'Bath',
        address: '453 Beckhampton road',
        about: 'As you can see from the background of my profile I like plants.',
        rating: 5,
        url: 'assets/lea.jpg',
      },
      {
        name: 'Kiara Polychroniadi',
        location: 'Bath',
        address: '63 Beckhampton road',
        about: 'I like plants more than the user above me',
        rating: 5,
        url: 'assets/kiara.jpg',
      },
      {
        name: 'Alex Apostolopoulos',
        location: 'Athens',
        address: '1 Agiou Petrou',
        about: 'I can set your plants on fire for free',
        rating: 1,
        url: 'assets/alex.jpg',
      },
      {
        name: 'Alex Apostolopoulos',
        location: 'Athens',
        address: '1 Agiou Petrou',
        about: 'I can set your plants on fire for free',
        rating: 1,
        url: 'assets/alex.jpg',
      },
      {
        name: 'Alex Apostolopoulos',
        location: 'Athens',
        address: '1 Agiou Petrou',
        about: 'I can set your plants on fire for free',
        rating: 1,
        url: 'assets/alex.jpg',
      },
      {
        name: 'Alex Apostolopoulos',
        location: 'Athens',
        address: '1 Agiou Petrou',
        about: 'I can set your plants on fire for free',
        rating: 1,
        url: 'assets/alex.jpg',
      },
      {
        name: 'Alex Apostolopoulos',
        location: 'Athens',
        address: '1 Agiou Petrou',
        about: 'I can set your plants on fire for free',
        rating: 1,
        url: 'assets/alex.jpg',
      },
      {
        name: 'Alex Apostolopoulos',
        location: 'Athens',
        address: '1 Agiou Petrou',
        about: 'I can set your plants on fire for free',
        rating: 1,
        url: 'assets/alex.jpg',
      },
    ];
    this.tempkeepers = this.keepers;
  }

  onSearch(keyword: string) {
    if (keyword == '') {
      this.tempkeepers = this.keepers;
      this.keywordExists = true;
      return;
    }
    this.tempkeepers = [];
    this.keepers.forEach((dict) => {
      if (dict['location'] == keyword) {
        this.tempkeepers.push(dict);
      }
    });
    if (this.tempkeepers.length > 0) this.keywordExists = true;
    else this.keywordExists = false;
  }
}
