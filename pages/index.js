import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        As a software engineer I specialize in building responsive and optimized websites and web applications. I have immersive experience working with VueJs, and I am also proficient in JavaScript, ReactJs, TypeScript and SASS.
        </p>
        <p>
          Read
          <Link href="/posts/first-post"> my post</Link>
        </p>
      </section>
    </Layout>
  );
}