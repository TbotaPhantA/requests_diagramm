import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DateField.css'


function DateField({isStartDate}) {
    const [startDate, setStartDate] = useState(new Date());

    return (<div>
                <DatePicker className='date_piker'
                            id={isStartDate ? 'start_date' : 'end_date'}
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"/>
            </div>)
}

export default DateField;