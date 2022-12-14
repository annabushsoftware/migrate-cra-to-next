import styles from '../styles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <img src="/logo.svg" className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
