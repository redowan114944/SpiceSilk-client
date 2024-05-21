import React from 'react';

export default function Newsletter() {
  return (
    <div className='container px-6 mx-auto m-8' style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '400px', // Adjust this according to your layout
      backgroundImage: 'url("https://i.ibb.co/k0JDb11/chef-service.jpg")', // Replace this URL with the actual URL of the image
      backgroundSize: 'cover', // This ensures the image covers the entire container
      backgroundPosition: 'center', // This centers the image within the container
    }}>
      <div style={{ 
        backgroundColor: 'rgba(173, 216, 230, 0.8)',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h2 style={{ color: '#333333', marginBottom: '20px' }}>Subscribe to Our Newsletter</h2>
        <p style={{ color: '#555555', fontSize: '16px', marginBottom: '20px' }}>Stay in the loop! Subscribe to our newsletter for exciting updates, exclusive deals, and special offers delivered straight to your inbox.</p>
        <form>
          <input type="email" placeholder="Enter your email" style={{
            padding: '10px',
            borderRadius: '3px',
            border: '1px solid #CCCCCC',
            margin: '10px 0',
            width: '100%',
            maxWidth: '300px',
            boxSizing: 'border-box'
          }} />
          <button type="submit" style={{
            backgroundColor: '#0077FF',
            color: '#fff',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'uppercase'
          }}>Subscribe Now</button>
        </form>
        <p style={{ color: '#777777', fontSize: '14px', marginTop: '20px' }}>Don't miss out! Join our community today.</p>
      </div>
    </div>
  );
}
