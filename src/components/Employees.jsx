import { useState } from 'react';
import femaleProfile from '../images/femaleProfile.jpeg';
import maleProfile from '../images/maleProfile.jpeg';

const Employees = () => {
	const [selectedTeam, setTeam] = useState('TeamB');
	const [employees, setEmployees] = useState([
		{
			id: 1,
			fullName: 'Bob Jones',
			designation: 'JavaScript Developer',
			gender: 'male',
			teamName: 'TeamA',
		},
		{
			id: 2,
			fullName: 'Jill Bailey',
			designation: 'Node Developer',
			gender: 'female',
			teamName: 'TeamA',
		},
		{
			id: 3,
			fullName: 'Gail Shepherd',
			designation: 'Java Developer',
			gender: 'female',
			teamName: 'TeamA',
		},
		{
			id: 4,
			fullName: 'Sam Reynolds',
			designation: 'React Developer',
			gender: 'male',
			teamName: 'TeamB',
		},
		{
			id: 5,
			fullName: 'David Henry',
			designation: 'DotNet Developer',
			gender: 'male',
			teamName: 'TeamB',
		},
		{
			id: 6,
			fullName: 'Sarah Blake',
			designation: 'SQL Server DBA',
			gender: 'female',
			teamName: 'TeamB',
		},
		{
			id: 7,
			fullName: 'James Bennet',
			designation: 'Angular Developer',
			gender: 'male',
			teamName: 'TeamC',
		},
		{
			id: 8,
			fullName: 'Jessica Faye',
			designation: 'API Developer',
			gender: 'female',
			teamName: 'TeamC',
		},
		{
			id: 9,
			fullName: 'Lita Stone',
			designation: 'C++ Developer',
			gender: 'female',
			teamName: 'TeamC',
		},
		{
			id: 10,
			fullName: 'Daniel Young',
			designation: 'Python Developer',
			gender: 'male',
			teamName: 'TeamD',
		},
		{
			id: 11,
			fullName: 'Adrian Jacobs',
			designation: 'Vue Developer',
			gender: 'male',
			teamName: 'TeamD',
		},
		{
			id: 12,
			fullName: 'Devin Monroe',
			designation: 'Graphic Designer',
			gender: 'male',
			teamName: 'TeamD',
		},
	]);

	const handleTeamSelectionChange = (e) => {
		setTeam(e.target.value);
	};

	const handleEmployeeCardClick = (e) => {
		e.preventDefault();
		console.log('clicked');

		const transformedEmployees = employees.map((employee) =>
			employee.id === parseInt(e.currentTarget.id)
				? employee.teamName === selectedTeam
					? { ...employee, teamName: '' }
					: { ...employee, teamName: selectedTeam }
				: employee
		);

		setEmployees(transformedEmployees);
	};

	return (
		<>
			<label
				htmlFor="teams"
				className="text-center mt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
			>
				Select a team
			</label>
			<div className="flex justify-center">
				<select
					id="teams"
					className="content-center mb-6 max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					value={selectedTeam}
					onChange={handleTeamSelectionChange}
				>
					<option>Choose a team</option>
					<option value="TeamA">Team A</option>
					<option value="TeamB">Team B</option>
					<option value="TeamC">Team C</option>
					<option value="TeamD">Team D</option>
				</select>
			</div>
			<main className="grid grid-cols-4 gap-4">
				{employees.map((employee) => (
					<div
						key={employee.id}
						onClick={handleEmployeeCardClick}
						className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
					>
						{employee.gender === 'male' ? (
							<img src={maleProfile} className="mx-auto" />
						) : (
							<img src={femaleProfile} className="mx-auto" />
						)}
						<h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
							<b className="font-thin">Full Name: </b>
							{employee.fullName}
						</h5>
						<p className="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">
							<b className="font-thin">Designation: </b>
							{employee.designation}
						</p>
					</div>
				))}
			</main>
		</>
	);
};

export default Employees;
