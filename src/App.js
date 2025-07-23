import React, { useState } from 'react';

function App() {
  const [tomatoCount, setTomatoCount] = useState(0);
  const [lettuceCount, setLettuceCount] = useState(0);
  const [meatCount, setMeatCount] = useState(0);

  const renderLayers = (Component, count) => {
    return Array.from({ length: count }, (_, i) => <Component key={i} />);
  };

  return (
    <div style={{ maxWidth: 320, margin: '40px auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", textAlign: 'center' }}>
      <h1 style={{ marginBottom: 24, color: '#4B5563' }}> Build Your Burger</h1>

      {/* Burger */}
      <div>
        <TopBread />
        {renderLayers(Lettuce, lettuceCount)}
        {renderLayers(Tomato, tomatoCount)}
        {renderLayers(Meat, meatCount)}
        <BottomBread />
      </div>

      {/* Controls */}
      <div style={{ marginTop: 40 }}>
        <LayerControls
          name="Tomato"
          count={tomatoCount}
          add={() => setTomatoCount(tomatoCount + 1)}
          remove={() => setTomatoCount(Math.max(0, tomatoCount - 1))}
        />
        <LayerControls
          name="Lettuce"
          count={lettuceCount}
          add={() => setLettuceCount(lettuceCount + 1)}
          remove={() => setLettuceCount(Math.max(0, lettuceCount - 1))}
        />
        <LayerControls
          name="Meat"
          count={meatCount}
          add={() => setMeatCount(meatCount + 1)}
          remove={() => setMeatCount(Math.max(0, meatCount - 1))}
        />
      </div>
    </div>
  );
}

const LayerControls = ({ name, count, add, remove }) => (
  <div style={{ marginBottom: 20 }}>
    <h4 style={{ marginBottom: 8 }}>{name}: {count}</h4>
    <button onClick={add} style={btnStyle('#10B981')}>Add</button>
    <button onClick={remove} style={btnStyle('#EF4444')}>Remove</button>
  </div>
);

const btnStyle = (color) => ({
  padding: '8px 16px',
  margin: '0 8px',
  backgroundColor: color,
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: '600',
});

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
