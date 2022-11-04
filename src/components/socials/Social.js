import React from 'react';
import './socials.css';

const Social = () => {
  
  return (
      <section className="socials">
          <a href="https://slack.com/dprincecoder" className="slack">
              <img src="slack-icon.svg" alt="" className="slack-icon" />
          </a>
          <a href="https://github.com/dprincecoder" className="github">
              <img src="github-icon.svg" alt="" className="slack-icon" />
          </a>
    </section>
  )
}

export default Social