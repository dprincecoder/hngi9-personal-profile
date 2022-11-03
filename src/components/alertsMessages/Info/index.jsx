import React from 'react'

const index = ({close}) => {
  return (
    <div className="content">
      <div class="alert alert-info alert-white rounded">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-hidden="true"
          onClick={close}
        >
          ×
        </button>
        <div class="icon">
          <i class="fa fa-info-circle"></i>
        </div>
        <strong>Info!</strong> You have 3 new messages in your inbox.
      </div>
    </div>
  );
}

export default index