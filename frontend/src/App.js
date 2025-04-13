import React, { useState } from 'react';

function App() {
  // Signup state
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');

  // New post state
  const [postContent, setPostContent] = useState('');
  const [postMsg, setPostMsg] = useState('');

  // Signup handler
  const handleSignup = async () => {
    const res = await fetch('http://localhost:4000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password: 'password123' })
    });
    const data = await res.json();
    setMsg(data.message);
  };

  // New post handler (mock)
  const handlePostSubmit = () => {
    // TODO: Replace with real API call
    setPostMsg(`Post submitted: "${postContent}"`);
    setPostContent('');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      {/* Signup Section */}
      <section style={{ marginBottom: '2rem' }}>
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', marginBottom: '0.5rem' }}
        />
        <button onClick={handleSignup} style={{ padding: '0.5rem 1rem' }}>
          Sign Up
        </button>
        {msg && <p style={{ marginTop: '1rem' }}>{msg}</p>}
      </section>

      {/* New Post Section */}
      <section>
        <h2>New Post</h2>
        <textarea
          placeholder="Write your post here…"
          rows={4}
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
          style={{ padding: '0.5rem', width: '100%', marginBottom: '0.5rem' }}
        />
        <button onClick={handlePostSubmit} style={{ padding: '0.5rem 1rem' }}>
          Submit Post
        </button>
        {postMsg && <p style={{ marginTop: '1rem' }}>{postMsg}</p>}
      </section>
    </div>
  );
}

export default App;
