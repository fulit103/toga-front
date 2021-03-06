import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Link } from 'react-router-dom';
import backImg from '../../assets/static/items/back.png';
import './AddressPage.scss';
import debounce from 'lodash/debounce';
import { createClient } from '@google/maps';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const AddressPage = (props) => {

  const [marker, setMarker] = useState(null);

  const googleMapsClient = createClient({
    key: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
  });

  const onChangeSearchInput = (evt) => onChange(evt.target.value);

  const onChange = debounce( async function (query) {   
    if(query===''){
      setMarker(null);
    }
    else{
      googleMapsClient.geocode({
        address: `${query}, Bogota, Colombia`
      }, function(err, response) {
        if (!err) {
          console.log(response.json.results);
          const markerTmp = response.json.results[0].geometry.location;
          setMarker(markerTmp);
        }
        else{
          setMarker(null);
        }
      });
    }
  }, 1000);

  return (
    <div className='map-container-address'>
      <div className='header'>
        <Link to='/shop' className='atras'>
          <img src={backImg} alt='' />
        </Link>
        <div className='address_input'>
          <input 
            type='text' 
            placeholder='¿A donde llevamos tù comida?' 
            onChange={onChangeSearchInput}
            //value={valueText}
          />          
        </div>
      </div>
      <div className='footer'>
        <Link to='/pay' className='button-primary'>
          Siguiente
        </Link>
      </div>
      <Map
        className='map'
        google={props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 4.65652735888384,
          lng: -74.05815354641328,
        }}
        center={marker?marker:{
          lat: 4.65652735888384,
          lng: -74.05815354641328,
        }}
        fullscreenControl={false}
        streetViewControl={false}
        scaleControl={false}
        mapTypeControl={false}
        panContro={false}
        zoomControl={false}
      >
        {
          marker? 
            <Marker
              title={'The marker`s title will appear as a tooltip.'}
              name={'SOMA'}
              position={marker} />
          :
          <>
          </>
        }
      </Map>
    </div>
  );
} 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(AddressPage);

