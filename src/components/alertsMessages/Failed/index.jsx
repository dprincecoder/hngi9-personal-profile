import React from 'react'

const index = () => {
  return (
    <div class="content">
      
      <div class="alert alert-danger alert-white rounded">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-hidden="true"
        >
          ×
        </button>
        <div class="icon">
          <i class="fa fa-times-circle"></i>
        </div>
        <strong>Error!</strong> The server is not responding, try again later.
      </div>
    </div>
  );
}

export default index