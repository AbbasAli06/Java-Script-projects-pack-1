// script.js
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
const apiDataContainer = document.getElementById('apiData');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Process the data and display it in an ordered list
        const orderedList = document.createElement('ol');
        Object.keys(data).forEach(key => {
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${data[key]}`;
            orderedList.appendChild(listItem);
        });
        apiDataContainer.appendChild(orderedList);
    })
    .catch(error => console.error('Error fetching data:', error));
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const orderedList = document.createElement('ol');
        data.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.title; // Assuming each item has a 'title' property
            orderedList.appendChild(listItem);
        });
        apiDataContainer.appendChild(orderedList);
    })
    .catch(error => console.error('Error fetching data:', error));
