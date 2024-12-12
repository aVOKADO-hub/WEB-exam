document.addEventListener('DOMContentLoaded', () => {
    
    const servicemen = [
        { rank: 'сержант', fullName: 'Степанов Степан Степанович', age: 33 },
        { rank: 'лейтенант', fullName: 'Федоров Федір Федорович', age: 25 },
        { rank: 'майор', fullName: 'Антоненко Антон Антонович', age: 31 },
    ];

    
    const app = document.getElementById('app');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    
    const headers = ['№ п/п', 'Звання', 'ПІБ', 'Вік'];
    const headerRow = document.createElement('tr');
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    
    
    servicemen.forEach((serviceman, index) => {
        const row = document.createElement('tr');
        const cells = [
            index + 1,
            serviceman.rank,
            serviceman.fullName,
            serviceman.age
        ];
        cells.forEach(cellText => {
            const td = document.createElement('td');
            td.textContent = cellText;
            row.appendChild(td);
        });
        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);


    app.appendChild(table);

    
    const startButton = document.createElement('button');
    startButton.textContent = 'Старт';
    app.appendChild(startButton);

    
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('closeBtn');
    const averageAgeModal = document.getElementById('averageAgeModal');

    
    startButton.addEventListener('click', () => {
        const ages = servicemen.map(serviceman => serviceman.age);
        const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;

        
        averageAgeModal.textContent = averageAge.toFixed(2);

        
        modal.style.display = 'block';
    });

    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
