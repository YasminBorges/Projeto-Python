google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', 'http://192.168.14.43:8000/monitoramento/gauge', true);
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState == 4 && xhr1.status == 200) {
            var response = JSON.parse(xhr1.responseText);

           
            var luminosidadeMedia = response[0].LUMINOSIDADE_MEDIA;
            var temperaturaMedia = response[0].TEMPERATURA_MEDIA;
            var umidadeMedia = response[0].UMIDADE_MEDIA;

            var data = google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                ['Luminosidade Média', luminosidadeMedia],
                ['Temperatura Média', temperaturaMedia],
                ['Umidade Média', umidadeMedia]
            ]);

    
            var options = {
                width: 300, height: 320,
                redFrom: 90, redTo: 100,
                yellowFrom: 75, yellowTo: 90,
                minorTicks: 5,
                max: 100 
            };

           
            var chart = new google.visualization.Gauge(document.getElementById('gaugechart1'));
            chart.draw(data, options);
        }
    };
    xhr1.send();
}
