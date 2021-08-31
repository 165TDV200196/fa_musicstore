import React from "react";
import "./track.scss";
export default function Track({ tracks }) {
  console.log(tracks);
  return (
    <div className="track">
      <div className="title-track">{tracks[0].artists[0]?.name}</div>
      <div className="content-track">
        <table>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
          {tracks.map((ok) => (
            <tr>
              <td>
                <div className="img">
                  <img src={ok.album.images[0]?.url} alt="" />
                </div>
              </td>
              <td>{ok.album.name}</td>
              <td>{ok.album.type}</td>
              <td>{ok.album.release_date}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
