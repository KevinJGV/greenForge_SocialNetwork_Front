
type Props = {
	children: string;
	refObject?: React.RefObject<HTMLButtonElement>;
	classN?: string;
	form?: string;
	type?: "button" | "submit" | "reset";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function button({ children, refObject, classN, form, type, onClick }: Props) {
	return (
		<button
			className={`cursor-pointer inline-block rounded-full bg-secondary-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-secondary-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-secondary-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-secondary-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0 ${classN}`}
			type={type}
			onClick={onClick}
			form={form}
			ref={refObject}
		>
			{/* <div
				role="status"
				className="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
			>
				<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
					Loading...
				</span>
			</div> */}
			{children}
		</button>
	);
}
