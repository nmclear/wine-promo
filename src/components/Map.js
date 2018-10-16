import React, { Component } from 'react';
import Dimensions from 'react-dimensions'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import PlaceIcon from '@material-ui/icons/Place';

import 'mapbox-gl/dist/mapbox-gl.css';


const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const iconStyle = {
    fontSize: '30px',
    color: '#00BFFF'
}

const LabelStyle = {
    fontSize: '14px',
}


class GoogleMap extends Component {

  state = {
    viewport: {
        width: this.props.containerWidth,
        height: 400,
        latitude: 44.807497,
        longitude: -85.564399,
        zoom: 9
    }
  };

  onViewportChange = viewport => {
    this.setState({viewport});
};

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        scrollZoom={false}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={(viewport) => this.setState({viewport})} />
        </div>
        <Marker latitude={44.807497} longitude={-85.564399} offsetLeft={-20} offsetTop={-10}>
          <PlaceIcon style={iconStyle} />
        </Marker>
        <Marker latitude={44.807497} longitude={-85.564399} offsetLeft={-20} offsetTop={-30}>
          <div style={LabelStyle}>Mari Vineyards</div>
        </Marker>
      
      </ReactMapGL>
    );
  }
}

export default Dimensions()(GoogleMap);