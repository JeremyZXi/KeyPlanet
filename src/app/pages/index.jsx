// pages/index.js
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Wild Link</title>
                {/*
          This meta tag makes the browser render the page width
          as the device width (so it looks correct on phones).
        */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <main style={styles.mainContainer}>
                <h1 style={styles.title}>Wild Link</h1>
                <p style={styles.paragraph}>
                    New Interactive Animal Bracelets
                </p>
                <button style={styles.button}>Learn More</button>
            </main>
        </>
    );
}

const styles = {
    mainContainer: {
        // Make it occupy the entire viewport height and use flex to center content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: '1rem',
        // A simple phone-like max width
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '0.75rem',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: '1rem',
        marginBottom: '1rem',
        textAlign: 'center',
    },
    button: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
    },
};