import { Component } from 'react'
import Boton from './Boton'

export default class Contador extends Component{
  constructor(props){
    super(props);
    this.state = { valor:0}
  }
  sumar() {
    this.setState({valor: this.state.valor + 1});
  }

  render(){
    return(
      <div className="Contador">
        <span className='Titulo'>{this.props.children}</span>
        <span className='Valor'>{this.state.valor}</span>
        <div className="Botonera">
          <input 
            type="number" 
            placeholder="Valor" 
            value={this.state.valor} 
            onChange={(e) => this.setState({ valor: e.target.value })} 
          />
          <Boton simbolo='+'
          accion={() => this.sumar()}
          />
           
        </div>
      </div>
    )
  }
}