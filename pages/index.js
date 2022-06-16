import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, i am jayakusuma! I'm a fullstack web developer</p>
        <ul>
          <li>
              <Link href="/posts/first-post">
            <a>
              Go to my first post
            </a>
            </Link>
          </li>

          <li>
              <Link href="/posts/second-post">
            <a>
              Go to my second post
            </a>
            </Link>
          </li>

          <li>
              <Link href="/posts/third-post">
            <a>
              Go to my third post
            </a>
            </Link>
          </li>
        </ul>

      </section>
    </Layout>
  );
}