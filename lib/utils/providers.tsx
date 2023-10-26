import { ToastOptions, ToastPosition, Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const toastConfig: ToastOptions = {
    position: "bottom-right" as ToastPosition,
    style: {
      minWidth: "250px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
      backgroundColor: "#643f36",
      color: "white",
    },
    duration: 2000,

    ariaProps: {
      role: "alert",
      "aria-live": "polite",
    },
  };

  return (
    <>
      {children}
      <Toaster toastOptions={toastConfig} />
    </>
  );
};

export default Providers;
