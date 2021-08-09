// import React, { useState, useEffect } from 'react';

// const Age = () => {
//   const [age, setAge] = useState();

//   const tick = () => {
//     const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
//     const birthTime = new Date('1990-02-05T09:24:00');
//     setAge(((Date.now() - birthTime) / divisor).toFixed(11));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 25);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return <>{age}</>;
// };

const data = [
  // {
  //   key: 'age',
  //   label: 'Current age',
  //   value: <Age />,
  // },
  {
    key: 'location',
    label: 'Current city',
    value: 'San Jose, CA, USA',
    link:
      'https://www.google.com/maps/place/San+Jose,+CA',
  },
  {
    key: 'hometown',
    label: 'Hometown',
    value: 'Huzhou, Zhejiang, China',
    link:
      'https://www.google.com/maps/place/Huzhou,+Zhejiang,+China',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'Chinese, English',
  },
  {
    key: 'real languages',
    label: 'Real Languages',
    value: 'Python, Java, JavaScript, SQL',
  },
  {
    key: 'national parks',
    label: 'National Parks Visited',
    value: 8,
    link:
      'https://www.google.com/maps/d/u/0/edit?mid=178pZruVTkQPKg3Pbo7tkZnXrnS1YiHkt&ll',
  },
];

export default data;
