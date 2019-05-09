import { graphql, useStaticQuery } from 'gatsby';
const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200) {
                srcSet
                src
                sizes
                aspectRatio
              }
            }
          }
        }
      }
    }
  `);
  console.log('DATA', data);
  return data.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
  }));
};
export default useInstagram;
