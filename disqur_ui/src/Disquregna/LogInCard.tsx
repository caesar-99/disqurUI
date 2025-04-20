import { Button } from "@mui/material";
import React, { useState } from "react"
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import { fetchNoAuth, FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";
import { Disquregna } from "./Domain/Disquregna";

export const LogInCard = ()=>{

  const { setGlobalMainPageContent, setGlobalLoggedInUser, globalTargetNavigationPage } = useGlobalContext()

    const[username, setUserName] = useState('');      
    const[password, setPassword] = useState('');
    

      const handleUserNameChange = (event: { target: { value: any; }; }) => {
        setUserName(event.target.value);        
      };

      const handlePasswordChange = (event: { target: { value: any; }; }) => {
        setPassword(event.target.value);        
      };


    
      async function logInDisquregna()
      {
            await fetchLogInDisquregna();
      }

      async function fetchLogInDisquregna() {        
            const response = await fetchNoAuth("/v1/disquregna/login", "POST", 
               JSON.stringify({                
                userName:username,
                password:password  
              }),
            ).then((response: Disquregna) =>{
              //console.log("log in? " + response?.userName);

              if(response != undefined && response.id != undefined)
              {
                  console.log('log in success');
                  setGlobalLoggedInUser(response);
                  localStorage.setItem('username', response.userName?? '');
                  localStorage.setItem('password', response.password?? '');
                  setGlobalMainPageContent(globalTargetNavigationPage);
              }

            });
                
    }

    // const encryptPassword = (password: string) => {
    //   const secretKey = 'your-secret-key'; // Replace with a secure key management solution
    //   return CryptoJS.AES.encrypt(password, secretKey).toString();
    // };
    
    // const decryptPassword = (encryptedPassword) => {
    //   const secretKey = 'your-secret-key';
    //   const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    //   return bytes.toString(CryptoJS.enc.Utf8);
    // };
    
    // const storePassword = (password) => {
    //   const encryptedPassword = encryptPassword(password);
    //   localStorage.setItem('encryptedPassword', encryptedPassword);
    // };
    
    // const retrievePassword = () => {
    //   const encryptedPassword = localStorage.getItem('encryptedPassword');
    //   return decryptPassword(encryptedPassword);
    // };

    return (
        <React.Fragment>
        <div>
            <h1>Log In</h1>
        </div>
        <div>
            <div><h2>Username</h2></div>
            <div>
                <textarea onChange={handleUserNameChange} />
            </div>            
            <div><h2>Password</h2></div>
            <div>
                <input type="password" onChange={handlePasswordChange} />                
            </div>

            <Button onClick={logInDisquregna}>Login</Button>

        </div>
        </React.Fragment>
    );
}