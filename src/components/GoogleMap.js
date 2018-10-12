import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.80,
      lng: -85.56
    },
    zoom: 12
  };

  render() {
    return (
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <MapMarker
            lat={44.807497}
            lng={-85.564399}
            text={'Mari Vineyards'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;