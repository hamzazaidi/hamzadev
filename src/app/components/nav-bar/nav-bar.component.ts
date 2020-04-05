import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from 'src/app/models/nav';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() name: string;
  @Input() navItems: NavItem[];
  constructor() { }

  ngOnInit(): void {
  }

}
