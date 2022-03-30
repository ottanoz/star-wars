import Vue from 'vue';

Vue.filter('heightFormatted', (value) => `${value / 100}m`);
Vue.filter('yearFromData', (value) => value.split('-')[0]);
Vue.filter('episode', (value) => {
  const episodes = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
  };

  return episodes[value];
});
