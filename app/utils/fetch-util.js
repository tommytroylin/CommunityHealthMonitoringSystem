/**
 * Created by Tommy on 11/26/15.
 */
//handle the http status
export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

}

//parse the response into JSON
export function parseJSON(response) {
  return response.json()
}