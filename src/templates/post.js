import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import Layout from '../components/layouts';
import { MDXRenderer } from 'gatsby-mdx';
import ReadLink from '../components/read-link';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      code {
        body
      }
    }
  }
`;
const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        posted by {post.frontmatter.author}
      </p>
      <p>Post body</p>
      <MDXRenderer>{post.code.body}</MDXRenderer>
      <ReadLink to="/">Back to all posts</ReadLink>
    </Layout>
  );
};

export default PostTemplate;
