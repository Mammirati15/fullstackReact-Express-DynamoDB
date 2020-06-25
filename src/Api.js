import fetch from 'isomorphic-fetch';
const url = "http://18.218.91.218:8081/applications/"
export const submitApp = async (appData, callback) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'applications/json'
    },
    body: JSON.stringify(appData) 
  });
  return response.json();
}

export const submitAppKey = async (appKey, callback) => {
  const response = await fetch(url + appKey, {
    method: 'GET',
    mode: 'cors'
  });
  return response.json();
}



