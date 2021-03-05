import './App.css';
import {getProduct} from "./redux/action/productAction";
import {connect} from "react-redux";
import NavBar from "./NavBar";
import {Route, Redirect} from "react-router-dom";
import UserCart from "./UserCart";
import Products from "./Products";

function App() {


    return (
        <div>
            <NavBar/>
            <Redirect to="/Products"/>
            <div>
                <Route path='/UserCart'
                       render={() => <UserCart/>}/>
            </div>
            <div>
                <Route path='/Products'
                       render={() => <Products/>}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    products: state.storeReducer.product
})

export default connect(mapStateToProps, {getProduct})(App);
