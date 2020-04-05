import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  firstName$: Observable<string> = of('Hamza');
  lastName$: Observable<string> = of('Zaidi');
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
