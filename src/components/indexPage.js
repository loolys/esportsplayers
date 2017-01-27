"use strict";
import React from 'react';
import PlayerPreview from './playerPreview';
import players from '../data/players';

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="players-selector">
					{players.map(playersData =>
						<PlayerPreview key={PlayerPreview.id} {...playersData} />)
					}
				</div>
			</div>
		);
	}
}
