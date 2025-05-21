import React from 'react';

const Places = () => {
  const places = [
    {
      name: 'Paris, France',
      image: 'https://source.unsplash.com/400x300/?paris,eiffel',
      description: 'The city of love and lights.',
    },
    {
      name: 'Kyoto, Japan',
      image: 'https://source.unsplash.com/400x300/?kyoto,japan',
      description: 'Famous for its classical temples and cherry blossoms.',
    },
    {
      name: 'New York City, USA',
      image: 'https://source.unsplash.com/400x300/?newyork,city',
      description: 'The city that never sleeps.',
    },
    {
      name: 'Santorini, Greece',
      image: 'https://source.unsplash.com/400x300/?santorini,greek',
      description: 'White-washed buildings and stunning sunsets.',
    },
    {
      name: 'Cape Town, South Africa',
      image: 'https://source.unsplash.com/400x300/?capetown,tablemountain',
      description: 'Known for its harbor, mountains, and beaches.',
    },
    {
      name: 'Rio de Janeiro, Brazil',
      image: 'https://source.unsplash.com/400x300/?rio,brazil',
      description: 'Vibrant culture and breathtaking landscapes.',
    },
    {
      name: 'Rome, Italy',
      image: 'https://source.unsplash.com/400x300/?rome,italy',
      description: 'Ancient ruins and Renaissance art.',
    },
    {
      name: 'Bali, Indonesia',
      image: 'https://source.unsplash.com/400x300/?bali,beach',
      description: 'A tropical paradise with beautiful beaches.',
    },
    {
      name: 'Banff, Canada',
      image: 'https://source.unsplash.com/400x300/?banff,mountains',
      description: 'Stunning lakes and mountain landscapes.',
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Top Travel Destinations</h2>
      <div style={styles.grid}>
        {places.map((place, index) => (
          <div key={index} style={styles.card}>
            <img src={place.image} alt={place.name} style={styles.image} />
            <h3 style={styles.title}>{place.name}</h3>
            <p style={styles.description}>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem',
    backgroundColor: '#fefefe',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.4rem',
    margin: '1rem',
    color: '#222',
  },
  description: {
    fontSize: '1rem',
    margin: '0 1rem 1rem',
    color: '#555',
  },
};

export default Places;
