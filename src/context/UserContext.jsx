import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(`https://trackfundz-wmhv.onrender.com/api/v1/oneuser/${userId}`);
      // console.log(response);
      
      setUser(response.data.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, getUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
