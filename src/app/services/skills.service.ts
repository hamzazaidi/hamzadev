import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  getSkills(): Observable<Skill[]> {
    const skills: Skill[] = [
      { name: 'Javascript', icon: 'javascript.png' }
    ];
    return of(skills);
  }
}
