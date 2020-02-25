import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publicKey = 'pk_test_dTsh5lG2QxFC8zdcJXXTuUo800qEEeodXm';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    };

    return <StripeCheckout label='Pay Now' name='Clothing Store Ltd.' billingAddress shippingAddress
                           image='https://svgshare.com/i/CUz.svg' description={`Your total is $${price}`}
                           amount={priceForStripe} panelLabel='Pay Now' token={ onToken } stripeKey={ publicKey } />
};

export default StripeCheckoutButton
