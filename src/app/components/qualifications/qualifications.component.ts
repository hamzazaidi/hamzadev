import { Component, OnInit, Input } from '@angular/core';
import { Qualification } from 'src/app/models/qualification';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent implements OnInit {

  @Input() qualifications: Qualification[];
  constructor() { }

  ngOnInit(): void {
  }

}
