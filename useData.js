import { useState, useEffect } from 'react';
import { csv } from 'd3';

const csvUrl =
  'https://gist.githubusercontent.com/mnalk/d680a8dd53bbdcdd3b3a696c54d8a430/raw/3d542004b4f7f187d61acdf1f743d239dadb86d5/time.csv';

const row = d => {
  d.coords = d['Location_Coordinates'].split(',').map(d => +d).reverse();
  d['suicides_no'] = + d['suicides_no'];
  d['year'] = new Date(d['year']);
  return d;
};

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl, row).then(setData);
  }, []);

  return data;
};
