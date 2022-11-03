import React from 'react'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Socials from '../../components/Socials'

const index = () => {
  return (
    <>
      <Header />
      <Button id="twitter" link="https://twitter.com/dprincecoder">
        Twitter Link
      </Button>
      <Button id="btn__zuri" link="https://training.zuri.team/">
        Zuri Team
      </Button>
      <Button id="books" link="http://books.zuri.team/">
        Zuri Books
      </Button>

      <Button
        id="book__python"
        link="https://books.zuri.team/python-for-beginers?ref_id=dprincecoder"
      >
        Python Books
      </Button>
      <Button id="pitch" link="https://background.zuri.team/">
        Background Check for Coders
      </Button>
      <Button id="book__design" link="https://books.zuri.team/design-rules">
        Design Books
      </Button>
      <Socials />
    </>
  );
}

export default index