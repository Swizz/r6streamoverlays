import { h as jsx } from "hyperapp"

import analytics from "ostrio-analytics"

import RankingBadge from "../components/ranking-badge"

const tracker = new analytics("SCDnq29vZYfHwbc6L")

export default function view(state) {
  const lastSeason = state.ranking && state.ranking.seasons && state.ranking.seasons[Object.keys(state.ranking.seasons).slice(-1)[0]]

  const currentRanking = lastSeason && lastSeason[state.region] ? lastSeason[state.region].ranking : {}

  return (
    <widget oncreate={() => tracker.pushEvent("widget", "ranks-banner") }>
      <svg width="100vw" height="50vw">
        <RankingBadge rank={currentRanking.rank - 1} rating={currentRanking.prev_rating} transform="translate(50) scale(0.8) translate(-220)" opacity="0.7" key="prev_rating"/>
        <RankingBadge rank={currentRanking.rank || 0} rating={currentRanking.rating} rating-default="0" key="rating"/>
        <RankingBadge rank={(currentRanking.rank || -2) + 1} rating={currentRanking.next_rating} transform="translate(50) scale(0.8) translate(220)" opacity="0.7" key="next_rating"/>
      </svg>
    </widget>
  )
}