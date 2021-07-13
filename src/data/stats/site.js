import React, { useState, useEffect } from 'react';
// import dayjs from 'dayjs';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    // const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const divisor = 1000 * 60 * 60 * 24;
    const birthTime = new Date('2021-07-10T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/mldangelo/personal-site
 */
const data = [
  // {
  //   label: 'Last updated at',
  //   key: 'pushed_at',
  //   link: 'https://github.com/mldangelo/personal-site/commits',
  //   format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  // },
  {
    key: 'live days',
    label: 'Live days',
    value: <Age />,
  },
  {
    label: 'Last update',
    key: 'last updated at',
    value: '2021-07-11',
  },
  {
    label: 'Credit to',
    key: 'credit to',
    value: "Michael D'Angelo",
    link: 'https://github.com/mldangelo/personal-site',
  },
  // {
  //   // TODO update this with a pre-commit hook
  //   /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
  //   xargs -I file cat file | wc -l */
  //   label: 'Lines of Javascript powering this website',
  //   value: '2115',
  //   // link: 'https://github.com/mldangelo/personal-site/graphs/contributors',
  // },
];

export default data;
