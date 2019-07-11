import React from 'react';
 

function Item (props) {

    return ( 
        <div className="item">
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={props.item.img} style={{ width: '285px', height: '300px' }} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}   /></h5>
                    <p className="card-text">{props.item.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>      
    );
} 
export default Item;