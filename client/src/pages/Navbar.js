import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>TravelExplorer</div>
      <ul style={styles.links}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/places" style={styles.link}>Places</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#007bff',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Navbar;
