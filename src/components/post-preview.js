import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import ReadLink from './read-link';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        display: flex;

        &:first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
        to={post.slug}
      >
        <Image
          fluid={post.image.sharp.fluid}
          css={css`
            * {
              margin: 0;
            }
          `}
          alt={post.title}
        />
      </Link>
      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>Read full post</ReadLink>
      </div>
    </article>
  );
};
export default PostPreview;
