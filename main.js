function createChart(id) {
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





      
      const config = {
        type: 'doughnut',
        data,
       
      };



    new Chart(
        element,
        config
      );

      
  }

  var element = document.getElementById("myChart")

createChart(element)

var element = document.getElementById("myChart2")
createChart(element)