// Wait for the DOM to be fully loaded before trying to create charts
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Experience Level (Bar Chart) ---
    const expCtx = document.getElementById('experienceChart').getContext('2d');
    new Chart(expCtx, {
        type: 'bar',
        data: {
            labels: ['First time!', 'Less than 1 year', '1–2 years', '5+ years', '4–7 years'],
            datasets: [{
                label: 'Count',
                data: [5, 3, 3, 3, 1],
                backgroundColor: '#3498db',
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, title: { display: true, text: 'Number of Players' } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 2. Age Range (Bar Chart) ---
    const ageCtx = document.getElementById('ageChart').getContext('2d');
    new Chart(ageCtx, {
        type: 'bar',
        data: {
            labels: ['18–20', '21–25', '25–30'],
            datasets: [{
                label: 'Count',
                data: [8, 5, 2],
                backgroundColor: '#2ecc71',
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, title: { display: true, text: 'Number of Players' } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 3. Gender Identity (Pie Chart) ---
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    new Chart(genderCtx, {
        type: 'pie',
        data: {
            labels: ['Woman', 'Man', 'Nonbinary', 'Transgender', 'Genderfluid'],
            datasets: [{
                label: 'Count',
                data: [5, 5, 3, 1, 1],
                backgroundColor: ['#9b59b6', '#e74c3c', '#f1c40f', '#1abc9c', '#e67e22'],
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } }
        }
    });

    // --- 4. Character Race (Horizontal Bar Chart) ---
    const raceCtx = document.getElementById('raceChart').getContext('2d');
    new Chart(raceCtx, {
        type: 'bar',
        data: {
            labels: ['Half-Elf', 'Elf', 'Tiefling', 'Gnome', 'Goblin', 'Aasimar', 'Dwarf', 'Genasi', 'Warforged'],
            datasets: [{
                label: 'Count',
                data: [4, 3, 2, 1, 1, 1, 1, 1, 1],
                backgroundColor: '#e74c3c',
            }]
        },
        options: {
            indexAxis: 'y',
            scales: { x: { beginAtZero: true, title: { display: true, text: 'Number of Players' } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 5. Character Class (Horizontal Bar Chart) ---
    const classCtx = document.getElementById('classChart').getContext('2d');
    new Chart(classCtx, {
        type: 'bar',
        data: {
            labels: ['Barbarian', 'Fighter', 'Druid', 'Bard', 'Paladin', 'Cleric', 'Ranger', 'Rogue'],
            datasets: [{
                label: 'Count',
                data: [3, 2, 2, 2, 2, 2, 1, 1],
                backgroundColor: '#16a085',
            }]
        },
        options: {
            indexAxis: 'y',
            scales: { x: { beginAtZero: true, title: { display: true, text: 'Number of Players' } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 6. [NEW] Character Motivations (Horizontal Bar Chart) ---
    // Horizontal is best for long labels
    const motivationCtx = document.getElementById('motivationChart').getContext('2d');
    new Chart(motivationCtx, {
        type: 'bar',
        data: {
            labels: [
                'Story concept (revenge, redemption, etc.)', 
                'Representation / identity', 
                'Aesthetics / design', 
                'Escaping real-life stress', 
                'Combat ability', 
                'Roleplay potential', 
                'Vibes', 
                'Exploring a new side of myself', 
                'Humor or chaos', 
                'Exploring identity'
            ],
            datasets: [{
                label: 'Count',
                data: [5, 3, 3, 3, 3, 2, 2, 1, 1, 1],
                backgroundColor: '#8e44ad',
            }]
        },
        options: {
            indexAxis: 'y',
            scales: { x: { beginAtZero: true, title: { display: true, text: 'Number of Players' } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 7. [NEW] Self-Reflection Scores (Bar Chart) ---
    const reflectionScoreCtx = document.getElementById('reflectionScoreChart').getContext('2d');
    new Chart(reflectionScoreCtx, {
        type: 'bar',
        data: {
            labels: ['1 (Not at all)', '2', '3 (Moderate)', '4 (A lot)', '5 (Very much)', 'No Answer'],
            datasets: [{
                label: 'Count',
                data: [1, 0, 2, 3, 1, 7],
                backgroundColor: '#f39c12',
            }]
        },
        options: {
            scales: { y: { beginAtZero: true, title: { display: true, text: 'Number of Players' } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 8. [NEW] Average Reflection by Experience (Bar Chart) ---
    const avgReflectionCtx = document.getElementById('avgReflectionChart').getContext('2d');
    new Chart(avgReflectionCtx, {
        type: 'bar',
        data: {
            labels: ['Less than 1 year', '4–7 years', 'First time!', '1–2 years', '5+ years'],
            datasets: [{
                label: 'Average Score',
                // Chart.js handles 'null' to show gaps for the NaN data
                data: [5.0, 4.0, 3.0, null, null],
                backgroundColor: '#d35400',
            }]
        },
        options: {
            scales: { 
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Avg. Reflection Score (1-5)' } 
                } 
            },
            plugins: { legend: { display: false } }
        }
    });

});
