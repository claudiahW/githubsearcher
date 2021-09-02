
import { Component, OnInit } from '@angular/core';
import { GhserviceService } from '../ghservice.service';
import 'rxjs/add/operator/map';
import { Repos } from '../repos';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any = [];
  repos: any ;
  username!: string;
  constructor(private _GhserviceService: GhserviceService) {
    
  }
  getUserProfile(){
    this._GhserviceService.getUser(this.username).subscribe(user => {
      this.user = user;
    });

  }
  getUserRepositories(){
  this._GhserviceService.getRepos(this.username).subscribe(repos => {
    this.repos =repos;
    console.log(repos);
  });
  }
  ngOnInit() {
  }

}