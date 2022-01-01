import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | kitchefy</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, Welcome</span>
          <h1>
            Everyday new <span>Recipes</span> from all over the world
          </h1>
          <p>
            Get acess to all the publications, news and forum <br />
            <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/chef.svg" alt="" />
      </main>
    </>
  );
}
