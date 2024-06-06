import React from "react";

function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-blue-50">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-500"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-blue-50">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-500"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckbox;
