import { Component } from '@angular/core';
import { NavItem } from './models/nav';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hamzadev';
  navItems$: Observable<NavItem[]> = of([
    { icon: 'icofont-home', title: 'Home', location: '/home' },
    { icon: 'icofont-settings-alt', title: 'Resume', location: '/resume' },
    { icon: 'icofont-eye', title: 'Portfolio', location: '' },
    { icon: 'icofont-blogger', title: 'Blog', location: '' },
    { icon: 'icofont-contacts', title: 'Contact', location: '' },
  ]);
  fullName$: Observable<string> = of('Hamza Zaidi');
}
