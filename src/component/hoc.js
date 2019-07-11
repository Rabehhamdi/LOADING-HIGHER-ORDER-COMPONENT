import React, { Component } from 'react';
import Spinner from './Spinner';
const  Hoc = (HocComponent) =>{
    return class Hoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                 
            };
        } 
    
    
    render() {
        return ((this.props.charge) ? <HocComponent /> : <center><Spinner /> </center>)   
    }}
}
export default Hoc