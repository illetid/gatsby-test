import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';
export default () => (
  <>
    <Layout>
      <h1>About Me</h1>
      <a href="https://github.com/ILLeTiD">Contact me if you want</a>
      <p>This is my personal website (testing gatsby stuff)</p>
      <Link to="/">&larr; Home</Link>
    </Layout>
  </>
);
