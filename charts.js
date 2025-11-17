document.addEventListener("DOMContentLoaded", () => {

    // --- Custom Color Palettes ---
    const palette1 = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff8000'];
    const palette2 = ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'];
    const palette3 = [
        '#6a00f4', '#f9009a', '#00f2a4', '#fef200', '#f85f00', 
        '#00c0f4', '#c000f4', '#f40000', '#00f440'
    ];
    
    // --- Shared Color Settings ---
    const textColor = '#e0e0f0';
    const gridColor = '#3a3a5a';

    // --- 1. Experience Level (Bar Chart) ---
    const expCtx = document.getElementById('experienceChart').getContext('2d');
    new Chart(expCtx, {
        type: 'bar',
        data: {
            labels: ['First time!', 'Less than 1 year', '1–2 years', '5+ years', '4–7 years'],
            datasets: [{
                label: 'Count',
                data: [5, 3, 3, 3, 1],
                backgroundColor: palette1[0],
            }]
        },
        options: {
            scales: { 
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Number of Players', color: textColor },
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
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
                backgroundColor: palette1[1],
            }]
        },
        options: {
            scales: { 
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Number of Players', color: textColor },
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
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
                backgroundColor: palette2,
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { 
                    position: 'top',
                    labels: { color: textColor }
                } 
            }
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
                backgroundColor: palette3,
            }]
        },
        options: {
            indexAxis: 'y',
            scales: { 
                x: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Number of Players', color: textColor },
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                y: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
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
                backgroundColor: palette1[2],
            }]
        },
        options: {
            indexAxis: 'y',
            scales: { 
                x: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Number of Players', color: textColor },
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                y: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // --- 6. Character Motivations (Horizontal Bar Chart) ---
    const motivationCtx = document.getElementById('motivationChart').getContext('2d');
    new Chart(motivationCtx, {
        type: 'bar',
        data: {
            labels: [
                'Story concept (revenge, redemption, etc.)', 'Representation / identity', 
                'Aesthetics / design', 'Escaping real-life stress', 'Combat ability', 
                'Roleplay potential', 'Vibes', 'Exploring a new side of myself', 
                'Humor or chaos', 'Exploring identity'
            ],
            datasets: [{
                label: 'Count',
                data: [5, 3, 3, 3, 3, 2, 2, 1, 1, 1],
                backgroundColor: palette2,
            }]
        },
        options: {
            indexAxis: 'y',
            scales: { 
                x: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Number of Players', color: textColor },
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                y: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // --- 7. Self-Reflection Scores (Bar Chart) ---
    const reflectionScoreCtx = document.getElementById('reflectionScoreChart').getContext('2d');
    new Chart(reflectionScoreCtx, {
        type: 'bar',
        data: {
            labels: ['1 (Not at all)', '2', '3 (Moderate)', '4 (A lot)', '5 (Very much)', 'No Answer'],
            datasets: [{
                label: 'Count',
                data: [1, 0, 2, 3, 1, 7],
                backgroundColor: palette1[3],
            }]
        },
        options: {
            scales: { 
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Number of Players', color: textColor },
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

    // --- 8. Average Reflection by Experience (Bar Chart) ---
    const avgReflectionCtx = document.getElementById('avgReflectionChart').getContext('2d');
    new Chart(avgReflectionCtx, {
        type: 'bar',
        data: {
            labels: ['Less than 1 year', '4–7 years', 'First time!', '1–2 years', '5+ years'],
            datasets: [{
                label: 'Average Score',
                data: [5.0, 4.0, 3.0, null, null],
                backgroundColor: palette1[4],
            }]
        },
        options: {
            scales: { 
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Avg. Reflection Score (1-5)', color: textColor },
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { color: gridColor }
                }
            },
            plugins: { legend: { display: false } }
        }
    });

});
