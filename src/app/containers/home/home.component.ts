import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  phrases$: Observable<string[]> = of([
    'Javscript',
    'HTML',
    'CSS3',
    'Node'
  ]);

  constructor() { }
  ngOnInit(): void {
  }

}
