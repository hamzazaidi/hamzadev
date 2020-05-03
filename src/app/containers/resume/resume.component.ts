import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';
import { Observable } from 'rxjs';
import { filter, map, flatMap } from 'rxjs/operators';
import { Skill } from 'src/app/models/skill';
import { QualificationService } from 'src/app/services/qualification.service';
import { Qualification } from 'src/app/models/qualification';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  profile$: Observable<Profile> = this.profileSvc.getProfile();
  skills$: Observable<Skill[]> = this.skillSvc.getSkills();
  qualifications$: Observable<Qualification[]> = this.qualificationSvc.getQualifications();
  constructor(
    private skillSvc: SkillsService,
    private qualificationSvc: QualificationService,
    private profileSvc: ProfileService
  ) { }
  ngOnInit(): void {

  }

}
