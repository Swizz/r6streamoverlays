import { h, app } from "hyperapp"

import rankingActions from "./actions"
import view from "./view"

const actions = {
  ranking: rankingActions,

  init() {
    if (location.hash === "") {
      return (location.hash = "#uplay/emea/sha77e.-penta")
    }

    const [plateform, region, user] = location.hash.slice(1).split("/")

    return state => actions => {
      actions.ranking.init()
      actions.populate({ plateform, region, user })
    }
  },

  populate(newState) {
    return newState
  }
}

const index = app({ state: {}, actions, view })

index.init()
addEventListener("hashchange", index.init)

let last = false
setInterval(function () {
  if (!document.hidden) {
    document.title = last ? "Streamers ❤️ R6" : "We ❤️ Streamers"
    last = !last
  } else {
    document.title = "Streamers ❤️ R6"
  }
}, 1500)