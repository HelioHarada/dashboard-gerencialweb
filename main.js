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
  new Chart(
    element,
    config
  );


}

function createBar(element) {

  const labels = ['Motivo 1', 'Motivo 2', 'Motivo 3', 'motvivo 4']
  const data = {
    labels: labels,
    datasets: [{
      axis: 'y',
      label: 'total',
      fill: 'false',
      data: [10, 8, 6, 4],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',

      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',

      ],
      borderWidth: 2
    }]
  };
  const config = {
    type: 'horizontalBar',
    data,
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      indexAxis: 'y',
    }
  };

  console.log(config)
  // ### Criação do chart com pareametros
  new Chart(
    element,
    config
  );

}

//  ### Criação dos chart por ID 
createChart(document.getElementById("myChart"))

createChart(document.getElementById("myChart2"))

createBar(document.getElementById("myBar"))