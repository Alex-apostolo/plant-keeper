import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../services/database.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public router: Router) {}
  keywordExists: boolean = true;
  keepers = [
    {
      first_name: '',
      last_name: '',
      location: '',
      address: '',
      about: '',
      rating: 0,
      url: '',
    },
  ];
  tempkeepers = [
    {
      first_name: '',
      last_name: '',
      location: '',
      address: '',
      about: '',
      rating: 0,
      url: '',
    },
  ];

  ngOnInit(): void {
    this.keepers = [
      {
        first_name: 'Andreas',
        last_name: 'Lemesios',
        location: 'Larnaca',
        address: '23 Larnaca str',
        about: 'I have secretly planted weed on my neighbours porch',
        rating: 5,
        url: 'assets/andreas.jpg',
      },
      {
        first_name: 'Lea',
        last_name: 'Baviere',
        location: 'Bath',
        address: '453 Beckhampton road',
        about:
          'As you can see from the background of my profile I like plants.',
        rating: 5,
        url: 'assets/lea.jpg',
      },
      {
        first_name: 'Kiara',
        last_name: 'Polychroniadi',
        location: 'Bath',
        address: '63 Beckhampton road',
        about: 'I like plants more than the user next to me',
        rating: 5,
        url: 'assets/kiara.jpg',
      },
      {
        first_name: 'Alex',
        last_name: 'Apostolopoulos',
        location: 'Athens',
        address: '1 Agiou Petrou',
        about: 'I can set your plants on fire for free',
        rating: 1,
        url: 'assets/alex.jpg',
      },
    ];
    this.tempkeepers = this.keepers;
  }

  showProfile(id: number) {
    console.log(id);
    var keepers = [
      'gFHeGdfy3MRNlIoFDfCY',
      'kLCwfKTjWx7AuIb9oxjb',
      'jWcMbMH22QP2YCV3O5Fv',
      'lGb9QghNdJkVSVHMNvHH',
    ];
    this.router.navigateByUrl('/profile/' + keepers[id]);
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

  goToHome() {}
}
