document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Define Jewel Tone Colors ---
    const sapphire = 'rgba(24, 52, 112, 0.8)';
    const emerald = 'rgba(18, 82, 30, 0.8)';
    const ruby = 'rgba(138, 3, 3, 0.8)';
    const gold = 'rgba(197, 160, 89, 0.8)';
    const amethyst = 'rgba(102, 51, 153, 0.8)';
    const inkColor = '#2b1b17'; // Dark Brown Text
    const gridColor = 'rgba(43, 27, 23, 0.1)'; // Faint grid

    // --- 2. Experience Level ---
    const expCtx = document.getElementById('experienceChart');
    if (expCtx) {
        new Chart(expCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['First time!', 'Less than 1 year', '1–2 years', '5+ years', '4–7 years'],
                datasets: [{ label: 'Count', data: [5, 3, 3, 3, 1], backgroundColor: sapphire }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } },
                    x: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } }
                },
                plugins: { legend: { display: false } }
            }
        });
    } else { console.error("Could not find experienceChart"); }

    // --- 3. Age Range ---
    const ageCtx = document.getElementById('ageChart');
    if (ageCtx) {
        new Chart(ageCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['18–20', '21–25', '25–30'],
                datasets: [{ label: 'Count', data: [8, 5, 2], backgroundColor: emerald }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } },
                    x: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // --- 4. Gender Identity ---
    const genderCtx = document.getElementById('genderChart');
    if (genderCtx) {
        new Chart(genderCtx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['Woman', 'Man', 'Nonbinary', 'Transgender', 'Genderfluid'],
                datasets: [{
                    data: [5, 5, 3, 1, 1],
                    backgroundColor: ['#663399', ruby, gold, emerald, '#d35400'],
                    borderColor: inkColor,
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: { position: 'bottom', labels: { color: inkColor, font: { family: 'Fauna One' } } }
                }
            }
        });
    }

    // --- 5. Character Race ---
    const raceCtx = document.getElementById('raceChart');
    if (raceCtx) {
        new Chart(raceCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Half-Elf', 'Elf', 'Tiefling', 'Gnome', 'Goblin', 'Aasimar', 'Dwarf', 'Genasi', 'Warforged'],
                datasets: [{ label: 'Count', data: [4, 3, 2, 1, 1, 1, 1, 1, 1], backgroundColor: ruby }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    y: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } },
                    x: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // --- 6. Character Class ---
    const classCtx = document.getElementById('classChart');
    if (classCtx) {
        new Chart(classCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Barbarian', 'Fighter', 'Druid', 'Bard', 'Paladin', 'Cleric', 'Ranger', 'Rogue'],
                datasets: [{ label: 'Count', data: [3, 2, 2, 2, 2, 2, 1, 1], backgroundColor: sapphire }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    y: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } },
                    x: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // --- 7. Motivations ---
    const motCtx = document.getElementById('motivationChart');
    if (motCtx) {
        new Chart(motCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Story', 'Representation', 'Aesthetics', 'Escaping stress', 'Combat', 'Roleplay', 'Vibes', 'New self', 'Chaos', 'Identity'],
                datasets: [{ label: 'Count', data: [5, 3, 3, 3, 3, 2, 2, 1, 1, 1], backgroundColor: gold }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    y: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } },
                    x: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // --- 8. Reflection Scores ---
    const reflCtx = document.getElementById('reflectionScoreChart');
    if (reflCtx) {
        new Chart(reflCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['1', '2', '3', '4', '5', 'No Answer'],
                datasets: [{ label: 'Count', data: [1, 0, 2, 3, 1, 7], backgroundColor: amethyst }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } },
                    x: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }

    // --- 9. Avg Reflection ---
    const avgReflCtx = document.getElementById('avgReflectionChart');
    if (avgReflCtx) {
        new Chart(avgReflCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['< 1 year', '4–7 years', 'First time!', '1–2 years', '5+ years'],
                datasets: [{ label: 'Score', data: [5.0, 4.0, 3.0, null, null], backgroundColor: emerald }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } },
                    x: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: gridColor } }
                },
                plugins: { legend: { display: false } }
            }
        });
    }
});
