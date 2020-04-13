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
      { name: 'Javascript', icon: 'javascript', type: 'ToolsAndTechnology' },
      { name: 'CSS', icon: 'css', type: 'ToolsAndTechnology' },
      { name: 'HTML', icon: 'html', type: 'ToolsAndTechnology' },
      { name: 'Angular', icon: 'angular', type: 'ToolsAndTechnology' },
      { name: 'Firebase', icon: 'firebase', type: 'ToolsAndTechnology' },
      { name: 'KnockoutJs', icon: 'knockout', type: 'ToolsAndTechnology' },
      { name: 'Node', icon: 'node', type: 'ToolsAndTechnology' },
      { name: 'Jasmine', icon: 'jasmine', type: 'ToolsAndTechnology' },
      { name: 'Jest', icon: 'jest', type: 'ToolsAndTechnology' },
      { name: 'RxJs', icon: 'rxjs', type: 'ToolsAndTechnology' },
      { name: 'SCSS', icon: 'scss', type: 'ToolsAndTechnology' },
      { name: 'Cypress', icon: 'cypress', type: 'ToolsAndTechnology' },
      { name: 'JQuery', icon: 'JQuery', type: 'ToolsAndTechnology' },
      { name: 'React', icon: 'react', type: 'ToolsAndTechnology' },
      { name: 'NGRX', icon: 'ngrx', type: 'ToolsAndTechnology' },
      { name: 'TypeScript', icon: 'typescript', type: 'ToolsAndTechnology' },
      { name: 'Express', icon: 'express', type: 'ToolsAndTechnology' },
      { name: 'git', icon: 'git', type: 'ToolsAndTechnology' },
      { name: 'Github', icon: 'github', type: 'ToolsAndTechnology' },
      { name: 'Netlify', icon: 'netlify', type: 'ToolsAndTechnology' },
      { name: 'Unit Testing', icon: '', type: 'IndustryKnowledge' },
      { name: 'Scrum', icon: '', type: 'IndustryKnowledge' },
      { name: 'Web Development', icon: '', type: 'IndustryKnowledge' },
      { name: 'Web Design', icon: '', type: 'IndustryKnowledge' },
      { name: 'Agile Methodologies', icon: '', type: 'IndustryKnowledge' },
      { name: 'Software Development', icon: '', type: 'IndustryKnowledge' },
      { name: 'Knowledge Sharing', icon: '', type: 'IndustryKnowledge' },
      { name: 'Functional Programming', icon: '', type: 'IndustryKnowledge' },
      { name: 'UI Automation', icon: '', type: 'IndustryKnowledge' },
      { name: 'Agile Web Development', icon: '', type: 'IndustryKnowledge' },
      { name: 'Scaled Agile Framework', icon: '', type: 'IndustryKnowledge' },
    ];
    return of(skills);
  }
}
