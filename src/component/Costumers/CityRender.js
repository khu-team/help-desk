
import React from 'react';
import { cities } from '../../mockData/cities';

  const CityRender = (city, id) => {
    const user = cities.find((item) => item.id === city);
    return <span  key={id}>{user.name}</span>
}
export default CityRender;
