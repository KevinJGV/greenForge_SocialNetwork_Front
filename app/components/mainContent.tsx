
type Props = {
	children: React.ReactNode;
};

const MainContent = ({ children }: Props) => {
	return (
		<article className="flex-1 overflow-y-auto pl-64 m-10">
			{children}
		</article>
	);
};


export default MainContent;
