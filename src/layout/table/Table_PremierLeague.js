import React, { Component } from "react";

class TablePremierLeague extends Component {
  state = {
    pointtablenew: [],
    pointtable: [
      {
        id: 1,
        trialno: "1",
        teamname: "manchester city",
        logo: "m-city.png",
        matches: "16",
        win: "12",
        draw: "2",
        loss: "2",
        gf: "26",
        ga: "10",
        gd: "16",
        point: "38",
        isBackground: false
      },
      {
        id: 2,
        trialno: "2",
        teamname: "liverpool",
        logo: "liverpool.png",
        matches: "16",
        win: "11",
        draw: "3",
        loss: "2",
        gf: "23",
        ga: "6",
        gd: "17",
        point: "35",
        isBackground: false
      },
      {
        id: 3,
        trialno: "3",
        teamname: "manchester united",
        logo: "m-united.png",
        matches: "16",
        win: "10",
        draw: "2",
        loss: "4",
        gf: "18",
        ga: "14",
        gd: "4",
        point: "32",
        isBackground: false
      },
      {
        id: 4,
        trialno: "4",
        teamname: "chelsea",
        logo: "chelsea.png",
        matches: "16",
        win: "8",
        draw: "3",
        loss: "5",
        gf: "14",
        ga: "12",
        gd: "2",
        point: "27",
        isBackground: true
      },
      {
        id: 5,
        trialno: "5",
        teamname: "arsenal",
        logo: "arsenal.png",
        matches: "16",
        win: "8",
        draw: "2",
        loss: "6",
        gf: "15",
        ga: "9",
        gd: "6",
        point: "26",
        isBackground: false
      },
      {
        id: 6,
        trialno: "6",
        teamname: "everton",
        logo: "everton.png",
        matches: "16",
        win: "7",
        draw: "2",
        loss: "7",
        gf: "14",
        ga: "14",
        gd: "0",
        point: "23",
        isBackground: false
      },
      {
        id: 7,
        trialno: "7",
        teamname: "west ham united",
        logo: "w-ham.png",
        matches: "16",
        win: "6",
        draw: "3",
        loss: "7",
        gf: "12",
        ga: "16",
        gd: "-4",
        point: "21",
        isBackground: false
      }
    ]
  };

  componentDidMount() {
    this.setState({
      pointtablenew: this.state.pointtable
    });
  }
  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" className="text-left">
                team
              </th>
              <th scope="col">matches</th>
              <th scope="col">win</th>
              <th scope="col">draw</th>
              <th scope="col">loss</th>
              <th scope="col">gf</th>
              <th scope="col">ga</th>
              <th scope="col">gd</th>
              <th scope="col">form</th>
              <th scope="col">points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pointtablenew.map(items => (
              <tr
                key={items.id}
                className={`${items.isBackground === true ? "highlight" : ""}`}
              >
                <td scope="row">{items.trialno}</td>
                <td className="text-left">
                  <div className="team-block">
                    <div className="team-logo">
                      <img src={"../images/small-logo/" + items.logo}></img>
                    </div>
                    <div className="team-name">{items.teamname}</div>
                  </div>
                </td>
                <td>{items.matches}</td>
                <td>{items.win}</td>
                <td>{items.draw}</td>
                <td>{items.loss}</td>
                <td>{items.gf}</td>
                <td>{items.ga}</td>
                <td>{items.gd}</td>
                <td></td>
                <td>{items.point}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TablePremierLeague;
