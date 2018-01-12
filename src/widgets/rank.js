import { h as jsx } from "hyperapp"

import RankingBadge from "../components/ranking-badge"

export default function view(state, _, tracker) {
  const lastSeason = state.ranking && state.ranking.seasons && state.ranking.seasons[Object.keys(state.ranking.seasons).slice(-1)[0]]

  const currentSeason = lastSeason && lastSeason[state.region] ? lastSeason[state.region] : {}

  const currentRanking = currentSeason.ranking ? currentSeason.ranking : {}

  return (
    <widget oncreate={() => {
      if(tracker) {
        tracker.pushEvent("widget", "rank")
        // tracker.pushEvent("plateform", plateform)
        // tracker.pushEvent("region", state.region)
        tracker.pushEvent("user", state.user)
      }
    }}>
      <svg width="100vw" height="50vw">
        <RankingBadge rank={currentRanking.rank || 0} nb-matches={currentSeason.wins + currentSeason.losses + currentSeason.abandons || 0} rating={currentRanking.rank > 0 && currentRanking.rating} key="rating"/>
      </svg>
    </widget>
  )
}