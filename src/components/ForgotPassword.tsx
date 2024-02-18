<<<<<<< HEAD

import { useState } from "react"; 
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css"; 

// ForgotPassword component declaration
const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // State for storing email input value

  const { showToast } = useAppContext(); // Accessing showToast function from custom context

  // Function to handle password reset
  const handleResetPassword = async () => {
    if (!email) { // Check if email is provided
      showToast({ // Show error message if email is empty
=======
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { showToast } = useAppContext();

  //  handle reset password function
  const handleResetPassword = async () => {
    if (!email) {
      showToast({
>>>>>>> origin/master
        message: `Email is required`,
        type: "ERROR",
      });
      console.error("Email is required");
      return;
    }

    try {
<<<<<<< HEAD
      const response = await fetch( // Sending POST request to reset password
=======
      const response = await fetch(
>>>>>>> origin/master
        "http://localhost:3000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
<<<<<<< HEAD
          body: JSON.stringify({ email }), // Sending email in request body
        }
      );

      if (response.ok) { // If request is successful
        showToast({ // Show success message
          message: `Password reset link sent to ${email}`,
          type: "SUCCESS",
        });
      } else { // If request fails
        const responseData = await response.json(); // Parse response data
        showToast({ // Show error message
=======
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        showToast({
          message: `Password reset link sent to ${email}`,
          type: "SUCCESS",
        });
      } else {
        const responseData = await response.json();
        showToast({
>>>>>>> origin/master
          message: `Email is not exist`,
          type: "ERROR",
        });

<<<<<<< HEAD
        console.error( // Log error message
=======
        console.error(
>>>>>>> origin/master
          "Failed to initiate password reset:",
          responseData.message
        );
      }
<<<<<<< HEAD
    } catch (error) { // Catch any errors
=======
    } catch (error) {
>>>>>>> origin/master
      console.error("Error initiating password reset:", error);
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col border-2 border-black rounded-md pb-5 items-center mt-50 w-full"> {/* Container for forgot password form */}
      <h6 className="text-2xl text-orange font-bold mb-4 p-3"> {/* Title */}
=======
    <div className="flex flex-col border-2 border-black rounded-md pb-5 items-center mt-50 w-full">
      <h6 className="text-2xl text-orange font-bold mb-4 p-3">
>>>>>>> origin/master
        Enter the email associated with your account to reset your password.
      </h6>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 mb-4"
<<<<<<< HEAD
        value={email} // Bind input value to state
        onChange={(e) => setEmail(e.target.value)} // Handle input change
=======
        value={email}
        onChange={(e) => setEmail(e.target.value)}
>>>>>>> origin/master
      />
      <button
        type="submit"
        className="bg-orange font-bold text-gray p-2"
<<<<<<< HEAD
        onClick={handleResetPassword} // Handle password reset button click
=======
        onClick={handleResetPassword}
>>>>>>> origin/master
      >
        Continue
      </button>
    </div>
  );
};

<<<<<<< HEAD
export default ForgotPassword; 
=======
export default ForgotPassword;
>>>>>>> origin/master
