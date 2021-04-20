import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private db: DatabaseService) {}
  userid: any;
  profile: any;
  fetched: boolean = false;

  selectedListing: number = 0;

  listings = [
    { name: 'Testing', startDate: '4/5/2021', endDate: '4/5/2021' },
    // { name: '123', startDate: '4/5/2021', endDate: '/5/2021' },
  ];

  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id')?.toString();
    this.profile = this.db.getUser(this.userid).subscribe((items: any) => {
      this.profile = items;
    });
    this.fetched = true;
  }

  onHire(selectedListing: number) {
    console.log('');
    var mailtext =
      'mailto:' +
      this.profile['email'] +
      '?Subject=I Want To Hire You For My Plants !&body=Please take care of my plants!%0d%0aStart Date: ' +
      this.listings[selectedListing]['startDate'] +
      '%0d%0aEnd Date: ' +
      this.listings[selectedListing]['endDate'] +
      '%0d%0a%0d%0aKind regards.';
    window.location.href = mailtext;
  }
}
