interface Address {
  house_number: string;
  road: string;
  neighbourhood: string;
  suburb: string;
  city: string;
  county: string;
  state: string;
  postcode: string;
  country: string;
  name: string;
  country_code: string;
}

export interface LocationData {
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: string;
  lon: string;
  boundingbox: string[];
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: Address;
}

export interface Location {
  longitude: number;
  latitude: number;
  name: string;
}
