import { Component } from 'react';
import Boton from './Boton';

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            valor: 0 
        };
    }

    render() {
        return (
            <div className="Formulario">
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={this.state.nombre} 
                    onChange={(e) => this.setState({ nombre: e.target.value })} 
                />
                <input 
                    type="number" 
                    placeholder="Valor" 
                    value={this.state.valor} 
                    onChange={(e) => this.setState({ valor: e.target.value })} 
                />
                <Boton 
                    accion={() => this.props.guardar(this.state.nombre, this.state.valor)} 
                    simbolo="guardar"
                />
            </div>
        );
    }
}
