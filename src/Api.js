import fetch from 'isomorphic-fetch';

export const submitApp = async (appData, callback) => {
  const url = "http://18.188.68.241:8081/application"
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appData) 
  });
  return response.json();
}

export const submitAppKey = async (appKey, callback) => {
  const url = "http://18.188.68.241:8081/application/" + appKey
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors'
  });
  return response.json();
}



