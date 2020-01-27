import * as React from 'react';
import { ScatterplotLayer } from '@deck.gl/layers';
import { Deck } from '@deck.gl/core';

const scatterplotLayer = new ScatterplotLayer({
  id: 'bart-stations',
  data:
    'https://github.com/uber-common/deck.gl-data/blob/master/website/bart-stations.json',
  getRadius: (d: any) => Math.sqrt(d.entries) / 100,
  getPosition: (d: any) => d.coordinates,
  getFillColor: [255, 228, 0],
});

const deck = new Deck({
  width: '100vw',
  height: '100vh',
  initialViewState: {
    longitude: -122.4,
    latitude: 37.78,
    zoom: 8,
  },
  controller: true,
  layers: [scatterplotLayer],
});

// Delete me
export const Thing = () => {
  // "Using" `deck` to prevent TS complaints re: unused variables
  console.log(deck);

  return <div>the snozzberries taste like snozzberries</div>;
};
