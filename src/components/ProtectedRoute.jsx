import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const userName = useSelector((state) => state.user.userName);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading delay or perform any necessary checks
    const checkAuth = () => {
      if (userName === "") {
        navigate("/", { replace: true }); // Redirect to home page if user is not logged in
      } else {
        setLoading(false); // Stop loading if user is authenticated
      }
    };

    checkAuth();
  }, [userName, navigate]);

  // Optionally, render a loading spinner or placeholder while checking auth
  if (loading) {
    return <div>Loading...</div>; // Replace with your loading spinner or component
  }

  // Render children if user is logged in
  return userName !== "" ? children : null;
}

export default ProtectedRoute;
