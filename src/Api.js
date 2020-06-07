import fetch from 'isomorphic-fetch';

export const submitApp = async (appData, callback) => {
  const url = "http://18.216.12.216:8081/application"
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



