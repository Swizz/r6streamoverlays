import { h as jsx } from "hyperapp"

import analytics from "ostrio-analytics"

import RankingBadge from "../components/ranking-badge"

const tracker = new analytics("SCDnq29vZYfHwbc6L")

export default function view(state) {
  const lastSeason = state.ranking && state.ranking.seasons && state.ranking.seasons[Object.keys(state.ranking.seasons).slice(-1)[0]]

  const currentSeason = lastSeason && lastSeason[state.region] ? lastSeason[state.region] : {}

  const currentRanking = currentSeason.ranking ? currentSeason.ranking : {}

  return (
    <widget oncreate={() => tracker.pushEvent("widget", "rank") }>
      <svg width="100vw" height="50vw">
        <RankingBadge rank={currentRanking.rank || 0} nb-matches={currentSeason.wins + currentSeason.losses + currentSeason.abandons || 0} rating={currentRanking.rank > 0 && currentRanking.rating} key="rating"/>
      </svg>
    </widget>
  )
}