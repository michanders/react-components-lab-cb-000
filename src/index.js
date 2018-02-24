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

export class OlderCoaster extends React.Component {
  render() {
    return React.createElement("div", {className: 'oldercoaster'}, [])
  }
};


export class InFrontOfYou extends React.Component {};


export class ButcherShop extends React.Component {};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
