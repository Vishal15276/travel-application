import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <section style={styles.headerSection}>
        <h1 style={styles.mainTitle}>About TravelExplorer</h1>
        <p style={styles.description}>
          TravelExplorer is your trusted travel companion, helping you explore breathtaking destinations across the globe. Whether you're a backpacker, a luxury traveler, or a family looking for fun, we have tips, guides, and recommendations for everyone.
        </p>
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
          alt="About travel"
          style={styles.bannerImage}
        />
      </section>

      <section style={styles.missionSection}>
        <h2 style={styles.sectionTitle}>🌟 Our Mission</h2>
        <p style={styles.text}>
          Our mission is to make travel easy, affordable, and enriching. We connect you with curated guides, local experiences, and practical tips to help you travel smarter and deeper.
        </p>
      </section>

      <section style={styles.whyUsSection}>
        <h2 style={styles.sectionTitle}>🌍 Why Choose Us?</h2>
        <ul style={styles.list}>
          <li>✅ Expert-curated travel guides</li>
          <li>✅ Trusted reviews and ratings</li>
          <li>✅ Stunning destination galleries</li>
          <li>✅ Budget-friendly tips</li>
          <li>✅ Local experience recommendations</li>
        </ul>
      </section>

      <section style={styles.teamSection}>
        <h2 style={styles.sectionTitle}>👥 Meet Our Team</h2>
        <div style={styles.teamGrid}>
          {team.map((member, index) => (
            <div key={index} style={styles.card}>
              <img src={member.image} alt={member.name} style={styles.avatar} />
              <h4 style={styles.name}>{member.name}</h4>
              <p style={styles.role}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Sample team data
const team = [
  {
    name: 'Aditi Sharma',
    role: 'Founder & Travel Blogger',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Raj Mehra',
    role: 'Travel Photographer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Neha Kapoor',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Ankit Rathi',
    role: 'Content Writer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#fffefc',
    minHeight: '100vh',
    color: '#333',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  mainTitle: {
    fontSize: '3rem',
    color: '#2c3e50',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 2rem',
    lineHeight: '1.6',
  },
  bannerImage: {
    width: '100%',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    maxHeight: '400px',
    objectFit: 'cover',
  },
  missionSection: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  whyUsSection: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#34495e',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '2',
  },
  teamSection: {
    textAlign: 'center',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '1rem',
    objectFit: 'cover',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  role: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default About;
