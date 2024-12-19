export const state = () => ({
    url: 'https://api.mwek.com',
    underlineHeader: '',
    bottomScroll: false,
    // url: 'http://mwek.onqor.group:1338'
    // url: 'http://localhost:1337'

})

export const mutations = {
    underlineHeader(state, val) {
        state.underlineHeader = val
    },
    bottomScroll(state, val) {
        state.bottomScroll = val
    },
}
