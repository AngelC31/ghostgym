import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    isAuthenticated && (

        <div class="card text-center col-12 bg-dark">
          <br/><br/><br/><br/>
  <div class="card-header bg-warning">
    Usuario
  </div>
  <div class="card-body bg-light">
  <img src={user.picture} alt={user.name} />
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text">{user.email}.</p>
    <a href="#" class="btn btn-warning"><LogoutButton/></a>
  </div>
  <br/><br/>
      </div>
    )
  );
};