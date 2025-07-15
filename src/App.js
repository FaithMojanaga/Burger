import React, { useState } from 'react';

function App() {
  const [showTomato, setShowTomato] = useState(true);
  const [showLettuce, setShowLettuce] = useState(true);
  const [showMeat, setShowMeat] = useState(true);

  return (
    <div style={{ maxWidth: 320, margin: '40px auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", textAlign: 'center' }}>
      <h1 style={{ marginBottom: 24, color: '#4B5563' }}>Hello!!Create Your Custom Burger</h1>

      
      <TopBread />
      {showTomato && <Tomato />}
      {showLettuce && <Lettuce />}
      {showMeat && <Meat />}
      <BottomBread />


      <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
        <ToggleButton active={showTomato} onClick={() => setShowTomato(!showTomato)}>Tomato</ToggleButton>
        <ToggleButton active={showLettuce} onClick={() => setShowLettuce(!showLettuce)}>Lettuce</ToggleButton>
        <ToggleButton active={showMeat} onClick={() => setShowMeat(!showMeat)}>Meat</ToggleButton>
      </div>
    </div>
  );
}

const ToggleButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      padding: '10px 18px',
      borderRadius: 20,
      border: '2px solid',
      borderColor: active ? '#10B981' : '#9CA3AF',
      backgroundColor: active ? '#D1FAE5' : '#F3F4F6',
      color: active ? '#065F46' : '#6B7280',
      cursor: 'pointer',
      fontWeight: '600',
      userSelect: 'none',
      transition: 'all 0.2s ease-in-out',
      minWidth: 100,
    }}
  >
    {active ? `Remove ${children}` : `Add ${children}`}
  </button>
);

const TopBread = () => (
  <div style={{
    height: 60,
    width: 220,
    background: 'linear-gradient(145deg, #dbab57ff, #C99851)',
    borderRadius: '110px 110px 40px 40px',
    margin: '0 auto 10px',
    boxShadow: '0 5px 8px rgba(0,0,0,0.1)',
  }} />
);

const Tomato = () => (
  <div style={{
    height: 22,
    width: 210,
    background: 'linear-gradient(90deg, #cb1515ff, #B22222)',
    borderRadius: 16,
    margin: '6px auto',
    boxShadow: 'inset 0 2px 6px rgba(255, 255, 255, 0.6)',
  }} />
);

const Lettuce = () => (
  <div style={{
    height: 20,
    width: 210,
    background: 'linear-gradient(90deg, #219325ff, #1B5E20)',
    borderRadius: 18,
    margin: '6px auto',
    boxShadow: 'inset 0 2px 6px rgba(255, 255, 255, 0.4)',
  }} />
);

const Meat = () => (
  <div style={{
    height: 35,
    width: 210,
    background: 'linear-gradient(90deg, #8a3e0bff, #2F1B0C)',
    borderRadius: 20,
    margin: '6px auto',
    boxShadow: 'inset 0 3px 7px rgba(0,0,0,0.7)',
  }} />
);



const BottomBread = () => (
  <div style={{
    height: 60,
    width: 220,
    background: 'linear-gradient(145deg, #dbab57ff, #C99851)',
    borderRadius: '40px 40px 110px 110px',
    margin: '10px auto 0',
    boxShadow: '0 5px 8px rgba(0,0,0,0.1)',
  }} />
);

export default App;
