import axios from "axios";

const API_KEY = "c890f1dac79d26c61f2bc24976435175";
const ROOT_URL = "https://api.flickr.com/services/rest/?";
export const FETCH_PHOTOS = "FETCH_PHOTOS";

export function fetchPhotos(text, tags) {
  //console.log(photo);
  const currTags = tags.replace(/,/g, "%2C");
  console.log(tags);
  console.log(currTags);
  const url = `${ROOT_URL}method=flickr.photos.search&api_key=${API_KEY}&tags=${currTags}&text=${text}&safe_search=1&format=json&nojsoncallback=?`;
  const request = axios.get(url);
  //console.log(request);
  return {
    type: FETCH_PHOTOS,
    payload: request
  };
}
