// import React from 'react';
// import ReactDOM from 'react-dom';
// import Email from './email/Email01';
// ReactDOM.render(

// <div>
//     <h1>My header!</h1>
//     <Email/>

//     <a href="google.com">Link to my fav site</a>
//     <Email/>
// </div>

// , document.getElementById("root"))

import Email from './email/Email02';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(

    <div>
        <h1>My header!</h1>
        <Email/>

        <a href="google.com">Link to my fav site</a>
        <Email/>
    </div>

);
