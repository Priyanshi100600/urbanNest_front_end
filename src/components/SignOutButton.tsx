<<<<<<< HEAD

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
=======
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css";

const SignOutButton = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");

      showToast({ message: "Signed out Successfully!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
>>>>>>> origin/master
      showToast({ message: error.message, type: "ERROR" });
    },
  });

<<<<<<< HEAD
  // Function to handle sign out button click
  const handleClick = () => {
    // Trigger the sign out mutation
=======
  const handleClick = () => {
>>>>>>> origin/master
    mutation.mutate();
  };

  return (
<<<<<<< HEAD
    // Sign out button
    <button
      onClick={handleClick} // Handle button click
      className="text-orange shadow-md px-3 font-bold bg-white hover:bg-gray-100" // Button styling
    >
      Sign Out {/* Button text */}
=======
    <button
      onClick={handleClick}
      className="text-orange shadow-md px-3 font-bold bg-white hover:bg-gray-100"
    >
      Sign Out
>>>>>>> origin/master
    </button>
  );
};

<<<<<<< HEAD
export default SignOutButton; 
=======
export default SignOutButton;
>>>>>>> origin/master
