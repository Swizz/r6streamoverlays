import { h, app } from "hyperapp"
import actions from "../actions"

import Ranking from "../components/ranking"

export default container => app({
  state: {},
  actions,
  view(state) {
    const lastSeason = state.seasons && state.seasons[Object.keys(state.seasons).slice(-1)[0]]

    const [_, region, __] = location.hash.slice(1).split("/")

    const currentRanking = lastSeason && lastSeason[region] ? lastSeason[region].ranking : {}

    return (
      <svg width="100vw" height="50vw">
        <Ranking rank={currentRanking.rank - 1} rating={currentRanking.prev_rating} transform="translate(50) scale(0.8) translate(-220)" opacity="0.7" key="prev_rating"/>
        <Ranking rank={currentRanking.rank || 0} rating={currentRanking.rating} rating-default="0" key="rating"/>
        <Ranking rank={(currentRanking.rank || -2) + 1} rating={currentRanking.next_rating} transform="translate(50) scale(0.8) translate(220)" opacity="0.7" key="next_rating"/>
      </svg>
    )
  }
},
  container
)