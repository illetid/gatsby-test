import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';
const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];
  return (
    <>
      <h2>Insta post from @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            css={css`
              display: block;
            `}
            href={`https://instagram.com/p/${photo.id}`}
          >
            <Image
              alt={photo.caption}
              css={css`
                width: 100px;
                height: 100px;
                * {
                  margin: 0;
                }
              `}
              fluid={photo.fluid}
            />
          </a>
        ))}
      </div>
      <a href="{`https://instagram/illetid`}">See more on insta @{username}</a>
    </>
  );
};
export default Insta;
