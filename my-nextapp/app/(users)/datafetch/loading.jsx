const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex space-x-6">
        <span className="h-8 w-8 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="h-8 w-8 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="h-8 w-8 bg-blue-600 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default Loader;
