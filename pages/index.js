import styles from '../styles/Home.module.css'

function HomePage() {
  return (
  <div>
    <h1 className={styles.title}>
      Next.js REST API
    </h1>
    <h1 className={styles.description}>
      Go to <a href="http://localhost:3000/api">/api</a> to test endpoints
    </h1>
  </div>
  );
}

export default HomePage