import React, { useContext, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

// Define type for the toast message
type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

// Define type for the AppContext
type AppContext = {
  showToast: (toastMessage: ToastMessage) => void; // Function to show toast message
  isLoggedIn: boolean; // Flag to indicate if user is logged in
};

// Create the AppContext
const AppContext = React.createContext<AppContext | undefined>(undefined);

// Define the AppContextProvider component
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode; // Children components
}) => {
  // State for toast message
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  // UseQuery hook to validate token and check if user is logged in
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        // Provide showToast function and isLoggedIn flag in the context
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        isLoggedIn: !isError, // Set isLoggedIn based on whether there is an error
      }}
    >
      {/* Render Toast component if toast message exists */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children} {/* Render children components */}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext; // Return AppContext
};
