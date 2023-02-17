import {Helmet} from 'react-helmet';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Contacts"
        />
        <title>Space-X - Контакты</title>
      </Helmet>
      <h2 style={{textAlign: 'center'}}>Контакты</h2>
    </>
  );
}
 
export default Contacts;