import React from "react";

type Props = {
	forProp: string;
	label: string;
    type: string;
	isRequired?: boolean;
	pattern?: string;
	placeholderText: string;
	svg: React.ReactNode;
	textHelper?: string;
	fatherClass?: string;
	inputClass?: string;
	labelClass?: string;
	textHelperClass?: string;
};


export default function InputTextForm({
	forProp,
	label,
    type,
	isRequired,
	pattern,
	placeholderText,
	svg,
	textHelper,
	fatherClass,
	inputClass,
    labelClass,
    textHelperClass
}: Props) {
	return (
		<div className={`${fatherClass} relative`}>
			<input
				className={`peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-transparent focus:border-secondary-500 ${inputClass}`}
				type={type}
				placeholder={placeholderText}
				name={forProp}
				id={forProp}
				required={isRequired}
				pattern={pattern}
			/>
			<label
				className={`absolute text-gray-500 text-base duration-150 transform -translate-y-3 scale-75 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-secundary ${labelClass}`}
				htmlFor={forProp}
			>
				{label}
			</label>
			{svg}
			{textHelper ? (
				<label className={`pt-1 block text-sm ${textHelperClass}`}>
					{" "}
					{textHelper}{" "}
				</label>
			) : null}
		</div>
	);
}