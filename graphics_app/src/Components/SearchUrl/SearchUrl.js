import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import ReactDOM from "react-dom";
import get_data_for_search from "../../requests/getSimilarUrlPattern";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchUrl.css';


function SearchUrl() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(['']);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        async function set_search_result() {
            setSearchResults(await get_data_for_search());
        }

        set_search_result();
        console.log(searchResults);
    }, [searchTerm])

    return (
        <div className='search_div'>
            <Autocomplete
                id="combo-box-demo"
                options={searchResults}
                getOptionLabel={(option) => option}
                style={{width: 300}}
                renderInput={(params) => <TextField {...params} label="Url..." variant="outlined" onChange={handleChange} />}
            />

            {/*<TextField id="standard-basic"*/}
            {/*           label="URL"*/}
            {/*           type='search'*/}
            {/*           value={searchTerm}*/}
            {/*           onChange={handleChange}*/}
            {/*           list="url_pattern"/>*/}
            {/*<datalist id="url_pattern">*/}
            {/*    {searchResults.map((item) => (<option value={item}/>))}*/}
            {/*</datalist>*/}
        </div>
    )
}

export default SearchUrl;