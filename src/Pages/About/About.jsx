import {Helmet} from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="About"
        />
        <title>Space-X - О компании</title>
      </Helmet>
      <h2 style={{textAlign: 'center'}}>О компании</h2>
    </>
  );
}
 
export default About;