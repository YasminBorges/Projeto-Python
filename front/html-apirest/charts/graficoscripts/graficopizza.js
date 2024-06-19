google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    // Primeiro Gráfico
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'http://192.168.14.43:8000/dispositivos', true);
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
            var response = JSON.parse(xhr1.responseText);
            
            var formattedData = [];
            formattedData.push(['Dispositivo', 'Quantidade']);
            response.forEach(function(item) {
                formattedData.push([item.dispositivo, item['COUNT(dispositivo)']]);
            });

            var data1 = google.visualization.arrayToDataTable(formattedData);
            var options1 = {
                title: 'Totalização de registro por dispositivo'
            };
            var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
            chart1.draw(data1, options1);
        }
    };
    xhr1.send();
}