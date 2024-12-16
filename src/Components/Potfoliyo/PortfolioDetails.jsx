import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PortfolioDetails = () => {
  const location = useLocation();
    const pathName = location.pathname;
    const username = pathName.split("/team-details/")[1]
    
  
    const [teamData, setTeamData] = React.useState(); 
    React.useEffect(() => {
      fetch("/teamsData.json")
        .then(res => res.json())
        .then(data => setTeamData(data)); 
    }, []);
    // console.log(service);

 
  return (
    <div>
      


      
    </div>
  );
};

export default PortfolioDetails;
