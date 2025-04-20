import YouTube from "react-youtube";

interface PlayerProp {
    videoId?: string;
}

export const YouTubePlayer = ({videoId} : PlayerProp) => {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
  
    return <YouTube videoId={videoId} opts={opts} />;
  };