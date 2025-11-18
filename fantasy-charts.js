document.addEventListener("DOMContentLoaded", () => {
    // Jewel Tone Palette for Fantasy Theme
    const sapphire = 'rgba(24, 52, 112, 0.8)';
    const emerald = 'rgba(18, 82, 30, 0.8)';
    const ruby = 'rgba(138, 3, 3, 0.8)';
    const gold = 'rgba(197, 160, 89, 0.8)';
    const inkColor = '#2b1b17';

    function createFantasyChart(id, type, labels, data, color) {
        const ctx = document.getElementById(id);
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: type,
                data: { labels: labels, datasets: [{ label: 'Count', data: data, backgroundColor: color, borderColor: '#2b1b17', borderWidth: 1 }] },
                options: {
                    indexAxis: type === 'bar' && labels.length > 5 ? 'y' : 'x',
                    scales: {
                        y: { beginAtZero: true, ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: 'rgba(43, 27, 23, 0.1)' } },
                        x: { ticks: { color: inkColor, font: { family: 'Fauna One' } }, grid: { color: 'rgba(43, 27, 23, 0.1)' } }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }

    [cite_start]// Data from Source [cite: 1]
    createFantasyChart('experienceChart', 'bar', ['First time!', '< 1 year', '1–2 years', '5+ years', '4–7 years'], [5, 3, 3, 3, 1], sapphire);
    createFantasyChart('ageChart', 'bar', ['18–20', '21–25', '25–30'], [8, 5, 2], emerald);
    createFantasyChart('genderChart', 'pie', ['Woman', 'Man', 'Nonbinary', 'Transgender', 'Genderfluid'], [5, 5, 3, 1, 1], ['#663399', ruby, gold, emerald, '#d35400']);
    createFantasyChart('raceChart', 'bar', ['Half-Elf', 'Elf', 'Tiefling', 'Gnome', 'Goblin', 'Aasimar', 'Dwarf', 'Genasi', 'Warforged'], [4, 3, 2, 1, 1, 1, 1, 1, 1], ruby);
    createFantasyChart('classChart', 'bar', ['Barbarian', 'Fighter', 'Druid', 'Bard', 'Paladin', 'Cleric', 'Ranger', 'Rogue'], [3, 2, 2, 2, 2, 2, 1, 1], sapphire);
    createFantasyChart('motivationChart', 'bar', ['Story', 'Representation', 'Aesthetics', 'Escaping stress', 'Combat', 'Roleplay', 'Vibes', 'New self', 'Chaos', 'Identity'], [5, 3, 3, 3, 3, 2, 2, 1, 1, 1], gold);
    createFantasyChart('reflectionScoreChart', 'bar', ['1', '2', '3', '4', '5', 'No Answer'], [1, 0, 2, 3, 1, 7], '#663399');
    createFantasyChart('avgReflectionChart', 'bar', ['< 1 year', '4–7 years', 'First time!', '1–2 years', '5+ years'], [5.0, 4.0, 3.0, null, null], emerald);
});
