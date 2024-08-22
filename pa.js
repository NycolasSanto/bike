// Exemplo de dados históricos
const data = [
    { day: 0, weather: 0, rentals: 20 },
    { day: 0, weather: 1, rentals: 15 },
    { day: 0, weather: 2, rentals: 5 },
    { day: 1, weather: 0, rentals: 25 },
    { day: 1, weather: 1, rentals: 18 },
    { day: 1, weather: 2, rentals: 8 },
    // Adicione mais dados conforme necessário
];

// Função para prever a quantidade de aluguéis
function predictRentals() {
    const day = parseInt(document.getElementById('day').value);
    const weather = parseInt(document.getElementById('weather').value);

    // Calcular a média de aluguéis para cada combinação de dia e clima
    let totalRentals = 0;
    let count = 0;

    data.forEach(record => {
        if (record.day === day && record.weather === weather) {
            totalRentals += record.rentals;
            count++;
        }
    });

    // Se não houver dados para essa combinação, usar a média geral
    if (count === 0) {
        totalRentals = data.reduce((sum, record) => sum + record.rentals, 0) / data.length;
    } else {
        totalRentals /= count;
    }

    document.getElementById('result').innerText = `Previsão de Aluguéis: ${Math.round(totalRentals)}`;
}
