const fetch = require('node-fetch');

async function fetchgoogle() {
    try {
        const response = await fetch('https://www.google.com');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: $ {response.status}`);
        }

        const html = await response.text();
        console.log('Google page HTML fetched successfully\n');
        console.log(html.substring(0,500));
    }catch (err) {
        console.error('failed to fetch:' , err.message);
    }
    
}

fetchgoogle();