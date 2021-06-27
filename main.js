
$('#data-picker').click(function(){
  $('.modal').modal('show');
  
})




function createChart(element) {

  // Recebimento dos valores através da API de visitas e sem visitas. 
  // Armazenando em variáveis 

  const visitas = 50
  const semVisitas = 21
  const total = visitas + semVisitas
  console.log(total)

  // ### paramentros
  const data = {
    labels: [
      'Com visita',
      'Sem visita',

    ],
    datasets: [{
      label: 'My First Dataset',
      data: [visitas, semVisitas],
      backgroundColor: [
        '#6FCF97',
        '#219653',
      ],
      hoverOffset: 4
    }]
  };
  
  


  const options = {
        title: {
            display: true,
            text: 'Não vendas: '+ total +""
        },
        legend: {
          display: true,
          // position: 'bottom'
        },
      
}

  // ### Paramentros
  const config = {
    type: 'doughnut',
    data,
    options
  };

  

  // ### Criação do chart com pareametros
  create(element,config)


}

function createChart2(element) {

  // Recebimento dos valores através da API de visitas e sem visitas. 
  // Armazenando em variáveis 
  const visitas = 12
  const semVisitas = 3
  const total = visitas + semVisitas

  // ### paramentros
  const data = {
    labels: [
      'Com visita',
      'Sem visita',

    ],
    datasets: [{
      label: 'My First Dataset',
      data: [visitas, semVisitas],
      backgroundColor: [
        '#EB5757',
        '#690100',
      ],
      hoverOffset: 4
    }]
  };


  const options = {
        title: {
            display: true,
            text: 'Não vendas: '+ total +""
        },
        legend: {
          display: true,
          // position: 'bottom'
        },
      
}

  // ### Paramentros
  const config = {
    type: 'doughnut',
    data,
    options
  };

  

  // ### Criação do chart com pareametros
  create(element,config)


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

  create(element,config)

}

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

  create(element,config)

}


// Criação dos
function create(element,config){
  console.log(config)
  new Chart(
    element,
    config,
    
  );
}






window.onload = function() {
//  ### Criação dos chart por ID 


createChart(document.getElementById("myChart"));

createChart2(document.getElementById("myChart2"));

createBar(document.getElementById("myBar"));

}