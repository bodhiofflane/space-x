import {useState} from 'react';

import './advantages.scss';

const Advantages = () => {
  const [score, setScore] = useState(1);
  const [safety, setSafety] = useState(50);
  const [calendar, setCalendar] = useState(2001);
  const [days, setDays] = useState(597);

  const advantages = [
    {first: 'мы', value: score, last: 'на рынке', setFunc: setScore},
    {
      first: 'гарантируем',
      value: `${safety}%`,
      last: 'безопасность',
      setFunc: setSafety,
    },
    {
      first: 'календарик за',
      value: `${calendar}`,
      last: 'в подарок',
      setFunc: setCalendar,
    },
    {first: 'путешествие', value: days, last: 'дней', setFunc: setDays},
  ];

  return (
    <div className="advantages">
      {advantages.map((item, index) => (
        <div
          key={item.value}
          className={`advantages__advantage-item advantages__gradient-${index}`}
          onClick={() => {
            item.setFunc((prev) => prev + 1);
          }}
        >
          <p className="advantages__advantage-text-light">{item.first}</p>
          <h2 className="advantages__advantage-text-bold">
            {item.value}
            {index === 2 ? <span style={{fontSize: '20px'}}>.г</span> : null}
          </h2>
          <p className="advantages__advantage-text-light">{item.last}</p>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
