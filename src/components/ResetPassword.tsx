<<<<<<< HEAD

=======
>>>>>>> origin/master
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css";

<<<<<<< HEAD
// Define the type for the parameters received from the URL
interface ResetPasswordParams {
  token: string | undefined; // The reset token
  [key: string]: string | undefined; // Other optional parameters
}

// Define the ResetPassword component
const ResetPassword = () => {
  // Hooks
  const { showToast } = useAppContext(); // Custom context hook for showing toast messages
  const { token } = useParams<ResetPasswordParams>(); // Get parameters from the URL
  const [password, setPassword] = useState(""); // State variable for password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State variable for confirm password input
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle resetting password
  const handleResetPassword = async () => {
    // Check if password or confirm password is empty
=======
interface ResetPasswordParams {
  token: string | undefined;
  [key: string]: string | undefined;
}

const ResetPassword = () => {
  const { showToast } = useAppContext();

  const { token } = useParams<ResetPasswordParams>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
>>>>>>> origin/master
    if (!password || !confirmPassword) {
      showToast({
        message: `Enter both passwords!`,
        type: "ERROR",
      });
<<<<<<< HEAD
=======

>>>>>>> origin/master
      console.error("Please enter both password and confirm password");
      return;
    }

<<<<<<< HEAD
    // Check if password matches confirm password
=======
>>>>>>> origin/master
    if (password !== confirmPassword) {
      showToast({
        message: `Passwords do not match`,
        type: "ERROR",
      });
      console.error("Passwords do not match");
      return;
    }

    try {
<<<<<<< HEAD
      // Make a request to reset the password
      const response = await fetch(
        `http://localhost:3000/api/auth/reset-password/${token}`, // URL for resetting password
        {
          method: "POST", // POST request
          headers: {
            "Content-Type": "application/json", // Content type JSON
          },
          body: JSON.stringify({ password }), // Password data in JSON format
        }
      );

      // If the request is successful
=======
      const response = await fetch(
        `http://localhost:3000/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

>>>>>>> origin/master
      if (response.ok) {
        showToast({
          message: `Password reset Successful!`,
          type: "SUCCESS",
        });
<<<<<<< HEAD
        navigate("/sign-in"); // Navigate to sign-in page
      } else {
        // If there's an error, display error message
        const responseData = await response.json();
=======

        navigate("/sign-in");
      } else {
        const responseData = await response.json();

>>>>>>> origin/master
        showToast({
          message: `Failed to reset password`,
          type: "ERROR",
        });
        console.error("Failed to reset password:", responseData.message);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

<<<<<<< HEAD
  // Render the reset password form
=======
>>>>>>> origin/master
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl text-orange font-bold mb-4">
        Reset your Password here:
      </h2>
      <input
        type="password"
        placeholder="Enter your new password"
        className="border p-2 mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your new password"
        className="border p-2 mb-4"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="bg-orange text-gray p-2" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

<<<<<<< HEAD
export default ResetPassword; 
=======
export default ResetPassword;
>>>>>>> origin/master
