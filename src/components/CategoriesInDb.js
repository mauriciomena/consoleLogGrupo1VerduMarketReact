import React, {Component} from 'react';

//Importar nuestro componente
import Category from './Category';

class CategoriesInDb extends Component{
    
    // constructor(){
    //     super()
    //     this.state ={
    //         genresList : []
    //     }
    // }
    // //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    // //Montaje 
    // componentDidMount(){
    //     fetch('https://verdumarket8.herokuapp.com/api/users')
    //     .then(respuesta =>{
    //         return respuesta.json()
    //     })
    //     .then(genres =>{
    //         //console.log(genres)
    //         this.setState({genresList: genres.data})
    //     })
    //     .catch(error => console.log(error))

    // }


    // fondo(){
    //     let fondoCaja = document.querySelector('.fondoCaja');
    //     fondoCaja.classList.toggle('bg-secondary');
    // }


    // render(){
    //     return (
    //         <React.Fragment>
    //             {/*<!-- Genres in DB -->*/}
    //             <div className="col-lg-6 mb-4">						
    //                 <div className="card shadow mb-4 " >
    //                     <div className="card-header py-3">
    //                         <h6  onMouseOver = { () => this.fondo()}  className="m-0 font-weight-bold text-gray-800 titulo">Genres in Data Base</h6>
    //                     </div>
    //                     <div className="card-body fondoCaja">
    //                         <div  className="row">
    //                             {
    //                                 //console.log(this.state.genresList)
    //                                 this.state.genresList.map((genre,index)=>{
    //                                     return  <Genre  {...genre}  key={index} />
    //                                 })
    //                             }
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    
    // </React.Fragment>
    // )
    // }
}
export default CategoriesInDb;
