import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
 
class MyMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.80,
      lng: -85.56
    },
    zoom: 12
  };

  render() {
    return (
      <div style={{ height: '600px', width: '100%' }}>
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


// const MyMap = withScriptjs(withGoogleMap((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
// ))

 
export default MyMap;