import React, { createContext, useContext } from "react";
import { ToastContainer, toast, Slide, type TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext({ notify: (message: string, type: TypeOptions) => { } });

type Props = {
	children: React.ReactNode;
	types?: TypeOptions;
};

export function NotificationProvider({ children, types }: Props) {
    const notify = (message: string, type = types) => {
        toast(message, {
            position: "top-center",
            autoClose: 5000,
            type: type,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "colored",
            transition: Slide,
        });
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
            {children}
            <ToastContainer />
        </NotificationContext.Provider>
    );
}

export const useNotification = () => useContext(NotificationContext);
