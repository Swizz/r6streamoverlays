import { h as jsx } from "hyperapp"

import RankingBadge from "../components/ranking-badge"

export default function view(state, _, tracker) {
  const lastSeason = state.ranking && state.ranking.seasons && state.ranking.seasons[Object.keys(state.ranking.seasons).slice(-1)[0]]

  const currentSeason = lastSeason && lastSeason[state.region] ? lastSeason[state.region] : {}

  return (
    <widget oncreate={() => {
      if(tracker) {
        tracker.pushEvent("widget", "rank-scoring")
        // tracker.pushEvent("plateform", plateform)
        // tracker.pushEvent("region", state.region)
        tracker.pushEvent("user", state.user)
        setInterval(() => tracker.track(), 15*60000)
      }
    }}>
      <svg width="100vw" height="50vw">
        <RankingBadge rank={currentSeason.ranking && currentSeason.ranking.rank || 0} key="rating" opacity="0.4"/>
        <text x="50%" y="40%" text-anchor="middle" font-family="Open Sans" font-size="40" font-weight="600" fill="#ffd700">
          W: {currentSeason.wins}
        </text>
        <text x="50%" y="60%" text-anchor="middle" font-family="Open Sans" font-size="40" font-weight="600" fill="#ffd700">
          L: {currentSeason.losses}
        </text>
      </svg>
    </widget>
  )
}