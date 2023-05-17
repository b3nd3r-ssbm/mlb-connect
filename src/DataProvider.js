import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [people, setPeople] = useState([]);
  const [teams, setTeams] = useState([]);
  const [data, setData] = useState([]);
  const [theseTeams, setTheseTeams] = useState([]);
  const [oldTeams, setOldTeams] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  function getTheseTeams(teams){
    let picked = [];
    let pick = {...teams};
    for(let i = 0; i < 6; i++){
        let pickKeys = Object.keys(pick);
        let ind = Math.floor(Math.random() * pickKeys.length);
        let randomTeam = pickKeys[ind];
        delete pick[pickKeys[ind]];
        if(picked.length < 6){
            picked.push(randomTeam);
        }
    }
    setTheseTeams(picked);
  }

  const fetchData = async () => {
    try {
      const peopleRes = await fetch('./data/playerName.json');
      const peopleJson = await peopleRes.json();
      setPeople(peopleJson);

      const teamsRes = await fetch('./data/teams.json');
      const teamsJson = await teamsRes.json();
      setTeams(teamsJson);

      const urlParams = new URLSearchParams(window.location.search);
      const teamsParam = urlParams.get('teams');

      if(teamsParam && teamsParam.split(',').length == 6){
        setTheseTeams(teamsParam.split(','));
      }
      else{
        getTheseTeams(teamsJson);
      }

      const dataRes = await fetch('./data/PeopleTeams.json');
      const dataJson = await dataRes.json();
      setData(dataJson);

      const oldTeamsRes = await fetch('./data/oldTeams.json');
      const oldTeamsJson = await oldTeamsRes.json();
      setOldTeams(oldTeamsJson);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataContext.Provider value={{ people, teams, data, theseTeams, oldTeams, getTheseTeams }}>
      {children}
    </DataContext.Provider>
  );
};
