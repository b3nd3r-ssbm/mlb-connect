import { useContext } from "react";
import { DataContext } from "./DataProvider.js";
import { ConnectCell } from "./ConnectCell.js";

export function ConnectGrid(){
    const { teams, theseTeams } = useContext(DataContext);
    

    if(teams.length == 0 || theseTeams.length != 6){
        return (
            <p>Loading Teams</p>
        )
    }

    const cellStyle = {
        border: '1px solid black',
        width: '25%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
      };
    
      return (
        <div style={{width:"33%",textAlign:"center",alignItems:"center",display:"grid",paddingLeft:"33%"}}>
            <table>
                <thead>
                    <tr>
                        <th style={cellStyle}> </th>
                        <th style={cellStyle}><img src={"./images/" + theseTeams[0] + ".svg"}></img></th>
                        <th style={cellStyle}><img src={"./images/" + theseTeams[1] + ".svg"}></img></th>
                        <th style={cellStyle}><img src={"./images/" + theseTeams[2] + ".svg"}></img></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={cellStyle}><img src={"./images/" + theseTeams[3] + ".svg"}></img></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[0], theseTeams[3]]}></ConnectCell></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[1], theseTeams[3]]}></ConnectCell></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[2], theseTeams[3]]}></ConnectCell></td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><img src={"./images/" + theseTeams[4] + ".svg"}></img></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[0], theseTeams[4]]}></ConnectCell></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[1], theseTeams[4]]}></ConnectCell></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[2], theseTeams[4]]}></ConnectCell></td>
                    </tr>
                    <tr>
                        <td style={cellStyle}><img src={"./images/" + theseTeams[5] + ".svg"}></img></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[0], theseTeams[5]]}></ConnectCell></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[1], theseTeams[5]]}></ConnectCell></td>
                        <td style={cellStyle}><ConnectCell teams={[theseTeams[2], theseTeams[5]]}></ConnectCell></td>
                    </tr>
                </tbody>
            </table>
        </div>
      )
}