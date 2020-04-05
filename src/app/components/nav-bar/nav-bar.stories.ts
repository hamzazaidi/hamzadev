import { NavBarComponent } from './nav-bar.component';

export default { title: 'Navigation bar' };

export const navBar = () => ({
    component: NavBarComponent,
    props: {
        name: 'John Bob',
        navItems: [
            { icon: 'icofont-home', title: 'Home', location: '/home' },
            { icon: 'icofont-settings-alt', title: 'Resume', location: '/resume' },
            { icon: 'icofont-eye', title: 'Portfolio', location: '' },
            { icon: 'icofont-blogger', title: 'Blog', location: '' },
            { icon: 'icofont-contacts', title: 'Contact', location: '' },
        ]
    }
});

