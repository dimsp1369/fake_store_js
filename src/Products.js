import './App.css';
import {useEffect} from 'react'
import {getProduct} from "./redux/action/productAction";
import {connect} from "react-redux";
import ProductList from "./ProductList";


function Products(props) {

    const {products, getProduct} = props

    useEffect(() => {
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            <h2>Products list</h2>
            <div className="App">
                {products.map(el => <ProductList el={el} key={Math.random()} />)}
            </div>

        </div>
    );
}

const mapStateToProps = (state) => ({
    products: state.storeReducer.product
})

export default connect(mapStateToProps, {getProduct})(Products);
