document.addEventListener("DOMContentLoaded", () => {
    const palette1 = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff8000'];
    const textColor = '#e0e0f0';
    const gridColor = '#3a3a5a';

    function createChart(id, type, labels, data, color) {
        const ctx = document.getElementById(id);
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: type,
                data: { labels: labels, datasets: [{ label: 'Count', data: data, backgroundColor: color }] },
                options: {
                    indexAxis: type === 'bar' && labels.length > 5 ? 'y' : 'x',
                    scales: {
                        y: { beginAtZero: true, ticks: { color: textColor }, grid: { color: gridColor } },
                        x: { ticks: { color: textColor }, grid: { color: gridColor } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }

    [cite_start]// Data from Source [cite: 1]
    createChart('experienceChart', 'bar', ['First time!', '< 1 year', '1–2 years', '5+ years', '4–7 years'], [5, 3, 3, 3, 1], palette1[0]);
    createChart('ageChart', 'bar', ['18–20', '21–25', '25–30'], [8, 5, 2], palette1[1]);
    createChart('genderChart', 'pie', ['Woman', 'Man', 'Nonbinary', 'Transgender', 'Genderfluid'], [5, 5, 3, 1, 1], ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff']);
    createChart('raceChart', 'bar', ['Half-Elf', 'Elf', 'Tiefling', 'Gnome', 'Goblin', 'Aasimar', 'Dwarf', 'Genasi', 'Warforged'], [4, 3, 2, 1, 1, 1, 1, 1, 1], palette1[2]);
    createChart('classChart', 'bar', ['Barbarian', 'Fighter', 'Druid', 'Bard', 'Paladin', 'Cleric', 'Ranger', 'Rogue'], [3, 2, 2, 2, 2, 2, 1, 1], palette1[3]);
    createChart('motivationChart', 'bar', ['Story', 'Representation', 'Aesthetics', 'Escaping stress', 'Combat', 'Roleplay', 'Vibes', 'New self', 'Chaos', 'Identity'], [5, 3, 3, 3, 3, 2, 2, 1, 1, 1], palette1[4]);
    createChart('reflectionScoreChart', 'bar', ['1', '2', '3', '4', '5', 'No Answer'], [1, 0, 2, 3, 1, 7], '#f39c12');
    createChart('avgReflectionChart', 'bar', ['< 1 year', '4–7 years', 'First time!', '1–2 years', '5+ years'], [5.0, 4.0, 3.0, null, null], '#d35400');
});
