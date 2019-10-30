// This is the page that will call the API calls for the authentication
const remoteURL = 'http://localhost:8088';

export default {
	getAllTrips(id) {
		return fetch(`${remoteURL}/trips?userId=${id}`).then(result =>
			result.json()
		);
	},
	getTrip(id) {
		return fetch(
			`${remoteURL}/locations?tripId=${id}&_expand=locationType`
		).then(result => result.json());
	},
	getTripDetails(id) {
		return fetch(`${remoteURL}/trips/${id}`).then(result => result.json());
	},

	getTripByType(id, typeId) {
		return fetch(
			`${remoteURL}/locations?tripId=${id}&locationTypeId=${typeId}&_expand=locationType`
		).then(result => result.json());
	},
	deleteTrip(id) {
		return fetch(`${remoteURL}/trips/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
	},
	deleteLocation(id) {
		return fetch(`${remoteURL}/locations/${id}`, {
			method: 'DELETE'
		}).then(result => result.json());
	},
	postTrip(newTrip) {
		return fetch(`${remoteURL}/trips`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newTrip)
		}).then(data => data.json());
	},
	updateTrip(editedTrip) {
		return fetch(`${remoteURL}/trips/${editedTrip.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedTrip)
		}).then(data => data.json());
	},
	postLocation(newLocation) {
		return fetch(`${remoteURL}/trips`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newLocation)
		}).then(data => data.json());
	},
	updateLocation(editedLocation) {
		return fetch(`${remoteURL}/trips/${editedLocation.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(editedLocation)
		}).then(data => data.json());
	}
};
