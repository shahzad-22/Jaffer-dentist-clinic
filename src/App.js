import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#007BFF' }}>Jaffer Dentist Clinic</h1>
        <p>Welcome to the official website of Dr. Kinza Jaffer</p>
      </header>

      <section>
        <h2>About Dr. Kinza Jaffer</h2>
        <p>Dr. Kinza is a highly experienced and compassionate dentist dedicated to providing quality dental care to all her patients.</p>
      </section>

      <section>
        <h2>Our Services</h2>
        <ul>
          <li>🦷 Teeth Cleaning</li>
          <li>🦷 Root Canal</li>
          <li>🦷 Whitening</li>
          <li>🦷 Braces</li>
          <li>🦷 Implants</li>
        </ul>
      </section>

      <section>
        <h2>Book Your Appointment</h2>
        <p>Please call or WhatsApp us at <strong>+92-300-1234567</strong></p>
      </section>

      <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        <p>&copy; 2025 Jaffer Dentist Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
