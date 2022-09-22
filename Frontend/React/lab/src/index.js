
import Email from './email/Email07';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(

    <div>
        <h1>My header!</h1>
        <Email success-message="Good boy!" background="burlywood" />
        <Email success-message="Whatever..." background="aqua" border-thickness={20} />

        <a href="google.com">Link to my fav site</a>
        <Email />
    </div>

);
