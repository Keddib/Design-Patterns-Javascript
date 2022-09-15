import Subject from "./subject.js";

const dataOne = document.querySelector('.data-one');

if (dataOne) {
  dataOne.addEventListener('click', (e) => {
    const newState = 'data one';
    console.log('new state', newState);
    Subject.setState(newState);
  })
  console.log('event register for data one button');
}

const dataTwo = document.querySelector('.data-two');

if (dataTwo) {
  dataTwo.addEventListener('click', (e) => {
    const newState = 'data two';
    console.log('new state', newState);
    Subject.setState(newState);
  })
  console.log('event register for data two button');
}

console.log('Subject listening');
