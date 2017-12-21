import { h as jsx, app } from "hyperapp"
import { Switch, Route, location as router } from "@hyperapp/router"

import actions from "./actions"
import view from "./view"

import Rank from "./widgets/rank"
import RanksBanner from "./widgets/ranks-banner"
import RankScoring from "./widgets/rank-scoring"

const application = app({
  location: router.state
}, actions, (state, actions) => (
  <Switch>
    <Route path="/" render={() => view(state, actions)}/>
    <Route path="/rank" render={() => Rank(state, actions)}/>
    <Route path="/ranks-banner" render={() => RanksBanner(state, actions)}/>
    <Route path="/rank-scoring" render={() => RankScoring(state, actions)}/>
  </Switch>
), document.body)

router.subscribe(application.location)

application.init()
addEventListener("hashchange", application.init)

setInterval(function() {
  if(location.pathname !== "/") {
    application.refresh()
  }
}, 15000)

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