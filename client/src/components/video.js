import React, {useEffect} from 'react';

function Video() {


  useEffect(() => {
      const scriptTag = document.createElement('script');

      scriptTag.src = "/loadVideo.js";
      scriptTag.async = true;

      document.body.appendChild(scriptTag);
      return () => {
          document.body.removeChild(scriptTag);
      }
  }, []);

    return (<>
    <div style={{
          backgroundImage: 'url("img/wave-foot.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'bottom' 
      }}>
      <div className="container h-[848px] mx-auto mt-5 pb-5 px-4 sm:px-6 lg:px-8 ">
        <video id="demo_video" className="mx-auto rounded-3xl shadow-md video-mask video-js vjs-default-skin vjs-fill"  preload="auto" autoPlay muted loop>
          {/* <source src="/mov/1080_out.m3u8" type="application/x-mpegURL" /> */}
          <source src="/mov/Sequence.m3u8" type="application/x-mpegURL" />
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
    </>);
}

export default Video;