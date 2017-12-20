import { h, app } from "hyperapp"
import actions from "../actions"

import Ranking from "../components/ranking"

export default container => app({
  state: {},
  actions,
  view(state) {
    const lastSeason = state.seasons && state.seasons[Object.keys(state.seasons).slice(-1)[0]]

    const [_, region, __] = location.hash.slice(1).split("/")

    const currentSeason = lastSeason && lastSeason[region] ? lastSeason[region] : {}

    const currentRanking = currentSeason.ranking ? currentSeason.ranking : {}

    return (
      <svg width="100vw" height="50vw">
        <Ranking rank={currentRanking.rank || 0} nb-matches={currentSeason.wins + currentSeason.losses + currentSeason.abandons || 0} rating={currentRanking.rank > 0 && currentRanking.rating} key="rating"/>
      </svg>
    )
  }
},
  container
)