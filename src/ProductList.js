import './App.css';
import {connect} from "react-redux";
import {addToCart} from "./redux/action/userActions";


function ProductList(props) {

    const {el, addToCartHandler} = props

    return (
        <div>
            <div className='product_block' >
                <img className='product_img' src={el.image} alt="here is your product"/>
                <div className='td_description'>
                    <h4>{el.title}</h4>
                    <p>{el.description}</p>
                    <span>${el.price}</span>
                    <div>{el.category}</div>
                </div>
                <div className='product_buttons'>
                    <div>
                        <button onClick={() => addToCartHandler(el)}>Add to cart</button>
                    </div>
                    <div>
                        <button>Review</button>
                    </div>
                    <div>
                        <button>Compare</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    products: state.storeReducer.product
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (product) => dispatch(addToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
