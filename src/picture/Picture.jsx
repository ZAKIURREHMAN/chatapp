import React from 'react'
import Imge from '../Img/firstt.jpg'
import ReactImageMagnify from 'react-image-magnify';
function Picture() {
  return (<>
  <div className="picture " style={{width:'600px',height:'100px',position:'relative',top:'500px',left:'200px'}} >
  <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: Imge,
        width:140,
        height:160,
    },
    largeImage: {
        src: Imge,
        width: 1200,
        height: 1800
    }
}} />
fasfasfasf
  </div>
  </>
  )
}

export default Picture