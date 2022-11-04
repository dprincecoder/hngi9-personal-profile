import React from 'react'

const Warning = ({close}) => {
  return (
    <div className="content">
      <div class="alert alert-warning alert-white rounded">
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
          <i class="fa fa-warning"></i>
        </div>
        <strong>Alert!</strong> Don't forget to save your data.
      </div>
    </div>
  );
}

export default Warning