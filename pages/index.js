import { Fragment } from 'react';
import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

export default function HomePage(props) {
  const DUMMY_POSTS = [
    {
      title: "Getting Started With NextJS",
      slug: "getting-started-with-nextjs",
      image: "getting-started-with-nextjs.png", 
      excerpt: "NextJs is a React framework for production - it makes building fullstack React applications", 
      date: "2022-02-10"
    },
    {
      title: "Getting Started With NextJS-2",
      slug: "getting-started-with-nextjs-2",
      image: "getting-started-with-nextjs.png", 
      excerpt: "NextJs is a React framework for production - it makes building fullstack React applications", 
      date: "2022-02-10"
    },
    {
      title: "Getting Started With NextJS-3",
      slug: "getting-started-with-nextjs-3",
      image: "getting-started-with-nextjs.png", 
      excerpt: "NextJs is a React framework for production - it makes building fullstack React applications", 
      date: "2022-02-10"
    },
    {
      title: "Getting Started With NextJS-4",
      slug: "getting-started-with-nextjs-4",
      image: "getting-started-with-nextjs.png", 
      excerpt: "NextJs is a React framework for production - it makes building fullstack React applications", 
      date: "2022-02-10"
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}