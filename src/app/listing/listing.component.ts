import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  message: string = '';
  images = [];

  constructor(config: NgbCarouselConfig) {
    //
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  minDate: Date = new Date();

  ngOnInit(): void {
    this.minDate = new Date();
  }
  url: string | ArrayBuffer | null = null;
  show = false;
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
          console.log(this.url);
        }
      };
    }
    this.show = true;
  }
}
