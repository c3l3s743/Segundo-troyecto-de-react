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
                
                <Boton 
                    accion={() => this.props.guardar(this.state.nombre, this.state.valor)} 
                    simbolo="agregar nuava nota"
                />
                <Boton 
                    accion={() => this.props.guardar(this.state.nombre, this.state.valor)} 
                    simbolo="eliminar todo"
                />
            </div>
        );
    }
}
