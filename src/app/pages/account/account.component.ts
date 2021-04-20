import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface UserID extends User {
  id: string;
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  userid: any;
  constructor(private route: ActivatedRoute, private db: DatabaseService) {}
  user: any;
  fetched: boolean = false;
  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id')?.toString();
    this.user = this.db.getUser(this.userid).subscribe((items: any) => {
      console.log(items);
      this.user = items;
    });
    this.fetched = true;
    // console.log(this.user['email']);
  }

  updateDetails() {}
}
