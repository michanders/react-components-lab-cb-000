import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const gran = React.createElement("p", {}, "Two grannies having the time of their life!");
const p = React.createElement("p", {}, "Passengers:");
const ag = React.createElement('li', {}, "Agnes");
const mu = React.createElement('li', {}, "Muriel");
const list = React.createElement("ul", {}, [ag, mu]);

export class OlderCoaster extends React.Component {
  render() {
    return React.createElement("div", {className: 'oldercoaster'}, [gran, p, list]);
  }
};

export class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('p', {}, 'You shouldn'+ "'" + 't look too far.'),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
    ]);
  }
};


export class ButcherShop extends React.Component {};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
