import React from "react";
import "./style.scss";
export default function Artist({ artist, hangdleId }) {
  return (
    <div className="artist">
      <div className="row">
        {artist !== null
          ? artist.map((ok) => (
              <div className="col-lg-4 col-md-6 col- d-flex">
                <div
                  className="content-artist"
                  onClick={() => {
                    hangdleId(ok.id);
                  }}
                >
                  <div className="img">
                    <img src={ok.images[0]?.url} alt="" />
                  </div>
                  <div className="text-artist">
                    <div className="content-text">
                      <div className="name">
                        <h3>{ok.name}</h3>
                      </div>
                      <div className="popularity">
                        popularity: {ok.popularity}
                      </div>
                      <div className="genres">
                        <div className="text">
                          {ok.genres.length !== 0 ? "genres:" : ""}
                        </div>
                        {ok.genres.map((oki) => (
                          <div className="tag"> {oki}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
