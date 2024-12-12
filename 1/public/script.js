document.getElementById('startButton').addEventListener('click', () => {
    const ages = Array.from(document.querySelectorAll('tbody tr td:nth-child(4)'))
                      .map(cell => parseInt(cell.textContent));

                fetch('/average-age', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ages }),
    })
    .then(response => response.json())
    .then(data => {
        
        document.getElementById('averageAge').textContent = data.average.toFixed(2);

        document.getElementById('modal').style.display = 'block';
    });
});


document.getElementById('closeBtn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};
