import React, { Component } from 'react';
import Contador from './componentes/Contador';
import Formulario from './componentes/Formulario';
import './App.css';
import Boton from './componentes/Boton';

// const contadores = ['Alumnos', 'Profesores', 'Aulas', 'etc.', 'etc.'];

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contadores: []
    }

    this.eliminar = this.eliminar.bind(this);

  }


  guardar(nombre){
    let nuevosContadores = this.state.contadores;
    nuevosContadores.push(nombre);
    this.setState({contadores: nuevosContadores}); 

  }

  

  eliminar(index) {
    const nuevosContadores = [this.state.contadores];
    nuevosContadores.splice(index, 1);
    this.setState({ contadores: nuevosContadores });
}

//        <Boton>Agregar nuevo</Boton>
//        <Boton>Eliminar todo</Boton>

render() {
  return (
      <div className='contenedor'>
          
       <Formulario guardar={(nombre) => this.guardar(nombre)} />
      
      <div className="ListaContadores">
        {this.state.contadores.map((cont, index) =>
          <Contador 
          key={index}
          eliminar={() => this.eliminar(index)}
           >
          {cont}
          </Contador>
         )}
          </div>
      </div>
  );
}
}