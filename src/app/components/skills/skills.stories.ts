import { SkillsComponent } from './skills.component';

export default { title: 'Skills Component' };

export const skills = () => ({
    component: SkillsComponent,
    props: {
        skills: [
            { name: 'javascript', icon: 'javascript' },
            { name: 'angular', icon: 'angular' },
            { name: 'cypress', icon: 'cypress' }
        ]
    }
});

