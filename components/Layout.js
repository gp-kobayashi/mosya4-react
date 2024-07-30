import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Products|Furniture Design</title>
                <link rel="icon" href="img/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}