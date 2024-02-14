import "./loader.css";

function Loader({ className }: { className?: string }) {
  return <div className={`spinner ${className}`}></div>;
}

export default Loader;
