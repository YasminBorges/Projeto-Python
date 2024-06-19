google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    var xhr3 = new XMLHttpRequest();
    xhr3.open('GET', 'http://192.168.14.43:8000/dispositivos', true);
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState == 4 && xhr3.status == 200) {
            var response = JSON.parse(xhr3.responseText);
        
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            response.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });

            var data3 = google.visualization.arrayToDataTable(formattedData);
            var options3 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart3 = new google.visualization.LineChart(document.getElementById('piechart3'));
            chart3.draw(data3, options3);
        }
    };
    xhr3.send();
}