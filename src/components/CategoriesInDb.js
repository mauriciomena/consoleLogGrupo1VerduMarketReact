import React, {Component} from 'react';

//Importar nuestro componente
import Category from './Category';

class CategoriesInDb extends Component{
    
    constructor(){
        super()
        this.state ={
            categoryList : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje 
    componentDidMount(){
        fetch('https://verdumarket8.herokuapp.com/api/product')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(categories =>{
            //console.log(genres)
            this.setState({categoryList: categories.data.countByCategory})
        })
        .catch(error => console.log(error))

    }


    fondo(){
        let fondoCaja = document.querySelector('.fondoCaja');
        fondoCaja.classList.toggle('bg-secondary');
    }


    render(){
        return (
            <React.Fragment>
                {/*<!-- Genres in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4 " >
                        <div className="card-header py-3">
                            <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Categorias en la Base de datos</h6>
                        </div>
                        <div className="card-body fondoCaja">
                            <div  className="row">
                                {
                                    //console.log(this.state.genresList)
                                    this.state.categoryList.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
    
    </React.Fragment>
    )
    }
}
export default CategoriesInDb;
