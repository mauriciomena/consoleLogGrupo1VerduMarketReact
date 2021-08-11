
import React, {Component} from 'react';
import Product from './Product';


class LastProductInDB extends Component {
    constructor() {
        super();
        this.state = { 
            product : {},
        }
    }
 
    componentDidMount(){
            fetch('http://localhost:3030/api/products/lastProduct')
            .then(res => res.json())
            .then((promiseData) => {
                let lastProduct = promiseData.data;
                this.setState({product: lastProduct})
            }) 
    }
    render() { 
        return (
            <React.Fragment>
                    <Product  {...this.state.product}  />
            </React.Fragment>
          );
    }
}
 
export default LastProductInDB;