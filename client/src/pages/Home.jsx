import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to TravelExplorer 🌍</h1>
      <p style={styles.text}>Discover and explore beautiful destinations across the world.</p>
      <img
        src="https://source.unsplash.com/1200x500/?travel"
        alt="Travel"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  title: {
    fontSize: '3rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    margin: '1rem auto',
    maxWidth: '600px',
    color: '#555',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    marginTop: '2rem',
  },
};

export default Home;
