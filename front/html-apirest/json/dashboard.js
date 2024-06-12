function getData() {
  console.log("entrou");
  fetch("http://192.168.14.43:8000/monitoramento")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const tableBody = document
        .getElementById("tabelaMonitoramento")
        .getElementsByTagName("tbody")[0];
      tableBody.innerHTML = ""; 
      data.forEach((item) =>{
        const row = tableBody.insertRow();
        row.innerHTML = `
          <td class="alignItensColumn">${item.id}</td>
          <td class="alignItensColumn">${item.temperatura}</td>
          <td class="alignItensColumn">${item.umidade}</td>
          <td class="alignItensColumn">${item.dispositivo}</td>
        `;
      });
    })
    .catch((error) => console.error("Erro ao obter dados:", error));
}

getData();

  