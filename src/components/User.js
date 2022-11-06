import React,{useState} from 'react'

function User() {

  const [user,setUser]=useState({name : "Mehmet", surname : "Seven"});
  return (
    <div>
      <h2>User</h2>
      {user.name}{user.surname}
      <br />
      <div>
        <button onClick={()=>setUser((prev) => ({...prev, name : "Ahmet"}))}>İsmi Değiştir</button>
        <button onClick={()=>setUser((prev) => ({...prev, surname : "Bal"}))}>Soyismi Değiştir</button>
      </div>
    </div>

  )
}

export default User;