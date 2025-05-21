import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${form.name}!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem',
    backgroundColor: '#f0fff0',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '2rem',
    color: '#222',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
  },
  input: {
    padding: '10px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    padding: '10px',
    height: '120px',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    fontSize: '1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Contact;
