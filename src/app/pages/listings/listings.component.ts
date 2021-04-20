import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
})
export class ListingsComponent implements OnInit {
  keywordExists: boolean = true;
  listings = [
    {
      owner: '',
      location: '',
      postcode: '',
      startDate: '',
      endDate: '',
      url: '',
    },
  ];
  templistings = [
    {
      owner: '',
      location: '',
      postcode: '',
      startDate: '',
      endDate: '',
      url: '',
    },
  ];
  constructor(public router: Router) {}

  ngOnInit(): void {
    this.listings = [
      {
        owner: 'Andreas Lemesios',
        location: 'Larnaca',
        postcode: '7103',
        startDate: '4/5/2021',
        endDate: '4/5/2021',
        url: 'assets/plant.jpg',
      },
      {
        owner: 'Kiara Polychroniadi',
        location: 'Bath',
        postcode: 'BA22BA',
        startDate: '28/5/2021',
        endDate: '30/5/2021',
        url: 'assets/plant1.jpg',
      },
    ];
    this.templistings = this.listings;
  }

  onSearch(keyword: string) {
    if (keyword == '') {
      this.templistings = this.listings;
      this.keywordExists = true;
      return;
    }
    this.templistings = [];
    this.listings.forEach((dict) => {
      if (dict['location'].toLowerCase() == keyword.toLowerCase()) {
        this.templistings.push(dict);
      }
    });
    if (this.templistings.length > 0) this.keywordExists = true;
    else this.keywordExists = false;
  }

  showListing(id: number) {
    var listings = ['sYjBuhhjG1ViLfdyS708', 'GqF0pbYCLzldKP2LyMPb'];
    this.router.navigateByUrl('/listings/listing/' + listings[id]);
  }
}
