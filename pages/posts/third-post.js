import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPosts(){
    return (
        <Layout>
        <Head>
            <title>Third Post</title>
        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
        />
        <h1>Third Post</h1>
        <p>Hello, i just made this static site using next js.</p>
        </Layout>
    );
}