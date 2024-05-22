
export default function Newsletter() {
  return (
    <div className='container px-6 mx-auto m-8' style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px', // Adjust this according to your layout
      backgroundImage: 'url("https://i.ibb.co/k0JDb11/chef-service.jpg")', // Replace this URL with the actual URL of the image
      backgroundSize: 'cover', // This ensures the image covers the entire container
      backgroundPosition: 'center', // This centers the image within the container
    }}>
      <div style={{ 
        backgroundColor: 'rgba(255, 255, 255, 255)',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        maxWidth: '900px'
      }}>
        <h2 className='text-2xl' style={{ color: '#333333', marginBottom: '20px' }}>Spice Silk</h2>
        <p style={{ color: '#555555', fontSize: '16px', marginBottom: '20px' }}>Discover a tapestry of flavors woven with care and expertise. At Spice Silk, our fusion cuisine invites you on a journey where spices meet silk in perfect harmony.

Step into our sanctuary, where each dish is a masterpiece crafted to tantalize your senses and transport you to distant lands.

Join us for an unforgettable dining experience, where every bite tells a story, and every moment is a celebration. Welcome to Spice Silk, where every guest is family.</p>
      
       
      </div>
    </div>
  );
}
