document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('card-container');
    const apiURL = 'https://mocki.io/v1/9c8f5ea4-624a-46c5-ba6d-8b3559f678d9';

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const cardsHTML = data.map(item => `
                <div class="card">
                    <div id="title">${item.subject_name}</div>
                    <div id="task">${item.subject_task}</div>
                    <div id="deadline">${item.deadline}</div>
                </div>
            `).join('');

            container.innerHTML = cardsHTML;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
