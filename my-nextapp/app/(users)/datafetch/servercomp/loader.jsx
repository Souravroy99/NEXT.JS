const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative h-28 w-28">
        <div className="absolute inset-0 rounded-full border-4 border-blue-400 animate-ping"></div>
        <div className="absolute inset-0 rounded-full border-8 border-blue-600"></div>
      </div>
    </div>
  );
};

export default Loader;
