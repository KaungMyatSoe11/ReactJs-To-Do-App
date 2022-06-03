import React, { useState } from "react";
import { BackDrop } from "./BackDrop";
import { Modal } from "./Modal";

export const Todo = ({ text }) => {
  const [isModal, setisModal] = useState(false);
  const deleteHandler = () => {
    setisModal((prev) => {
      console.log(prev);
      setisModal(!prev);
    });
  };

  const closeModalHandler = () => {
    console.log("close");
    setisModal((prev) => {
      console.log("close", prev);
      setisModal(false);
    });
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isModal && (
        <>
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
          <BackDrop onClick={closeModalHandler} />
        </>
      )}
    </div>
  );
};
