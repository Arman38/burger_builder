import React from 'react';
import { CheckoutSummary } from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../ContactData/ContactData';
import {connect} from 'react-redux'

 class Checkout extends React.Component {

  

    onCheckoutCanceled = () => {
        this.props.history.goBack()
    }
    onCheckoutContinued = () => {
        this.props.history.replace("/checkout/contact-data")
    }
    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCanceled={this.onCheckoutCanceled}
                    checkoutContinued={this.onCheckoutContinued}
                />
                <Route 
                    path={this.props.match.path + "/contact-data"} 
                    component = {ContactData}
                    />
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    ings:state.ingredients,
 })




export default connect(mapStateToProps)(Checkout)