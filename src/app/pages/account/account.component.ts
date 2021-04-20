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
  constructor(private route: ActivatedRoute, private db: DatabaseService) {}
  userid: any;
  user: any;
  fetched: boolean = false;
  ngOnInit() {
    this.userid = this.route.snapshot.paramMap.get('id')?.toString();
    this.user = this.db.getUser(this.userid).subscribe((items: any) => {
      this.user = items;
    });
    this.fetched = true;
  }

  updateDetails() {}
}
