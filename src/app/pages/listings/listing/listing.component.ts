import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../../services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  listingid: any;
  listing: any;
  fetched: boolean = false;
  constructor(private route: ActivatedRoute, private db: DatabaseService) {}

  ngOnInit(): void {
    this.listingid = this.route.snapshot.paramMap.get('id')?.toString();
    this.listing = this.db
      .getListing(this.listingid)
      .subscribe((items: any) => {
        this.listing = items;
      });
    this.fetched = true;
  }

  onOffer() {
    var mailtext =
      'mailto:' +
      this.listing['email'] +
      '?Subject=I Want To Take Care Of Your Plants !&body=Here is my offer!%0d%0a%0d%0aKind regards.';
    window.location.href = mailtext;
  }
}
