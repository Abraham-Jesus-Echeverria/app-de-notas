import React,{Component} from "react";   
import Button from "./button";
// libreria para indentificadores unicos: 
import{ v4 as uuidv} from 'uuid'

// const styles = { 
//   width: "300px", 
//   height: "100vh", 
//   padding: "20px", 
//   borderRight: "2px solid black"
// }

export default class Form extends Component{ 
  state ={ 
    inputTitle: '',  
    inputText: '', 
  }
  inputEvent = (e) =>{  
    e.target.matches('.title')?this.setState({inputTitle: e.target.value}):this.setState({inputText: e.target.value}); 
    // if(e.target.matches('.title')){ 
    //    this.setState({ 
    //      inputTitle: e.target.value, 
    //     }); 
    // }
    // if(e.target.matches('.text')){  
    //   this.setState({ 
    //     inputText: e.target.value, 
    //    });
    // }
 
  } 
    formSubmit = (e) =>{  
        e.preventDefault()  
        const dataTarea = { 
          id: uuidv(), 
          titulo: this.state.inputTitle.trim(),
          texto: this.state.inputText.trim(), 
          complete: false, 
        }; 
        this.props.changeData(dataTarea); 
    } 
    render(){  
      const {styleForm} = this.props
        return( 
            <> 
            <form onSubmit={(e)=>this.formSubmit(e) } className={styleForm}> 
            <div className="form-group mb-2">  
                <label htmlFor="title" className="form-label">Ingresa el nombre de la tarea</label>
                <input id="title" type="text" placeholder="Nombre..." className="form-control title" onChange={this.inputEvent}/>  
            </div>
            <div className="form-group mb-4">  
                <label htmlFor="text" className="form-label"> ingresa la descripcion de tu tarea</label>
                <textarea id="text" type="text" placeholder="Descripcion..." className="form-control text" style={{resize: "none", height: "150px"}} onChange={this.inputEvent}/> 
            </div>  
            <Button styleButton={'btn-success'} eventButton={()=>null}>Enviar formulario</Button> 
            </form>
            </>
        ); 
    }; 
}; 

