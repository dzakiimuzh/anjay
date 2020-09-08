const h1 = document.querySelector('h1');

const huruf = [...h1.innerHTML].map( h => `<span>${h}</span>` ).join('');

h1.innerHTML = huruf;