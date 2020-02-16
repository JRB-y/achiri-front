import Vue from "vue"
import Vuex from "vuex"
import drawer from './Global/Drawer'
import util from './Global/Util';

import auth from './auth';

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: { drawer, util, auth }
});
