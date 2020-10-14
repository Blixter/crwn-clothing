import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HbuJCJ9sK7MOwJIu0khYKc5aOsZWbKmNCTMHNFsitefVQXoRdqraTJxP6X1OdEcBqJvNCSR7VWiIA0ehWZOVUTq00Mei7KPgm";
  const onToken = (token) => {
    console.log(token);
    alert("Paymen Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
