import axios from "./axios";

function get_url_for_search() {
    let search = document.getElementById('combo-box-demo').value;
    return `/unique_url_patterns?beginning=${search}`;
}

async function get_data_for_search() {
    let request_data = await axios.get(get_url_for_search());
    let data_for_search = [];
    for (let i = 0; i < request_data.data.length; i++) {
        data_for_search.push(request_data.data[i].url_pattern)
    }
    return data_for_search.length === 0 ? ['']: data_for_search;
}

export default get_data_for_search;