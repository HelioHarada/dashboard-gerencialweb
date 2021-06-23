function createLine(element) {

    const labels = ['Motivo 1', 'Motivo 2', 'Motivo 3', 'motvivo 4']
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const config = {
        type: 'line',
        data: data,
    };

    create(element, config)

}


function createChart(element) {

    // ### paramentros
    const data = {
        labels: [
            'Venda',
            'Não venda',

        ],
        datasets: [{
            label: 'My First Dataset',
            data: [50, 12],
            backgroundColor: [
                '#6FCF97',
                '#219653',
            ],
            hoverOffset: 4
        }]
    };
    // ### Paramentros
    const config = {
        type: 'doughnut',
        data,

    };
    // ### Criação do chart com pareametros
    create(element, config)


}


function create(element, config) {
    new Chart(
        element,
        config
    );
}

createChart(document.getElementById("myChart"));

createChart(document.getElementById("myChart2"));

createLine(document.getElementById("chartLine"));