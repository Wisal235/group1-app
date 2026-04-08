import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '20px',
        padding: '50px 70px',
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 25px 45px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{ color: '#e94560', fontSize: '3rem', marginBottom: '10px' }}>
          Group 1
        </h1>
        <p style={{ color: '#a8a8b3', fontSize: '1rem', marginBottom: '30px', letterSpacing: '3px' }}>
          CI/CD PIPELINE PROJECT
        </p>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
          <h3 style={{ color: '#e94560', marginBottom: '20px', letterSpacing: '2px' }}>
            TEAM MEMBERS
          </h3>
          {['Wisal Ali', 'Chibuokem Chinwendu', 'Tara Mohammedsaeed', 'Rebecca Rottler'].map((name) => (
            <p key={name} style={{ color: '#ffffff', fontSize: '1.1rem', margin: '10px 0' }}>
              {name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;