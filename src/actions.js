export default {
  init() {
    const [plateform, _, user] = location.hash.slice(1).split("/")

    if(!user || !plateform) return false
    return state => actions =>
      fetch(`https://api.r6stats.com/api/v1/players/${user}/seasons?platform=${plateform}`).
        then(res => res.json()).
        then(actions.populate)
  },
  populate(newState) {
    return newState
  }
}