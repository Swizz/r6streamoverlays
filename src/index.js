
import rank from "./widgets/rank"
import ranksBanner from "./widgets/ranks-banner"
import rankScoring from "./widgets/rank-scoring"

function refresh() {
  rank.init().
    then(ranksBanner.populate).
    then(rankScoring.populate)
}

refresh()
addEventListener("hashchange", refresh)