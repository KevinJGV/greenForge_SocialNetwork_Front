import type { AxiosResponse } from "axios";
import React, { createContext, useContext } from "react";
import { ToastContainer, toast, Slide, type TypeOptions, type Id } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
	children: React.ReactNode;
};

type ToastPromiseParamsCustom = {
	pendingMsg: string;
	successMsg: string;
	errorMsg: string;
};

const NotificationContext = createContext({
	notify: (
		message: string,
		type: TypeOptions = "default",
		toastId: Id | undefined
	) => {},
});

const PromisedNotificationContext = createContext({
	notify: (
		promise: Promise<AxiosResponse>,
		toastParams: ToastPromiseParamsCustom,
		toastId: Id | undefined
	) => {},
});

export function NotificationProvider({ children }: Props) {
	const notify = (message: string, type: TypeOptions = "default", toastId: Id | undefined) => {
		toast(message, {
			toastId: toastId,
			type: type,
			theme: "colored",
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: false,
			pauseOnHover: true,
			draggable: false,
			transition: Slide,
		});
	};

	return (
		<NotificationContext.Provider value={{ notify }}>
			{children}
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="colored"
				transition={Slide}
			/>
		</NotificationContext.Provider>
	);
}

export function PromisedNotificationProvider({ children }: Props) {
	const notify = (
		promise: Promise<AxiosResponse>,
		{ pendingMsg, successMsg, errorMsg }: ToastPromiseParamsCustom,
		toastId: Id | undefined
	) => {
		toast.promise(
			promise.then((res) => {
				if (res.data?.message) {
					toast.success(res.data.message);
				} else {
					toast.success(successMsg);
				}
				return res;
			}),
			{
				pending: pendingMsg,
				success: successMsg,
				error: {
					render({
						data,
					}: {
						data: { response: { data: { error: string } } };
					}) {
						if (data?.response?.data?.error) {
							return data.response.data.error;
						}
						return errorMsg;
					},
				},
			},
			{
				toastId: toastId,
				theme: "colored",
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: false,
				transition: Slide,
			}
		);
	};

	return (
		<PromisedNotificationContext.Provider value={{ notify }}>
			{children}
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				pauseOnHover
				theme="colored"
				transition={Slide}
			/>
		</PromisedNotificationContext.Provider>
	);
}

export const useNotification = () => useContext(NotificationContext);
export const usePromisedNotification = () =>
	useContext(PromisedNotificationContext);
