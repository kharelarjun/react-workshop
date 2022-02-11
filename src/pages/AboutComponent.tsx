import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom"; // useNavigate - useNareplacement of userHistory
export const AboutComponent: FC = ({}) => {
  let navigate = useNavigate();
  let { user } = useParams();
  return (
    <div>
      <p>Hello {user}! </p>
      <button onClick={() => navigate("/")}> Go to Home</button>
      <p>
        You might not always use links to navigate to other pages! imagine
        submitting a form/login in, you may want redirection.
      </p>
    </div>
  );
};

export default AboutComponent;
