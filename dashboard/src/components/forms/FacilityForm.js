import React from "react";
import ImageUpload from "./ImageUpload";

const FacilityForm = (props) => {
  const { submitHandler, facility, handleChange, setFacility } = props;

  const { facilityName, facilityId, purpose, price, image, features } =
    facility;

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name of the facility :</label>
          <input
            name="facilityName"
            value={facilityName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>facility id :</label>
          <input
            type="text"
            name="facilityId"
            value={facilityId}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>purpose :</label>
          <input
            name="purpose"
            required
            value={purpose}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>price :</label>
          <input name="price" required value={price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>features :</label>
          <input
            name="features"
            required
            value={features}
            onChange={handleChange}
          />
        </div>

        <ImageUpload name="image" setfile={setFacility} file={facility} />
        <div className="form-group">
          <button type="submit"> save </button>
        </div>
      </form>
    </div>
  );
};

export default FacilityForm;
