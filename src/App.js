import React, {Component} from 'react';
import './App.css';
import Filme from './component/filme'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      charge: false
    } 

  }

  componentDidMount(){
    setTimeout(()=>
        {this.setState({
              charge:true
            })},1000
    )
    
  }
   


  render() {
    return (
      <div>
        <Filme charge={this.state.charge}/>
      </div>
    )
  }
} 
export default App;
