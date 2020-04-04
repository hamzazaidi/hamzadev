import { NavBarComponent } from './nav-bar.component';

export default { title: 'Navigation bar' };

export const navBar = () => ({
    component: NavBarComponent,
    props: {
        navItems: [
            { icon: 'icofont-home', title: 'Home', location: '' },
            { icon: 'icofont-settings-alt', title: 'Resume', location: '' },
            { icon: 'icofont-eye', title: 'Portfolio', location: '' },
            { icon: 'icofont-blogger', title: 'Blog', location: '' },
            { icon: 'icofont-contacts', title: 'Contact', location: '' },
        ]
    }
});

