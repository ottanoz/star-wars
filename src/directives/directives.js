import Vue from 'vue';

Vue.directive('dark-mode', {
  update(el) {
    if (localStorage.getItem('toggleDarkMode') === 'true') {
      el.classList.add('dark-mode');
    } else {
      el.classList.remove('dark-mode');
    }
  },
});
