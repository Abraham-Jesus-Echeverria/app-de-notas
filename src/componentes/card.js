import React,{Component} from "react";  
// componentes 
import Button from "./button"; 
// iconos 

export default class Card extends Component{ 
  state = {
    dataComplete: false, 
  }

  tareaComplete = () =>{ 
    // this.props.data.complete = true;   
    this.setState({ 
      dataComplete: !this.state.dataComplete
    })
  }  

    render(){  
      const {data, deleteTarea} = this.props
        return( 
            <>  
            <div className="d-flex justify-content-center"> 
            <div className={`card w-50 border border-secondary mt-5 ${this.state.dataComplete && 'bg-warning'}`} >  
              <div className="card-header d-flex justify-content-between">  
                <h2 className="card-title h5">{data.titulo}</h2> 
                <p className="h5">12/09/2022</p>
              </div> 
              <div className="card-body"> 
                <div className={`card-text ${this.state.dataComplete && 'text-decoration-line-through'}`}>{data.texto}</div>
                <div className="mt-4">  
                  <Button styleButton={'btn-danger me-3'} eventButton={deleteTarea} id={data.id}><i className="fa-solid fa-trash"></i></Button> 
                  <Button styleButton={'btn-success'} eventButton={this.tareaComplete}><i className="fa-solid fa-check"></i></Button>
                </div>
              </div>
            </div> 
            </div>
            </>
        ); 
    }; 
    
};