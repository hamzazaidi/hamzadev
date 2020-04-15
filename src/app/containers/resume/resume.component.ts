import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/models/skill';
import { QualificationService } from 'src/app/services/qualification.service';
import { Qualification } from 'src/app/models/qualification';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  skills$: Observable<Skill[]> = this.skillSvc.getSkills();
  qualifications$: Observable<Qualification[]> = this.qualificationSvc.getQualifications();
  constructor(
    private skillSvc: SkillsService,
    private qualificationSvc: QualificationService
  ) { }
  ngOnInit(): void {
  }

}
