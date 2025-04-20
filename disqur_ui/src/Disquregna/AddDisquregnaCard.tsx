import { Button } from "@mui/material";
import React, { useState } from "react"
import { MainPageContent, useGlobalContext } from "../Utility/globalVariables";
import { fetchNoAuth, FetchWithBasicAuth } from "../Utility/fetchWithBasicAuth";

export const AddDisquregnaCard = ()=>{

  const { setGlobalMainPageContent } = useGlobalContext()

    const[username, setUserName] = useState('');
    const[firstName, setFirsname] = useState('');
    const[lastName, setLastName] = useState('');
    const[emailAddress, setEmailAddress] = useState('');    
    const[password, setPassword] = useState('');
    

      const handleUserNameChange = (event: { target: { value: any; }; }) => {
        setUserName(event.target.value);        
      };

      const handleEmailAddressChange = (event: { target: { value: any; }; }) => {
        setEmailAddress(event.target.value);        
      };

      const handlePasswordChange = (event: { target: { value: any; }; }) => {
        setPassword(event.target.value);        
      };


    
      async function addNewDisquregna()
      {
            await addDisquregna();
      }

      async function addDisquregna() {
        //await fetch().
        try {
            const response = await fetchNoAuth("/v1/disquregna/register", "POST", 
               JSON.stringify({
                firstName:"sod",
                lastName:"defenda",
                emailAddress:emailAddress,
                userName:username,
                password:password  
              }),
            );
            
              setGlobalMainPageContent(MainPageContent.ViewRandomTopicsAndRandomPostCards);
            
          } catch (error) {
            console.error('Error adding disquregna:', error);            
            throw error;
          }
    }

    return (
        <React.Fragment>
        <div>
            <h1>Add Disquregna</h1>
        </div>
        <div>
            <div><h2>Username</h2></div>
            <div>
                <textarea onChange={handleUserNameChange} />
            </div>
            <div><h2>Email Address</h2></div>
            <div>
                <textarea onChange={handleEmailAddressChange} />                
            </div>
            <div><h2>Password</h2></div>
            <div>
                <textarea onChange={handlePasswordChange} />                
            </div>

            <Button onClick={addNewDisquregna}>Add Disquregna</Button>

        </div>
        </React.Fragment>
    );
}