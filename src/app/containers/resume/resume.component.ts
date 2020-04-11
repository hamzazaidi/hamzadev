import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  skills$: Observable<Skill[]> = this.skillSvc.getSkills();
  constructor(private skillSvc: SkillsService) { }
  ngOnInit(): void {
  }

}
