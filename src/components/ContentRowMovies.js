import React from 'react';
import SmallCard from './SmallCard';


// NICO: ACÁ INFORMACIÓN PRODUCTOS



let productInDataBase = {
    color:   "primary",
    titulo: "Productos en DB",
    valor: 10321,
    icono: "fas fa-film",
}

let amount ={
    color:   "success",
    titulo: "Cantidad de Categorías",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Ofertas Semanales",
    valor: 5,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];

function ContentRowTop(props){
    let data = props.data;
    

    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;
