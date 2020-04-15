import { Injectable } from '@angular/core';
import { Qualification } from '../models/qualification';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor() { }
  getQualifications(): Observable<Qualification[]> {
    const qualifications: Qualification[] = [
      {
        institute: 'Penn State University',
        degree: 'Master’s Degree - Computer Software Engineering',
        logo: 'pennstate',
        yearStart: '2012',
        yearEnd: '2016'
      },
      {
        institute: 'Iqra University',
        degree: 'Master of Business Management (MBA) - Marketing',
        logo: 'iqra',
        yearStart: '2007',
        yearEnd: '2010'
      },
      {
        institute: 'Hamdard University',
        degree: 'Bachelor’s Degree - Computer Science',
        logo: 'hamdard',
        yearStart: '2002',
        yearEnd: '2005'
      }
    ];
    return of(qualifications);
  }
}
