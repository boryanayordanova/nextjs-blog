import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";
import Head from "next/head";

export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta
          name="descriotion"
          content="A list with all programing-related tutorials"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
