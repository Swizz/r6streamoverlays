import { h as jsx } from "hyperapp"

import sprite from "../../statics/sprite.svg"

export default function RankingBadge(props) {
  return (
    <g {...props}>
      <use href={`${sprite}#${props.rank}-usage`} transform="translate(50) scale(0.8)"/>
      {props.rank == 0 && props["nb-matches"] !== undefined ?
        <text x="50%" y="90%" text-anchor="middle" font-family="Noto Sans" font-size="30" fill="#ffd700">
          {props["nb-matches"] || 0} / 10
        </text>
          :
        <text x="50%" y="90%" text-anchor="middle" font-family="Noto Sans" font-size="35" fill="#ffffff">
          {Math.round(props.rating || 0) || props["rating-default"]}
        </text>
      }
    </g>
  )
}