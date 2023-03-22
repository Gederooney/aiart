import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";
import { useRef } from "react";
import useHeaderRef from "@/hooks/useHeaderRef";

const Header = () => {
	const headerRef = useRef<HTMLElement | null>(null);
	useHeaderRef(headerRef);

	return (
		<header
			ref={headerRef}
			className='sticky top-0 z-50 transition-all ease-in-out duration-500 text-gray-800 shadow-lg'>
			<div className='container'>
				<div className='flex justify-between items-center py-2'>
					<div>
						<Link
							href='/'
							className='flex items-center'>
							<Image
								src='/logo.svg'
								alt='IAARTS'
								width={30}
								height={30}
							/>
							<span className='text-3xl font-bold tracking-tighter leading-none'>
								IAARTS
							</span>
						</Link>
					</div>
					<div>
						<nav>
							<ul className='flex items-center'>
								<li>
									<Link href='/categories'>Categories</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div>
						<CartIcon />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
