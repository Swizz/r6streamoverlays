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

    return (
      <svg width="100vw" height="50vw">
        <Ranking rank={currentSeason.ranking && currentSeason.ranking.rank || 0} key="rating" opacity="0.5"/>
        <text x="50%" y="40%" text-anchor="middle" font-family="Open Sans" font-size="40" fill="#ffd700">
          W: {currentSeason.wins}
        </text>
        <text x="50%" y="60%" text-anchor="middle" font-family="Open Sans" font-size="40" fill="#ffd700">
          L: {currentSeason.losses}
        </text>
      </svg>
    )
  }
},
  container
)