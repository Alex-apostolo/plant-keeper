import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { DatabaseService } from '../../services/database.service';
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
      rating: 0,
      url: '',
    },
  ];
  tempkeepers = [
    {
      first_name: '',
      last_name: '',
      location: '',
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
        rating: 5,
        url: 'assets/andreas.jpg',
      },
      {
        first_name: 'Lea',
        last_name: 'Baviere',
        location: 'Bath',
        rating: 4.8,
        url: 'assets/lea.jpg',
      },
      {
        first_name: 'Kiara',
        last_name: 'Polychroniadi',
        location: 'Bath',
        rating: 4.5,
        url: 'assets/kiara.jpg',
      },
      {
        first_name: 'Alex',
        last_name: 'Apostolopoulos',
        location: 'Athens',
        rating: 4,
        url: 'assets/alex.jpg',
      },
    ];
    this.tempkeepers = this.keepers;
  }

  showProfile(id: number) {
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
      if (dict['location'].toLowerCase() == keyword.toLowerCase()) {
        this.tempkeepers.push(dict);
      }
    });
    if (this.tempkeepers.length > 0) this.keywordExists = true;
    else this.keywordExists = false;
  }
}
