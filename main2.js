const BASE_URL = "https://zagster-service.herokuapp.com"
$(updateView)
var my_data = []
function updateView() {  
  $.when ($.getJSON(BASE_URL + "/rides/count/from/grc/to/osu_cascades", perYear), 
    
    $.getJSON(BASE_URL + "/rides/count/from/drake_park/to/osu_cascades", perYear1),
  
    $.getJSON(BASE_URL + "/rides/count/from/old_mill/to/osu_cascades", perYear),
    
    $.getJSON(BASE_URL + "/rides/count/from/columbia_simpson/to/osu_cascades", perYear),
    
    $.getJSON(BASE_URL + "/rides/count/from/g5/to/osu_cascades", perYear),
    
    $.getJSON(BASE_URL + "/rides/count/from/galveston/to/osu_cascades", perYear),
    
    $.getJSON(BASE_URL + "/rides/count/from/ten_barrel/to/osu_cascades", perYear),
    )
    .then(updateChart);
}
function perYear(data) {

    console.log(data.count) //print data to the console to make sure we did it right
    my_data.push(data.count) //add the data to the my_data array 
  }
function perYear1(data) {
    console.log(data.count) 
    my_data.push(data.count)
  }
function updateChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            datasets: [{
                label: 'Zagster Number of Rides Per Month in 2016',
                backgroundColor: 'rgb(0, 0, 0)', 
                borderColor: 'rgb(255, 99, 132)',
                data: my_data 
            }],
            labels: ['GRC', 'Drake Park', 'Old Mill', 'Columbia and Simpson', 'G5', 'Galveston', 'Ten Barrel'],
        },
        // Configuration options go here
        options: {
            animateScale: 'True',
        }
    });
}