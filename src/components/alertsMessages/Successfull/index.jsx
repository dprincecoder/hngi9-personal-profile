import React from "react";

const index = ({close}) => {
  return (
    <div className="content">
      <div className="alert alert-success alert-white rounded">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-hidden="true"
          onClick={close}
        >
          ×
        </button>
        <div className="icon">
          <i className="fa fa-check"></i>
        </div>
        <strong>Success!</strong> Message sent successfully!
      </div>
    </div>
  );
};

export default index;
