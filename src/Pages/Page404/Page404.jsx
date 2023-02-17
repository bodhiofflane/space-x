import {Helmet} from 'react-helmet';

const Page404 = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Error"
        />
        <title>Space-X - Страница не обнаружена</title>
      </Helmet>
      <h2 style={{textAlign: 'center'}}>Страница не обнаружена</h2>
    </>
  );
}
 
export default Page404;