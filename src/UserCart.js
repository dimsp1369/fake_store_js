import {connect} from "react-redux";


function UserCart(props) {

    const {userBoar} = props

    return (
        <div>
            {JSON.stringify(userBoar.cart)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    userBoar: state.userReducer
})


export default connect(mapStateToProps, null)(UserCart);