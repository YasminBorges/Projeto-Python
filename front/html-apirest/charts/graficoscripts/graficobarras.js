google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'http://192.168.14.43:8000/dispositivos', true);
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState == 4 && xhr2.status == 200) {
            var response = JSON.parse(xhr2.responseText);
        
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            response.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });

            var data2 = google.visualization.arrayToDataTable(formattedData);
            var options2 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart2 = new google.visualization.BarChart(document.getElementById('piechart2'));
            chart2.draw(data2, options2);
        }
    };
    xhr2.send();
}