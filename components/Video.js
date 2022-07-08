function Video({ src }) {
  return (
    <p
      style={{
        textAlign: "center",
      }}
    >
      <video
        src={src}
        controls
        width="70%"
      />
    </p>
  );
}

export default Video;
