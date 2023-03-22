import { useEffect, MutableRefObject, useState } from "react";

function useHeaderRef<T extends HTMLElement>(
	ref: MutableRefObject<HTMLElement | null>
) {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		const header = ref.current;
		if (!header) return;

		if (isScrolled) {
			ref.current?.classList.add("bg-gray-800");
			ref.current?.classList.add("text-white");
			ref.current?.classList.remove("text-gray-800");
		} else {
			ref.current?.classList.remove("bg-gray-800");
			ref.current?.classList.remove("text-white");
			ref.current?.classList.add("text-gray-800");
		}
		const handleScroll = () => {
			if (window.scrollY > 0) {
				if (!isScrolled) setIsScrolled(true);
			} else {
				if (isScrolled) setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [ref, isScrolled]);
}

export default useHeaderRef;
