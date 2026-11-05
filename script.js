document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('marketChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Fast Fashion & Varejo', 
                'Marcas Autorais & Ateliês', 
                'Figurino (Cinema/Teatro)', 
                'Consultoria & Styling', 
                'Alta-Costura'
            ],
            datasets: [{
                data: [45, 25, 15, 10, 5],
                backgroundColor: [
                    '#8b0000',
                    '#8a6d3b',
                    '#c91818',
                    '#4a3728',
                    '#2b1810'
                ],
                borderColor: '#140b08',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#d9c8b4',
                        font: {
                            family: 'Montserrat',
                            size: 12
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Atuação Profissional dos Estilistas (%)',
                    color: '#c91818',
                    font: {
                        family: 'Cinzel',
                        size: 16
                    }
                }
            }
        }
    });
});
