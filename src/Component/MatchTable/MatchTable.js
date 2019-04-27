import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Barca from '../../Assets/barca.png'
import chelsea from '../../Assets/chelsea.png'
import juvey from "../../Assets/juvey.png";
import napoli from '../../Assets/napoli.png';
import manu from '../../Assets/mancity.png';
import './MatchTable.css';

class MatchTable extends Component {
    constructor() {
        super()
        this.state = {
            leagueTable: [
                { id: "1", logo: <img className="euro_image" src={manu} alt="logo" />, club: "Manchester United", P: "18", W: "12", D: "2", L: "4", GD: '34', Pts: "44" },
                { id: "2", logo: <img className="euro_image" src={Barca} alt="logo" />, club: "Barcelona", P: "18", W: "12", D: "2", L: "4", GD: '34', Pts: "44" },
                { id: "3", logo: <img className="euro_image" src={juvey} alt="logo" />, club: "Juventus", P: "18", W: "12", D: "2", L: "4", GD: '34', Pts: "44" },
                { id: "4", logo: <img className="euro_image" src={napoli} alt="logo" />, club: "Napoli", P: "18", W: "12", D: "2", L: "4", GD: '34', Pts: "44" },
                { id: "5", logo: <img className="euro_image" src={chelsea} alt="logo" />, club: "Chelsea", P: "18", W: "12", D: "2", L: "4", GD: '34', Pts: "44" },
            ]
        }
    }

    matchLeague = () => {
        let { leagueTable } = this.state
        return (
            leagueTable.map(result => {
                return (
                    <tr key={result.id}>
                        <td>{result.id}</td>
                        <td className="euro_club_data">
                            <div className="euro_image_cover">{result.logo}</div>
                            <div><p>{result.club}</p></div>
                        </td>
                        <td>{result.P}</td>
                        <td>{result.W}</td>
                        <td>{result.D}</td>
                        <td>{result.L}</td>
                        <td>{result.GD}</td>
                        <td>{result.Pts}</td>
                    </tr>

                )
            })
        )
    }


    render() {


        return (
            <div>
                <div className="table_header"><h3 className="table__content">Group A</h3></div>
                <Table responsive>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Teams</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.matchLeague()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default MatchTable;