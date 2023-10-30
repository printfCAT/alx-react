/* eslint-disable linebreak-style */
import './body.css';
import $ from 'jquery';
import _ from 'lodash';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

const updateCounter = () => {
  let counts = $('#count').html() || 0;
  $('button').on('click', () => {
    counts += 1;
    $('#count').html(`${counts} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();
