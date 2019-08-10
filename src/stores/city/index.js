const city_module = {
  namespaced: true,
  state: {
    nm: window.localStorage.getItem('nowNm') || '北京',
    id: window.localStorage.getItem('nowId') || 1
  },
  mutations: {
    CITY_INFO(state, payload){
      state.nm = payload.nm
      state.id = payload.id
    }
  },
  actions: { 

   }
}

export default city_module