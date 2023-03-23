// Tutorial : https://storiesfromtheherd.com/basics-of-vue-3-js-713760d46bb1

import mutations from './mutations';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            authenticated: false,
            username: ""
        }
    },
    mutations,
    getters
}