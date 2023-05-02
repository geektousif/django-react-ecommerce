const Loading = () => {
  return (
    <div className="">
      <div
        className="animate-spin radial-progress"
        style={{ "--value": "65", "--size": "8rem", "--thickness": "0.5rem" }}
      >
        Loading
      </div>
    </div>
  );
};

export default Loading;
