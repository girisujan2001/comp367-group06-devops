import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');

  const handleSignup = async () => {
    const res = await fetch('http://localhost:4000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password: 'password123' })
    });
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Signup</h1>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}

export default App;
