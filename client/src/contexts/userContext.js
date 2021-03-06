  
import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext(null);


const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setAuth] = useState(false);
  const [ride, setRide] = useState(null);
  const [type, setType] = useState("user");
  const [isLoading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  console.log(ride, "ride");
  let options = {
    credentials:"include",
    withCredentials:true,
  };
  if(token){
    options = {
      credentials:"include",
      withCredentials:true,
      headers:{
        'Authorization': "Bearer "+token,
      }
  };
  }
  const getUser  = async () => {

    const url = "http://localhost:4000/userinfo";
    try{
      setLoading(true);
      const userJ = await fetch(url,
        options
      );
      const user = await userJ.json();
      console.log(user, "data from fetch");
      if(user.hasOwnProperty('authorizedData')){
        if(user.authorizedData.hasOwnProperty('user')){
          setUser(user.authorizedData.user);
        } else {
          setUser(user.authorizedData.driver);
        }
        setRide(user.authorizedData.rideInfo);
      } else{
        setUser(user.user);
        setRide(user.rideInfo);
      } 
      setAuth(true);
      setLoading(false);
    } catch (err){
      setLoading(false);
      console.log(err);
    }
  }
  useEffect(()=>{
    getUser();
  },[]);
  return (
      <userContext.Provider value={{
          user: user,
          setAppAuth: setUser,
          isAuth: isAuth,
          setAuth: setAuth,
          isLoading: isLoading,
          setRide: setRide,
          ride: ride
      }}>
          {children}
      </userContext.Provider>
  );
};


export default UserProvider;


//   const getProfile = async () => {
//     const resp = await fetch('http://localhost:4000/profile',{
//             method: 'GET',
//             withCredentials: true,
//             credentials: 'include',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//         }});
//     const respJson  = await resp.json();
//     await setUser(respJson);    
// }
// useEffect(() => {
//   getProfile();
// }, []);