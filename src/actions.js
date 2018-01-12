import { location as router } from "@hyperapp/router"

import analytics from "ostrio-analytics"

const tracker = new analytics("SCDnq29vZYfHwbc6L")

export default {
  location: router.actions,

  init() {
    if (location.hash === "") {
      const candidates = [
        ["sha77e.-penta", "emea"],
        ["canadian.eg", "ncsa"],
        ["sc.k", "emea"],
        ["panix.vitality", "emea"],
        ["pengu-penta", "emea"],
        ["enemy.vitality", "emea"]
      ]
      const [user, region] = candidates[Math.floor(Math.random()*candidates.length)]
      return (location.hash = `#uplay/${region}/${user}`)
    }

    const [plateform, region, user] = location.hash.slice(1).split("/")

    tracker.pushEvent("plateform", plateform)
    tracker.pushEvent("region", region)
    tracker.pushEvent("user", user)

    return (state, actions) => {
      actions.resetRanking()
      actions.populate({ plateform, region, user })
      actions.ranking.init({ plateform, region, user })
    }
  },

  populate(newState) {
    return newState
  },

  refresh() {
    return (state, actions) => {
      actions.ranking.init(state)
    }
  },

  changeUser(user) {
    return state =>
      (location.hash = `#${state.plateform}/${state.region}/${user}`)
  },

  changeRegion(region) {
    return state =>
      (location.hash = `#${state.plateform}/${region}/${state.user}`)
  },

  changePlateform(plateform) {
    return state =>
      (location.hash = `#${plateform}/${state.region}/${state.user}`)
  },

  resetRanking() {
    return { ranking: {} }
  },

  ranking: {
    init({ plateform, user }) {
      if(!plateform || !user) return false
      return (state, actions) =>
        fetch(`https://api.r6stats.com/api/v1/players/${user}/seasons?platform=${plateform}`).
          then(res => res.json()).
          then(actions.populate)
    },

    populate(newState) {
      return newState
    }
  }
}