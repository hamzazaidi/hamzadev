import { Component, OnInit, Input } from '@angular/core';
import { Skill, SkillType } from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  @Input() skills: Skill[];
  @Input() type: SkillType;
  @Input() title: string;
  list: Skill[];
  industryKnowledge: Skill[];

  ngOnInit(): void {
    this.list = this.skills.filter(s => s.type === this.type);
  }

}
