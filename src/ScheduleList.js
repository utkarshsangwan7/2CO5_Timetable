import React from 'react';
import Schedule from './Schedule'
import Card from './Card'

const ScheduleList = ({day})=>{
    const list = Schedule[day].map((lecture)=>{
        return lecture;
    });
    const showList = list.map((user,i)=>{
        return <Card key = {i} user = {user}/>
    });
    return (
        <div className='tc list'>
            {showList};
        </div>
    );
}

export default ScheduleList;