import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/mariposa.jpg";

function GetAvatar(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.handleInputChange(image, "photo");
  };

  const photo = props.photo === "" ? defaultAvatar : props.photo;
  return (
    <>
      <label
        htmlFor="photo"
        className="label secondFieldset__button js__profile-trigger"
      >
        Añadir imagen
      </label>
      <input
        id="photo"
        type="file"
        className="input js-input js__profile-upload-btn"
        ref={myFileField}
        onChange={uploadImage}
      />

      <div
        type="text"
        className="square js__profile-preview"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
    </>
  );
}

GetAvatar.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default GetAvatar;
