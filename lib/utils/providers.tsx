import { ToastOptions, Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const toastConfig: ToastOptions = {
    style: {
      minWidth: "250px",
    },
    duration: 2000,
  };

  return (
    <>
      {children}
      <Toaster toastOptions={toastConfig} />
    </>
  );
};

export default Providers;
