"use strict";
import React from 'react';
import {Link} from 'react-router';
import NotFoundPage from './notFoundPage';
import PlayersMenu from './playersMenu';
import Medal from './medal';
import Flag from './flag';
import players from '../data/players';

export default class PlayerPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const player = players.filter((player) => player.id === id)[0];
    console.log(player);
    if (!player) {
      return <NotFoundPage />;
    }
    const headerStyle = { backgroundImage: `url(/img/${player.cover})` };
    return (
      <div className="player-full">
        <PlayersMenu />
        <div className="player">
          <header style={headerStyle} />
          <div className="picture-container">
            <img src={`/img/${player.image}`} />
            <h2 className="name">{player.name}</h2>
          </div>
          <section className="description">
            Player from <strong><Flag code={player.country} showName="true" /></strong>
          </section>
          <section className="medals">
            <p>Winner of <strong>{player.achievments.length}</strong> tournaments:</p>
            <ul>{
              player.achievments.map((achievments, i) => <Medal key={i} {...achievments}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">Back to Index</Link>
        </div>
      </div>
    );
  }
}
