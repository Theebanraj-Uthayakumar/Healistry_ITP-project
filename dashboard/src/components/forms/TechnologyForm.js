import React from "react";
import ImageUpload from "./ImageUpload";

const TechnologyForm = (props) => {
  const { submitHandler, technology, handleChange, setTechnology } = props;

  const {
    machineName,
    machineId,
    precaution,
    eta,
    purpose,
    procedure,
    price,
    image,
  } = technology;

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Name of the machine :</label>
          <input
            name="machineName"
            value={machineName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Machine Id :</label>
          <input
            name="machineId"
            type="text"
            value={machineId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>purpose of the machine :</label>
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
          <label>estimated time :</label>
          <input name="eta" required value={eta} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>procedure:</label>
          <input
            name="procedure"
            required
            value={procedure}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>precaution:</label>
          <input
            name="precaution"
            required
            value={precaution}
            onChange={handleChange}
          />
        </div>

        <ImageUpload
          name="image"
          value={image}
          setfile={setTechnology}
          file={technology}
        />
        <div className="form-group">
          <button type="submit"> save </button>
        </div>
      </form>
    </div>
  );
};

export default TechnologyForm;
