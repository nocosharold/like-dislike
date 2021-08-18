import React, { Component } from "react";
import { connect } from "react-redux";
import "./Post.css";
import { countLike, countDislike } from "../actions/index";
import "../reducers/index";

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes_value: 0,
			dislikes_value: 0,
		};
	}

	render() {
		return (
			<div>
				<div className="container">
					<img src="https://ik.imagekit.io/1cqtok8fv7n/sportsplayer/basketball/james_harden_ZWIo0Krw4Do.jpg?updatedAt=1619495997884" alt="The Beard"/>
					<p>How's mah beard?</p>
					<button onClick={() => this.props.dispatch(countLike())}>
					{this.props.like_value}
					<i className="thumbs up outline icon" />
					</button>
					<button onClick={() => this.props.dispatch(countDislike())}>
						{this.props.dislike_value}
						<i className="thumbs down outline icon" />
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		like_value: state.likes,
		dislike_value: state.dislikes,
	};
};

export default connect(mapStateToProps)(Post);
