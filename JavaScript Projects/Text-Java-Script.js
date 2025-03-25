const div = document.createElement('div');
div.id = 'myDynamicDiv';

const paragraph = document.createElement('p');
paragraph.textContent = 'Welcome to JavaScript Project';

div.appendChild(paragraph);

document.body.appendChild(div);