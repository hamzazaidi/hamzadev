import { TypingTextComponent } from './typing-text.component';
export default { title: 'Typing Text' };

export const typingText = () => ({
    component: TypingTextComponent,
    props: {
        phrases: [
            'Javascript',
            'How I wonder what you are',
            'Up above the world so high',
            'Like a diamond in the sky'
        ]
    }
});

