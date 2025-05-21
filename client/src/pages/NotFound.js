import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <p style={styles.message}>Page Not Found</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '5rem',
    backgroundColor: '#fff0f0',
    height: '100vh',
  },
  code: {
    fontSize: '6rem',
    color: '#dc3545',
  },
  message: {
    fontSize: '1.5rem',
    color: '#555',
  },
};

export default NotFound;
