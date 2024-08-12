const BannerVideo = () => {
  return (
    <div className="w-full flex overflow-hidden">
      <iframe
        width="600"
        height="400"
        src="https://www.youtube.com/embed/NCqNjAMDlaM?autoplay=1&loop=1&playlist=NCqNjAMDlaM&mute=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-screen absolute top-0 left-0 scale-125"
      ></iframe>
    </div>
  );
};

export default BannerVideo;
