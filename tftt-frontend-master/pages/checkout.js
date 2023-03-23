import React from 'react';

export default function checkout() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Checkout Page</h2>
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: 'lightgray', width: '50%', height: '300px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'black', paddingTop: '100px' }}>Checkout</h1>
        <br />
        <br />
        <h3 style={{ fontSize: '1.5rem', color: 'black' }}>Shopping Cart</h3>
        <h4>TriTip1: $19.99</h4>
        <h4>TriTip2: $19.99</h4>
        <br />
        <h3 style={{ fontSize: '1.5rem', color: 'black' }}>Total Price: $39.98</h3>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}