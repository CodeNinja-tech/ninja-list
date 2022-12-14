import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta name="keywords" content="ninja lists" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore non nostrum similique assumenda quia dolorem ab, alias ad
          impedit sed eum tempora maxime distinctio eaque laborum fuga, illum
          molestias! Explicabo quos iure repellat enim similique repellendus,
          atque nesciunt ipsa.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          inventore non nostrum similique assumenda quia dolorem ab, alias ad
          impedit sed eum tempora maxime distinctio eaque laborum fuga, illum
          molestias! Explicabo quos iure repellat enim similique repellendus,
          atque nesciunt ipsa.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
