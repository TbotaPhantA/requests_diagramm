import React, {useEffect, useState} from 'react';
import Line from "recharts/lib/cartesian/Line";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import Tooltip from "recharts/lib/component/Tooltip";
import LineChart from "recharts/lib/chart/LineChart";
import './Graph.css'
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import get_data_for_graph from '../../requests/getQuantityOfUrlByDate';


function Graph() {
    const [data, setData] = useState([{name: '23', uv: 400}, {name: 'qasdf', uv: 200}]);

     async function set_date() {
        let graph_data = get_data_for_graph();
        setData(await graph_data);
    }

    useEffect(() => {
        let btn = document.getElementById('build_graph_btn');

        btn.addEventListener('click', set_date);

        return () => {btn.removeEventListener('click', set_date)};
    })

    return (
        <div className='graph_div'>
            <LineChart width={1100} height={500} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip />
            </LineChart>
        </div>
    );
}


export default Graph;