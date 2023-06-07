import React, { useEffect } from "react";
import useFileStorage from "../../../configs/useFileStorage";
import { useAnimate, useInView, stagger } from "framer-motion";

// Call function (hook) here
const ProgressBar = ({ file, setFile }) => {
  const { progress, fileUrl } = useFileStorage(file);

  useEffect(() => {
    if (fileUrl) {
      setFile(null);
    }
  }, [fileUrl, setFile]);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 0.6 });
    }
  }, [isInView]);

  return (
    <li
      className='progress-bar'
      ref={scope}
      animate={{ delay: stagger(0.5), width: progress + "100%" }}
    >
      {progress}
    </li>
  );
};

export default ProgressBar;
