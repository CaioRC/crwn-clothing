import React from "react";
import StripeCheckout from "react-stripe-checkout";



const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey = "pk_test_mFOznLzNrJZAel1jsY1VT2I900JcinlrjV";

    const onToken = token => {
        console.log(token);
        alert('Payement Successful');
    }

  return (<StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishKey}
  />);
};

export default StripeCheckoutButton;
