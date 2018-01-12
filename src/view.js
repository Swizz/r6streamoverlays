import { h as jsx } from "hyperapp"

import Rank from "./widgets/rank"
import RanksBanner from "./widgets/ranks-banner"
import RankScoring from "./widgets/rank-scoring"

export default function view(state, actions) {
  function copy(input) {
    return event => {
      document.getElementById(input).select()
      document.execCommand("Copy")
    }
  }

  return (
    <index>
      <header>
        <div class="title">
          <h1>Streamers <i>♥️</i> R6</h1>
          <h2>We <i>♥️</i> Streamers</h2>
        </div>
        <div class="banner">
          <RanksBanner {...state}/>
        </div>
        <div class="input">
          <input
            type="text" value={state.user}
            onchange={evt => actions.changeUser(evt.target.value)}
            onkeypress={evt => evt.keyCode === 13 ? (actions.changeUser(evt.target.value), evt.target.blur()) : true}
          />
          <select onchange={evt => actions.changePlateform(evt.target.value)}>
            <option selected={state.plateform === "uplay"}>uplay</option>
            <option selected={state.plateform === "ps4"}>ps4</option>
            <option selected={state.plateform === "xbox"}>xbox</option>
          </select>
          <select onchange={evt => actions.changeRegion(evt.target.value)}>
            <option selected={state.region === "emea"}>emea</option>
            <option selected={state.region === "ncsa"}>ncsa</option>
            <option selected={state.region === "apac"}>apac</option>
          </select>
        </div>
      </header>
      <main>
        <div class="features">
          <section>
            <h3># Ranks banner</h3>
            <p>Shows to all your viewers, your hilighted current Rainbow Six Siege rank and the MMR scoring, <br/>
              with the neirboroud ranks to know the previous rank and the upcoming one with MMR scoring too.</p>
            <RanksBanner {...state}/>
            <input id="ranks-banner-url" type="text" value={`${location.origin}${location.pathname}ranks-banner#${state.plateform}/${state.region}/${state.user}`}/>
            <button onclick={copy("ranks-banner-url")}>copy</button>
          </section>
          <section>
            <h3># Rank</h3>
            <p>Shows to all your viewers, your hilighted current Rainbow Six Siege rank and the MMR scoring.</p>
            <Rank {...state}/>
            <input id="rank-url" type="text" value={`${location.origin}${location.pathname}rank#${state.plateform}/${state.region}/${state.user}`}/>
            <button onclick={copy("rank-url")}>copy</button>
          </section>
          <section>
            <h3># Ranks scoring</h3>
            <p>Shows to all your viewers, your current Rainbow Six Siege rank with statistics about your wins and losses.</p>
            <RankScoring {...state}/>
            <input id="rank-scoring-url" type="text" value={`${location.origin}${location.pathname}rank-scoring#${state.plateform}/${state.region}/${state.user}`}/>
            <button onclick={copy("rank-scoring-url")}>copy</button>
          </section>
        </div>
      </main>
      <footer>
        🛠️ with ❤️ by <a href="https://github.com/Swizz">Swizz</a>
        <p>
        All data is gathered from <a href="https://game-rainbow6.ubi.com/">Ubisoft</a>, <br/>
        thanks to the <a href="https://dev.r6stats.com">r6stats</a> API <br/>
        </p>
        This website do not hold any data
      </footer>
    </index>
  )
}