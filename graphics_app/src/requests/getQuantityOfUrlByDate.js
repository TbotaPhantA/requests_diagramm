import axios from "./axios";

function getQuantityUrl() {
    let start_date = document.getElementById('start_date').value;
    let end_date = document.getElementById('end_date').value;
    let url_pattern = document.getElementById('combo-box-demo').value;
    console.log(url_pattern, start_date, end_date);
    return `data_for_graph?url_pattern=${url_pattern}&start_date=${start_date}&end_date=${end_date}`;
}

async function get_data_for_graph() {
    let request_data = await axios.get(getQuantityUrl());
    let data_for_graph = [];
    for (let i = 0; i < request_data.data.length; i++){
        data_for_graph.push({name: request_data.data[i].date, uv: request_data.data[i].quantity})
    }
    console.log(data_for_graph);
    return data_for_graph;
}

export default get_data_for_graph;