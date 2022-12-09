import Form from "./formulario"; 
import Card from "./card";  
import { Component } from "react";

export default class ListaTareas extends Component{   
  state = { 
    data: []
  }

 changeData = (tarea) =>{ 
    const tareasActualizadas = [tarea, ...this.state.data];  
    // practicamente lo que estamos haciendo es lo siguiente, llamamos a la tarea y la ingresamos dentro de un nuevo array, este array ira dentro del estado, data, para reemplazar los valores del estado, por los nuevos valores, ahora con el spread operation le estamos diciendo, que almacene un n numero de datos dentro del nuevo array, es decir toma el valor de tarea lo envia al nuevo array, y se establecemos el valor del nuevo array como el valor del estado, luego para no sobreescribir los datos del nuevo array, cuando nosotros ingresemos un dato nuevo, el dato anterior se destructurara dentro del array como otro dato, gracias al spread operation, y asi cada ves que ingresemos un dato nuevo, este se ira alamacenando dentro de la expresion del spread operation y se ira detructurando sin sobreescribir ningun dato. 
    console.log(tareasActualizadas);  
    if(tarea.titulo && tarea.texto){ 
       this.setState({ 
         data: tareasActualizadas, 
       }) 
  }
  } 

  deleteTarea = (id) =>{   
    // const del = this.state.data.filter((data)=> data.id !== id);  
    this.setState({ 
      data: this.state.data.filter((data)=> data.id !== id), 
    }); 
    // lo que estamos haciendo es muy sencillo, le pasamos como una prop esta funcion al boton de delete, entonces el boton de delete le pasa como parametroa esta funcion el id de la card a la que corresponde, una ves que tengamos ese id, lo siguiente sera actualizar el estado que contiene los datos, el estado es un array, por lo cual podemos usar sus metodos, en este caso usamos el metodo filter, filter lo que hace es que recorre el array y verifica so los elementos cunplen con la condicional que le estamos pasando, en este caso, la condicional es que si el id de algun elemento del array es diferente al id que pasamos como parametro entonces se cumple la condicional, pero cuando el id del algun elemento del array es igual al id que pasamos como parametro entonces este no cumple la condicion, por lo cual sera eliminado, y como bien sabemos el id que pasamos como parametro corresponde a la card desde donde presionamos el boton, por lo cual esa card sera eliminada.
  }
  render(){ 
        return( 
            <>  
            <div className="container-fluid"> 
              <div className="row">
                <Form styleForm={"col-3 vh-100 d-flex flex-sm-column p-3 border-end border-2"} changeData={this.changeData} />
                  <div className="col-9 p-0">  
                    <div className="row w-100 mx-auto">  
                      {  
                      this.state.data.map(elementos =><Card key={elementos.id} data={elementos} deleteTarea={this.deleteTarea} />)
                      }  
                    </div>
                  </div> 
              </div>  
          </div>
            </>
        )
    } 
  }
