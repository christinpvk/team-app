import React, { Component } from "react";

class TableChampionsLeague extends Component {
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
            <tr>
              <td colSpan="12">no data available</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableChampionsLeague;
