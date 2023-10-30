/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const updateCounter = () => {
  let counts = $('#count').html() || 0;
  $('button').on('click', () => {
    counts += 1;
    $('#count').html(`${counts} clicks on the button`);
  });
};

_.debounce(updateCounter, 500);
updateCounter();
