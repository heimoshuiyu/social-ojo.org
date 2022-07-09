function Video({ src }) {
  const poster = src.substr(0, src.indexOf('.mp4')) + '_poster.jpg';
  return (
    <p
      style={{
        textAlign: "center",
      }}
    >
      <video
        src={src}
        poster={poster || ""}
        controls
        preload="none"
        width="70%"
      />
    </p>
  );
}

export default Video;
