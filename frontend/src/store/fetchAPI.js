import {baseUrlServer} from "./constants";


export const fetchAPI = (url, body, method, headers = true, expectData = true, fileExpected = false) => {

    const thisUrl = `${baseUrlServer}${url}`;
    let config = {};
    if (headers && body && !fileExpected) {
        config = {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
          }
    } else if (headers && !body && !fileExpected) {
        config = {
          headers: headers,
          method: method
        }
    } else if (!headers && body && !fileExpected) {
        config = {
            method: method,
            body: JSON.stringify(body),
          }
    } else if (fileExpected){
        config = {
          method: method,
          headers: headers,
          body: body,
        }
    }

    return fetch(thisUrl, config)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                  // console.log('200 ok')
                  if(expectData){
                    // console.log('in the data')
                    return response.json();
                  } else {
                    // console.log('no data');
                    return true;
                  }
                } else {
                  // console.log('error');
                  throw Error(`${response.status}`);
                }
            })
};
