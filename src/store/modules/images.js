import api from '../../api/imgur'
import { router } from '../../main'

const state = {
  images: []
}

const getters = {
  allImages: state => state.images
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

const actions = {
  async fetchImages ({rootState, commit}) {
    // const token = rootState.auth.token
    const {token} = rootState.auth
    const response = await api.fetchImages(token)
    commit('setImages', response.data.data)
  },
  async uploadImages ({rootState, commit}, images) {
    // get the access token
    const {token} = rootState.auth

    // call our api module to do the upload
    await api.upload(images, token)

    // redirect user to ImageList component
    router.push('/')
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
