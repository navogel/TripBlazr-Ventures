import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import YouTube from 'react-youtube';
import LocationNotes from './LocationNotes';

class LocationDetail extends Component {
	state = {
		location: {},
		loaded: false
	};

	switchToEdit = location => {
		this.props.toggleDrawer(location);
		this.props.closeLocDrawer();
	};

	componentDidMount() {
		this.setState({
			location: this.props.location,
			loaded: true
		});
	}

	render() {
		// let siteLink = 'https://';
		console.log('deets props', this.props);

		return (
			<>
				{this.state.loaded && (
					<div className='locDetailsWrapper'>
						<div className='absoluteCloseFab'>
							<Fab
								color='primary'
								size='small'
								onClick={e => this.props.closeLocDrawer()}
							>
								<CloseIcon />
							</Fab>
						</div>
						<div className='locCard'>
							<DialogTitle className='modalTitle'>
								{this.state.location.name} {' - '}
								{this.state.location.locationType.locationType}
							</DialogTitle>
							{this.state.location.address && (
								<h3>Address: {this.state.location.address}</h3>
							)}
							{this.state.location.summary && (
								<>
									<h3>Description:</h3> <p>{this.state.location.summary}</p>
								</>
							)}
							{this.state.location.url && (
								<h3 className='urlLink'>
									<a href={this.state.location.url} target='_blank'>
										{this.state.location.url}
									</a>
								</h3>
							)}

							{this.state.location.price && (
								<h3>Est Price: ${this.state.location.price}</h3>
							)}
							<Button
								size='small'
								color='primary'
								onClick={() => this.switchToEdit(this.state.location)}
							>
								edit details
							</Button>
						</div>
						{/* <Fab
					variant='extended'
					size='small'
					color='primary'
					onClick={() => this.switchToEdit(this.props.location)}
				>
					<EditIcon />
					Edit
				</Fab> */}

						{/* `<div className='locVideo'>
							<div className='video-responsive'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/Z8cjC2pViSo'
									frameborder='0'
									allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</div>
							<div className='video-responsive'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/Z8cjC2pViSo'
									frameborder='0'
									allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</div>
							<div className='video-responsive'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/Z8cjC2pViSo'
									frameborder='0'
									allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
									allowfullscreen
								></iframe>
							</div>
						</div>` */}
						<LocationNotes
							activeUser={this.props.activeUser}
							locationId={this.state.location.id}
						/>
					</div>
				)}
			</>
		);
	}
}

export default LocationDetail;