import React from 'react';
import { cities } from '../../mockData/cities';

 export const cityRenderer = (city, id) =>
{
    const foundCity = cities.find((item) => item.id === city);
    return <span  key={id}>{foundCity.name}</span>
}

