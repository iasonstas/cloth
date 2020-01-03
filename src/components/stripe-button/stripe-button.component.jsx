import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_iCMQ5F41AA9BI8vNXh8ZxqhI003Okrl87n';

  const onToken = token => {
    console.log(token);
    alert('Payment successfull');
  };

  return (
    <StripeCheckout
      label='Pay now'
      name='Cloth Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      currency='USD'
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
