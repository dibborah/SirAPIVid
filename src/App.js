import React, { useState } from 'react';
import Axios from 'axios';
// import './App.css';
import { Images } from './component/images';

function App() {

  const [images, setImages] = useState([]);

  const fetchAPI = async () => {

    const response = await Axios.get('https://api.unsplash.com/photos/?client_id=uqr-0EE5-49f0cQTQEnmvP7RhmFMqc_Smdtgj0EUxMs');
    // console.log(response.data)
    const data = await response.data
    setImages(data);

  }

  return (
    <>

      <div className='container'>

        <br></br>
        <button className='btn btn-primary btn-md' onClick={fetchAPI}>Fetch Unsplash API</button>
        <br></br>

      </div>

      <div className='photos'>
        {images.length > 0 && (
          <Images images={images} />
        )}
      </div>
    </>
  );
}

export default App;
