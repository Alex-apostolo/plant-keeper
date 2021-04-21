import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createlisting',
  templateUrl: './createlisting.component.html',
  styleUrls: ['./createlisting.component.css'],
})
export class CreateListingComponent implements OnInit {
  message: string = '';
  images = [];

  // constructor(config: NgbCarouselConfig) {
  //   //
  //   config.interval = 2000;
  //   config.keyboard = true;
  //   config.pauseOnHover = true;
  // }
  constructor(public router: Router) {}
  minDate: Date = new Date();

  ngOnInit(): void {
    this.minDate = new Date();
  }
  url: string | ArrayBuffer | null = null;
  disableDate = true;

  chooseStartDate(startDate: any) {
    this.disableDate = false;
    this.minDate = new Date(startDate);
    // this.minDate.setDate(this.minDate.getDate() + 1);
  }

  onFileChanged(event: any) {
    // this.images = event.target.files;
    // if (this.images.length === 0) return;
    // console.log(this.images);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target) {
          this.url = event.target.result;
        }
      };
    }
  }
}
