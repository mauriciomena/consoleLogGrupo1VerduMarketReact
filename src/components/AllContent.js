import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import CategoriesInDb from './CategoriesInDb';
import Cards from './Cards';

function AllContent(props){
	let data = props.data ;
	console.log(data)
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Tablero de Control</h1>
					</div>
				
					{/*<!-- Contenedor de tarjetas-->*/}
					<Cards data={data}/>
					{/*<!-- End Contenedor de tarjetas -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Último producto cargado en DB</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row último producto en DB -->*/}

						{/*<!-- Categories in DB -->*/}
						{/* <CategoriesInDb /> */}

						{/*<!--End Categories in Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default AllContent;