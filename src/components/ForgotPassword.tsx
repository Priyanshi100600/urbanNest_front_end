
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
        message: `Email is required`,
        type: "ERROR",
      });
      console.error("Email is required");
      return;
    }

    try {
      const response = await fetch( // Sending POST request to reset password
        "http://localhost:3000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
          message: `Email is not exist`,
          type: "ERROR",
        });

        console.error( // Log error message
          "Failed to initiate password reset:",
          responseData.message
        );
      }
    } catch (error) { // Catch any errors
      console.error("Error initiating password reset:", error);
    }
  };

  return (
    <div className="flex flex-col border-2 border-black rounded-md pb-5 items-center mt-50 w-full"> {/* Container for forgot password form */}
      <h6 className="text-2xl text-orange font-bold mb-4 p-3"> {/* Title */}
        Enter the email associated with your account to reset your password.
      </h6>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 mb-4"
        value={email} // Bind input value to state
        onChange={(e) => setEmail(e.target.value)} // Handle input change
      />
      <button
        type="submit"
        className="bg-orange font-bold text-gray p-2"
        onClick={handleResetPassword} // Handle password reset button click
      >
        Continue
      </button>
    </div>
  );
};

export default ForgotPassword; 