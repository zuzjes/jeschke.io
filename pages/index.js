import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jeschke.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <b>jeschke.io</b>
        </h1>
        <p>
          <a href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</a>
        </p>
      </main>
    </div>
  )
}
