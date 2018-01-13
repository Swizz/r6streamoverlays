import { h as jsx, app } from "hyperapp"
import { Switch, Route, location as router } from "@hyperapp/router"

import analytics from "ostrio-analytics"

import actions from "./actions"
import view from "./view"

import Rank from "./widgets/rank"
import RanksBanner from "./widgets/ranks-banner"
import RankScoring from "./widgets/rank-scoring"

const tracker = new analytics("FmRHMrj5SggTeKNvi", false)

const application = app({
  location: router.state
}, actions, (state, actions) => (
  <Switch>
    <Route path="/r6streamoverlays" render={() => view(state, actions, tracker)}/>
    <Route path="/r6streamoverlays/rank" render={() => Rank(state, actions, tracker)}/>
    <Route path="/r6streamoverlays/ranks-banner" render={() => RanksBanner(state, actions, tracker)}/>
    <Route path="/r6streamoverlays/rank-scoring" render={() => RankScoring(state, actions, tracker)}/>
  </Switch>
), document.body)

router.subscribe(application.location)

tracker.track()

application.init()
addEventListener("hashchange", () => application.init())

setInterval(function() {
  if(location.pathname !== "/") {
    application.refresh()
  }
}, 30000)

;(function(last) {
  setInterval(function () {
    if (!document.hidden) {
      document.title = last ? "Streamers ❤️ R6" : "We ❤️ Streamers"
      last = !last
    } else {
      document.title = "Streamers ❤️ R6"
    }
  }, 1500)
})(false)