import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>My Blog11</h2>
        {posts.map(i => (
          <PostPreview key={i.slug} post={i} />
        ))}
      </Layout>
    </>
  );
};
