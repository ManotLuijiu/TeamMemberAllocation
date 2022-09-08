import { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import close from '../assets/close.svg';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import logo from '../assets/means_logo.svg';
import menu from '../assets/menu.svg';
import { navLinks } from '../constant';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="w-full flex py-6 justify-between items-center navbar">
			<img src={logo} alt="teammember" className="w-[124px] h-[32px]" />
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-body font-normal cursor-pointer text-[16px] ${
							index === navLinks.lenght - 1 ? 'mr-0' : 'mr-10'
						} text-gray-600 dark:text-white`}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>
			<ThemeToggle />
			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : open}
					alt="menu"
					className="w-[28px] h-[28px] object-contain text-gray-600"
					onClick={() => setToggle((prev) => !prev)}
				/>

				{toggle ? <GrClose /> : <FaBars />}

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-body font-normal cursor-pointer text-[16px] ${
									index === navLinks.length - 1 ? 'mr-0' : 'mb-4'
								} text-white`}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
