import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    media: [],
    searchResults: []
  },

  getters: {

  },

  mutations: {
    setMedia: (state, payload) => {
      console.log('Payload', payload);
      state.media = payload;
    },

    setResults: (state, payload) => {
      console.log('setting results', payload);
      state.searchResults = payload;
    }
  },

  actions: {
    fetchMedia: (context, payload) => {
      axios.get(payload)
        .then(res => {
          context.commit('setMedia', res.data);
        })
        .catch(err => {
          console.error('An Error Occurred...');
        });
    },

    filter: (context, payload) => {
      function compare(a,b) {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      }
      const results = context.state.searchResults;

      if (results.length === 0) {
        return;
      }

      switch (payload) {
        case 'asc':
          results.sort(compare);
          break;

        case 'desc':
          results.sort(compare);
          results.reverse();
          break;
      }

      context.commit('setResults', results);

    },

    search: (context, payload) => {
      if (payload.length === 0) {
        context.commit('setResults', []);
        return;
      }
      // I am only writing a loop like this for the sake of time. I would never do this otherwise.
      let matches = [];
      context.state.media.forEach(show => {
        show.seasons.forEach(season => {
          const items = season.show_episodes.filter(episode => {
            const title = episode.title.toLowerCase();
            return title.indexOf(payload) > -1;
          });

          matches = matches.concat(items);
        });
      });

      context.commit('setResults', matches);
    }
  }

});
