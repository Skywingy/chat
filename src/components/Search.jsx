import React, { useState, useContext } from 'react';
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from "../context/AuthContext";


const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  
  const {currentUser} = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(collection(db, "users"),
      where("displayName", "==", username));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        setUser(doc.data())
        console.log("////////////", user);
  });
      } catch (err){
        setErr(true);
      }
};

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
    console.log(e.target.value)
  }

  const handleSelect = async ()=> {
    console.log("clicked");
    //check whether the group(chats in firestore) exists, if not create

    //to create uniq id of 2 users chat combines 2 users existing id //here currentuser is loged in user user is searched user
    const combinedId = 
    currentUser.uid > user.uid 
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a new chat in chats collection
        await setDoc(doc(db, "chats", combinedId), {
          messages: []
        });

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid),{
          [combinedId+".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChats", user.uid),{
          [combinedId+".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId+".date"]: serverTimestamp()
        });
      }

    } catch(err){
    }
    
    setUser(null);
    setUsername("");

  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input className='searchInput'
        placeholder='Find a user' 
        type="text" 
        onKeyDown={handleKey} 
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className='userSearch' onClick={handleSelect}>
          <img className='userSearchImg' src={user.photoURL} alt="userSearchImg" />
          <div className='userSearchInfo'>
          <span className='userSearchName'>{user.displayName}</span>
        </div>
      </div>
      )}
    </div>
  )
}

export default Search
