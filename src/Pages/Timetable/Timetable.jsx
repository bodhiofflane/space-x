import { Helmet } from 'react-helmet';

const Timetable = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Timetable"
        />
        <title>Space-X - График полетов</title>
      </Helmet>
      <h2 style={{textAlign: 'center'}}>График полетов</h2>
    </>
  );
}
 
export default Timetable;