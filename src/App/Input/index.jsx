import React from "react";
import "./style.scss";
export default function InputField({ changeQ, q }) {
  const hangleInuput = (e) => {
    changeQ(e.target.value);
  };
  return (
    <div className="inputSearch">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder=""
          value={q}
          onChange={hangleInuput}
        />
      </div>
    </div>
  );
}
