import { h, app } from "hyperapp"
import actions from "../actions"

import Ranking from "../components/ranking"

export default app({
  state: {},
  actions,
  view(state) {
    const lastSeason = state.seasons && state.seasons[Object.keys(state.seasons).slice(-1)[0]]

    const currentSeason = lastSeason && lastSeason.emea ? lastSeason.emea : {}

    const currentRanking = currentSeason.ranking ? currentSeason.ranking : {}

    return (
      <svg width="500" height="250">
        <Ranking rank={currentRanking.rank || 0} nb-matches={currentSeason.wins + currentSeason.losses + currentSeason.abandons || 0} rating={currentRanking.rank > 0 && currentRanking.rating} key="rating"/>
      </svg>
    )
  }
},
  document.querySelector('#rank')
)