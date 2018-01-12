import { h as jsx } from "hyperapp"

import analytics from "ostrio-analytics"

import RankingBadge from "../components/ranking-badge"

const tracker = new analytics("SCDnq29vZYfHwbc6L")

export default function view(state) {
  const lastSeason = state.ranking && state.ranking.seasons && state.ranking.seasons[Object.keys(state.ranking.seasons).slice(-1)[0]]

  const currentSeason = lastSeason && lastSeason[state.region] ? lastSeason[state.region] : {}

  return (
    <widget oncreate={() => tracker.pushEvent("widget", "rank-scoring") }>
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