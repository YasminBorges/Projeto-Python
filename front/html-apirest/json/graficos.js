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

    // // Segundo Gráfico
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
    

    // // Terceiro Gráfico
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
