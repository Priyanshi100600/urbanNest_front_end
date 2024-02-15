
import { useMutation, useQueryClient } from "react-query"; 
import * as apiClient from "../api-client"; 
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css"; 

// SignOutButton component declaration
const SignOutButton = () => {
  const { showToast } = useAppContext(); // Accessing showToast function from app context
  const queryClient = useQueryClient(); // Accessing query client for cache management

  // Mutation hook for signing out
  const mutation = useMutation(apiClient.signOut, {
    // onSuccess callback when sign out is successful
    onSuccess: async () => {
      // Invalidate the "validateToken" query to reflect sign out state
      await queryClient.invalidateQueries("validateToken");
      // Show success message
      showToast({ message: "Signed out Successfully!", type: "SUCCESS" });
    },
    // onError callback when an error occurs during sign out
    onError: (error: Error) => {
      // Show error message
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  // Function to handle sign out button click
  const handleClick = () => {
    // Trigger the sign out mutation
    mutation.mutate();
  };

  return (
    // Sign out button
    <button
      onClick={handleClick} // Handle button click
      className="text-orange shadow-md px-3 font-bold bg-white hover:bg-gray-100" // Button styling
    >
      Sign Out {/* Button text */}
    </button>
  );
};

export default SignOutButton; 