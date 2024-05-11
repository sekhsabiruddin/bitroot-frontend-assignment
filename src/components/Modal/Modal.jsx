import React from "react";
import "./Modal.css";
import { RxCross1 } from "react-icons/rx";
const Modal = ({ handleImageClicked, singleData }) => {
  console.log("Single data", singleData);
  const { small } = singleData;
  console.log(small);
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="cross-icon">
          <RxCross1 onClick={handleImageClicked} size={20} />
        </div>
        <div className="modal-image">
          <img src={singleData.thumbnail.small} alt="" />
        </div>
        <div className="modal-text">
          <div>
            <h2>{singleData.title}</h2>
          </div>
          <div>
            <p>{singleData.content}</p>
          </div>
        </div>
        <div className="user-image-text">
          <div className="user-image">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"
              alt=""
            />
          </div>
          <div className="owner-text">
            <p>Michael Jordan-Product Owner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
