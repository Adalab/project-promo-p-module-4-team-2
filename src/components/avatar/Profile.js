import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/mariposa.jpg";

function Profile(props) {
  const photo = props.photo === "" ? defaultAvatar : props.photo;
  return (
    <div
      className="card__image "
      style={{ backgroundImage: `url(${photo})` }}
    ></div>
  );
}

Profile.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Profile;
