import { useState } from "react";
import Loader from "./Loader";

const Image = ({ src, alt = "image" }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <img
        style={{ display: !loading ? "block" : "none" }}
        onLoad={() => setLoading(false)}
        src={src}
        alt={alt}
        title={alt}
        className="bg-gray-300 h-full w-full dark:bg-gray-700 object-cover object-center"
      />
      {loading && (
        <div className="bg-gray-500 h-full w-full flex items-center justify-center dark:bg-gray-500 object-cover object-center animate-pulse">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Image;
