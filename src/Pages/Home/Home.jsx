import { Helmet } from 'react-helmet';

import Advantages from '../../components/Advantages/Advantages';
import Button from '../../components/Button/Button';

import './home.scss';

import Line from '../../assets/img/line.png';

const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Home page"
        />
        <title>Space-X - Главная страница</title>
      </Helmet>

      <div className="home">
        <div className="container">
          <div className="home__inner">

            {/* Левая часть лейаута */}
            <div className="home__title">
              <h1 className="home__title-main">Путешествие</h1>
              <p className="home__title-second">на красную планету</p>

              {/* Блок для позиционирования графической линии с кнопкой */}
              <div className="home__img-box">
                <Button>Начать путешествие</Button>
                <img
                  className="home__img-box-image"
                  src={Line}
                  alt="Line"
                />
              </div>
            </div>

            {/* Правая колонка с преимуществами */}
            <Advantages />
            
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Home;