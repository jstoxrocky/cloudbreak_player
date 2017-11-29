import merge from 'lodash/merge';
import { 
	STREAM_PENDING, 
	STREAM_PENDING_REJECTED,
	STREAM_FULFILLED, 
	STREAM_REJECTED,
	UPDATE_PLAYER,
	UPDATE_PLAYER_PENDING, 
	UPDATE_PLAYER_FULFILLED } from '../actions/actions';
import { LOADING } from '../utils/reports'

const initialState = {
	currentTrack: null,
	artist: null,
	artistIsVerified: null,
	title: null,
	titleIsVerified: null,
	balance: 0,
	msg: null,
}

function streamReducer(state=initialState, action) {
	Object.freeze(state);
	switch (action.type) { 
		case STREAM_PENDING:
			var nextState = merge({}, state);
			nextState.msg = LOADING
			return nextState
		case STREAM_FULFILLED:
			var nextState = merge({}, state);
			nextState.currentTrack = action.payload.currentTrack;
			nextState.artist = action.payload.artist;
			nextState.artistIsVerified = action.payload.artistIsVerified;
			nextState.title = action.payload.title;
			nextState.titleIsVerified = action.payload.titleIsVerified;
			nextState.balance = action.payload.balance;
			nextState.msg = action.payload.msg;
			return nextState
		case UPDATE_PLAYER_PENDING:
			var nextState = merge({}, state);
			nextState.msg = LOADING
			return nextState
		case UPDATE_PLAYER_FULFILLED:
			var nextState = merge({}, state);
			nextState.currentTrack = action.payload.currentTrack;
			nextState.artist = action.payload.artist;
			nextState.artistIsVerified = action.payload.artistIsVerified;
			nextState.title = action.payload.title;
			nextState.titleIsVerified = action.payload.titleIsVerified;
			nextState.balance = action.payload.balance;
			nextState.msg = action.payload.msg;
			return nextState
		default:
			return state;
	}
}

export default streamReducer;