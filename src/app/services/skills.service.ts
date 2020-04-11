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
      { name: 'Javascript', icon: 'javascript' },
      { name: 'CSS', icon: 'css' },
      { name: 'HTML', icon: 'html' },
      { name: 'Cypress', icon: 'cypress' },
      { name: 'JQuery', icon: 'JQuery' },
      { name: 'React', icon: 'react' },
      { name: 'NGRX', icon: 'ngrx' },
      { name: 'TypeScript', icon: 'typescript' }
    ];
    return of(skills);
  }
}
