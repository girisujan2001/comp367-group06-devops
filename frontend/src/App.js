import React, { useState } from 'react';
import './App.css';

function App() {
  // Signup state
  const [username, setUsername] = useState('');
  const [msg, setMsg] = useState('');

  // New post state
  const [postContent, setPostContent] = useState('');
  const [postMsg, setPostMsg] = useState('');
  const [imageFile, setImageFile] = useState(null);

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
    const fileName = imageFile ? imageFile.name : 'no image';
    setPostMsg(`Post submitted: "${postContent}" with image: ${fileName}`);
    setPostContent('');
    setImageFile(null);
  };

  return (
    <div className="container">
      {/* Signup Section */}
      <section className="section">
        <h1>Signup</h1>
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button className="button" onClick={handleSignup}>
          Sign Up
        </button>
        {msg && <p className="message">{msg}</p>}
      </section>

      {/* New Post Section */}
      <section className="section">
        <h2>New Post</h2>
        <textarea
          className="textarea"
          placeholder="Write your post here…"
          rows={4}
          value={postContent}
          onChange={e => setPostContent(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImageFile(e.target.files[0])}
          style={{ marginBottom: '0.5rem' }}
        />
        <button className="button" onClick={handlePostSubmit}>
          Submit Post
        </button>
        {postMsg && <p className="message">{postMsg}</p>}
      </section>
    </div>
  );
}

export default App;
