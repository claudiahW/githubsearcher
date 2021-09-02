

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'GithubSearch';
// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileComponent } from './profile/profile.component';
import { GhserviceService } from './ghservice.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GhserviceService]
})
export class AppComponent {
  
  title = 'app';
}