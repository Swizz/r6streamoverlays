import { h } from "hyperapp"

import rank from "./widgets/rank"
import ranksBanner from "./widgets/ranks-banner"
import rankScoring from "./widgets/rank-scoring"

const widgets = {}

export default function (state, actions) {
  function create(name, Widget) {
    return element => {
      widgets[name] = Widget(element)
      update(name)(element)
    }
  }

  function update(name) {
    return element => {
      name in widgets && widgets[name].populate(state.ranking)
    }
  }

  function copy(input) {
    return event => {
      document.getElementById(input).select()
      document.execCommand("Copy")
    }
  }

  return (
    <app>
      <header>
        <div class="title">
          <h1>Streamers <i>♥️</i> R6</h1>
          <h2>We <i>♥️</i> Streamers</h2>
        </div>
        <div class="banner">
          <widget id="header-ranks-banner" oncreate={create("header-ranks-banner", ranksBanner)} onupdate={update("header-ranks-banner")}/>
        </div>
        <div class="input">
          <input type="text" value={state.user}/>
          <select>
            <option selected={state.plateform === "uplay"}>uplay</option>
            <option selected={state.plateform === "ps4"}>ps4</option>
            <option selected={state.plateform === "xbox"}>xbox</option>
          </select>
          <select>
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
            <widget id="ranks-banner" oncreate={create("ranks-banner", ranksBanner)} onupdate={update("ranks-banner")}/>
            <input id="ranks-banner-url" type="text" value={`${location.origin}/ranks-banner#${state.plateform}/${state.region}/${state.user}`}/>
            <button onclick={copy("ranks-banner-url")}>copy</button>
          </section>
          <section>
            <h3># Rank</h3>
            <p>Shows to all your viewers, your hilighted current Rainbow Six Siege rank and the MMR scoring.</p>
            <widget id="rank" oncreate={create("rank", rank)} onupdate={update("rank")}/>
            <input id="rank-url" type="text" value={`${location.origin}/rank#${state.plateform}/${state.region}/${state.user}`}/>
            <button onclick={copy("rank-url")}>copy</button>
          </section>
          <section>
            <h3># Ranks scoring</h3>
            <p>Shows to all your viewers, your current Rainbow Six Siege rank with statistics about your wins and losses.</p>
            <widget id="rank-scoring" oncreate={create("rank-scoring", rankScoring)} onupdate={update("rank-scoring")}/>
            <input id="rank-scoring-url" type="text" value={`${location.origin}/rank-scoring#${state.plateform}/${state.region}/${state.user}`}/>
            <button onclick={copy("rank-scoring-url")}>copy</button>
          </section>
        </div>
      </main>
      <footer>

      </footer>
    </app>
  )
}