import React, { useState } from "react";

const Problem2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const openModal = (title) => {
    setTitle(title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            onClick={() => openModal("All Contacts")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            onClick={() => openModal("US Contacts")}
          >
            US Contacts
          </button>
        </div>

        {showModal && (
          <div className="modal" style={{ display: "block" }}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}></span>
              <h1>{title}</h1>
              <div className="d-flex justify-content-center gap-3">
                <button
                  className="btn btn-lg btn-outline-primary"
                  type="button"
                  style={{
                    backgroundColor: "#46139f",
                    color: "white",
                    borderColor: "#46139f",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#46139f";
                    e.target.style.backgroundColor = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                    e.target.style.backgroundColor = "#46139f";
                  }}
                  onClick={() => openModal("All Contacts")}
                >
                  All Contacts
                </button>
                <button
                  className="btn btn-lg btn-outline-warning"
                  type="button"
                  onClick={() => openModal("US Contacts")}
                  style={{
                    backgroundColor: "#ff7f50",
                    color: "white",
                    borderColor: "#ff7f50",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#ff7f50";
                    e.target.style.backgroundColor = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                    e.target.style.backgroundColor = "#46139f";
                  }}
                >
                  US Contacts
                </button>
                <button
                  className="btn btn-lg btn-outline-warning"
                  type="button"
                  onClick={closeModal}
                  style={{
                    backgroundColor: "#46139f",
                    color: "white",
                    borderColor: "#46139f",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#46139f";
                    e.target.style.backgroundColor = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                    e.target.style.backgroundColor = "#46139f";
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
