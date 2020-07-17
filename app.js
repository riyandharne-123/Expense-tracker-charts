
var income=0;
var expense=0;


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Income','Expense'],
        datasets: [{
           
            backgroundColor: ['rgb(60, 179, 113)','rgb(255, 0, 0)'],
            borderColor: 'rgb(240, 240, 240)',
            data: [income,expense],
         
            
        }]
    },

    // Configuration options go here
    options: {}
});

function addIncome(){
  chart.data.datasets[0].data=[income+=1,expense];
  income=chart.data.datasets[0].data[0];
    chart.update();
}
function addExpense(){
    chart.data.datasets[0].data=[income,expense+=1];
    expense=chart.data.datasets[0].data[1];
      chart.update();
  }
  