import { useGlobalContext } from "./globalVariables";

const urlBasePath = "http://localhost:8080"
//'http://slimshady-env-1.eba-pmavtqyn.us-east-2.elasticbeanstalk.com';

export function FetchWithBasicAuth(url: string, method: string, jsonBody = "", headers : [[string, string]] = [["", ""]])
{
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');   

    var optionsHeaders :  any;
    const headerObject = Object.fromEntries(headers);
    if(headers && headers.length > 0 && headers[0][0] != "")
    {
       optionsHeaders = {'Authorization': 'Basic ' + btoa(username+ ':' + password), ...Object.fromEntries(headers)};
    }
    else
    {
        optionsHeaders = {'Authorization': 'Basic ' + btoa(username+ ':' + password)};
    }

    const options = {
        method: method,
        headers: optionsHeaders
      };

      const optionsWithBody = {
        method: method,
        headers: {'Authorization': 'Basic ' + btoa(username+ ':' + password), 'Content-Type': 'application/json'},        
        body: jsonBody        
      }
      
    return fetch(urlBasePath + url, jsonBody != "" ? optionsWithBody : options).then((response) => {
        if (!response.ok) {
            console.log('failed to get process url ' + url)
            //throw new Error(JSON.stringify("Error getting url : " + url));
        }
        else {
            return response.json();
        }

    });
}

export function fetchNoAuth(url: string, method: string, jsonBody = "")
{
    const options = {
        method: method,        
      };

      const optionsWithBody = {
        method: method,        
        headers: {'Content-Type': 'application/json'},        
        body: jsonBody        
      }
      
    return fetch(urlBasePath + url, jsonBody != "" ? optionsWithBody : options).then((response) => {
        if (!response.ok) {
            console.log('failed to get process url ' + url)
            //throw new Error(JSON.stringify("Error getting url : " + url));
        }
        else {
            return response.json();
        }

    });
}