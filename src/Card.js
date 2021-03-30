import React from 'react';
import './Card.css';
const Card = ({user})=>{

    return (
        <div class="d-flex flex-wrap">
            <div className="card br3 pa3 ma3 grow bw2 shadow-5" id="my_list" style={{ width: '35rem' }}>
            <div class="card-body" id="body">
                <h3 class="card-title">{user.name}</h3>
                <h4 class="card-text">{user.code}</h4>
                <h4>{user.time}</h4>
                <a href={user.link} class="btn btn-light">JOIN</a>
            </div>
        </div>
        </div>  
        
    );
}

export default Card;