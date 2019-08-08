import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUser().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );
  }


}
