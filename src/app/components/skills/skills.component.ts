import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  @Input() skills: Skill[];
  toolsAndTechnology: Skill[];
  industryKnowledge: Skill[];
  ngOnInit(): void {
    this.toolsAndTechnology = this.skills.filter(s => s.type === 'ToolsAndTechnology');
    this.industryKnowledge = this.skills.filter(s => s.type === 'IndustryKnowledge');
  }

}
