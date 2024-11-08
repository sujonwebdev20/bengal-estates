const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-6xl mx-auto max-[1180px]:px-3 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
