import { Component, Inject } from '@angular/core';
import { NavItem } from './models/nav';
import { of, Observable } from 'rxjs';
import { ProfileService } from './services/profile.service';
import { Profile } from './models/profile';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hamzadev';
  navItems$: Observable<NavItem[]> = of([
    { icon: 'icofont-home', title: 'Home', location: '/home' },
    { icon: 'icofont-business-man', title: 'About', location: '/about' },
    { icon: 'icofont-settings-alt', title: 'Resume', location: '/resume' },
    { icon: 'icofont-eye', title: 'Portfolio', location: '/portfolio' },
    { icon: 'icofont-blogger', title: 'Blog', location: '/blog' },
    { icon: 'icofont-contacts', title: 'Contact', location: '/contact' },
  ]);
  profile$: Observable<Profile> = this.profileSvc.getProfile();
  constructor(
    private profileSvc: ProfileService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  change(cls: string): void {
    this.document.body.className = cls;
  }

}
