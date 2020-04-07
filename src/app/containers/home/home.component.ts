import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  profile$: Observable<Profile> = this.profileSvc.getProfile();
  phrases$: Observable<string[]> = of([
    'Javscript',
    'HTML',
    'CSS3',
    'Node'
  ]);

  constructor(private profileSvc: ProfileService) { }
}
