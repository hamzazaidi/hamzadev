import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  getProfile(): Observable<Profile> {
    const profile: Profile = {
      firstName: 'Hamza',
      lastName: 'Zaidi',
      middleName: '',
      dateOfBirth: '09/11/1983'
    };
    return of(profile);
  }
}
