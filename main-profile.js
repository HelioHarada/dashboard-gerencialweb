
$('#data-picker-profile').click(function(){

    $('.modal').modal('show');

    
  })

function createLine(element) {


    const labels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    const data = {
        labels: labels,
        datasets: [{
            label: 'Total de vendas',
            data: [0, 32, 15, 17, 23, 21, 21],
            fill: false,
            borderColor: '#3741BF',
            tension: 0.1
        },
        {
            label: 'Total de pedidos',
            data: [2, 23, 30, 18, 24, 21, 32],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const options = {

        legend: {
            display: true,
            position: 'bottom'
        },

    }

    const config = {
        type: 'line',
        data,
        options
    };

    create(element, config)

}

function createLine2(element) {


    const labels = ['Jan', 'Fev', 'Mar', 'Abrl', 'Jun', 'Jul', 'Ago','Set', 'Out', 'Nov', 'Dez']
    const data = {
        labels: labels,
        datasets: [{
            label: 'Total de vendas',
            data: [102, 98, 83, 73, 82, 84, 95,85,62,95, 73, 103],
            fill: false,
            borderColor: '#3741BF',
            tension: 0.1
        },
        {
            label: 'Total de pedidos',
            data: [96, 92, 73, 63, 52, 44, 75,55,52,92, 53, 100],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const options = {

        legend: {
            display: true,
            position: 'bottom'
        },

    }

    const config = {
        type: 'line',
        data,
        options
    };

    create(element, config)

}

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
            text: 'Não vendas: ' + total + ""
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
    create(element, config)


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
            text: 'Não vendas: ' + total + ""
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
    create(element, config)


}



function create(element, config) {
    new Chart(
        element,
        config
    );
}



$('.btn-toggle').click(function(){
   console.log($(this).hasClass('semanal'))
    if($(this).hasClass('semanal')){
        createLine(document.getElementById("chartLine"));
    }else{
        createLine2(document.getElementById("chartLine"));
    }
 
    $(this).siblings('button').removeClass('active');
    $(this).addClass('active');
    
})

createChart(document.getElementById("myChart"));

createChart2(document.getElementById("myChart2"));

createLine(document.getElementById("chartLine"));


