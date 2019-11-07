import { Route, Redirect, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import Trip from './trip/Trip';
import TripList from './trip/TripList';
import TripManager from '../modules/TripManager';

class ApplicationViews extends Component {
	state = {
		loaded: false,
		tripData: {}
	};

	//  LATER: put this login into another component in order to match trip userID with active user
	//
	// componentDidMount() {
	// 	TripManager.getTripDetails(parseInt(this.props.match.params.tripId)).then(
	// 		trip => {
	// 			this.setState({
	// 				loaded: true,
	// 				tripData: trip
	// 			});
	// 		}
	// 	);
	// 	console.log('app views did mount', this.state.tripData);
	// }

	render() {
		//console.log('app view render props', this.props);
		return (
			<React.Fragment>
				{/* <Route
					exact
					path='/mytriplist'
					render={props => {
						return (
							<ArticlesList
								{...props}
								// getUser={this.props.getUser}
								activeUser={this.props.activeUser}
							/>
						);
					}}
				/> */}

				<Route
					exact
					path='/mytrips'
					render={props => {
						if (this.props.user) {
							return (
								<TripList
									{...props}
									activeUser={this.props.activeUser}
									clearUser={this.props.clearUser}
									email={this.props.email}
								/>
							);
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>

				<Route
					exact
					path='/mytrips/:tripId(\d+)'
					render={props => {
						if (this.props.user) {
							return (
								<Trip
									tripId={parseInt(props.match.params.tripId)}
									activeUser={this.props.activeUser}
									{...props}
								/>
							);
						} else {
							return <Redirect to='/login' />;
						}
					}}
				/>

				{/* {this.state.loaded && (
					<Route
						exact
						path='/mytrips/:tripId(\d+)'
						render={props => {
							if (this.state.tripData.id) {
								console.log('its a real trip!');
								if (this.props.user) {
									console.log('got a user');
									if (this.props.activeUser === this.state.tripData.userId) {
										console.log('active user matches trip');
										return (
											<Trip
												tripId={parseInt(props.match.params.tripId)}
												activeUser={this.props.activeUser}
												{...props}
											/>
										);
									} else {
										return <Redirect to='/login' />;
									}
								} else {
									return <Redirect to='/login' />;
								}
							} else {
								console.log('not a real trip');
								return <Redirect to='/login' />;
							}
						}}
					/>
				)} */}
			</React.Fragment>
		);
	}
}

{
	/* <Route
					exact
					path='/mytrips/:tripId(\d+)'
					render={props => {
						TripManager.getTripDetails(
							parseInt(props.match.params.tripId)
						).then(trip => {
							console.log('fetch details', trip);
							if (trip.id) {
								console.log('its a real trip!');
								if (this.props.user) {
									console.log('got a user');
									if (this.props.activeUser === trip.userId) {
										console.log('active user matches trip');
										return (
											<Trip
												tripId={parseInt(props.match.params.tripId)}
												activeUser={this.props.activeUser}
												{...props}
											/>
										);
									} else {
										return <Redirect to='/login' />;
									}
								} else {
									return <Redirect to='/login' />;
								}
							} else {
								return <Redirect to='/login' />;
							}
						});
					}}
				/> 
				
				//put this logic into a container component


				*/
}
export default withRouter(ApplicationViews);
