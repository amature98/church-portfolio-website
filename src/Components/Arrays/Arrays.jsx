// Importing the images
import Image1 from '../../Images/rev.jpg';
import Image2 from '../../Images/elder1.jpg';
import Image3 from '../../Images/elder2.jpg';
import Image4 from '../../Images/elder3.jpg';
// Creating an array of Districts
export const DistrictArray = [
	{ district: 'Wendo', elder: 'Elder Paul Thairu' },
	{ district: 'Utugi', elder: 'Elder David Muiruri' },
	{ district: 'Ebenezer', elder: 'Elder Maina' },
	{ district: 'Witikio', elder: 'Elder Eustace Kiarie' },
	{ district: 'Hekima', elder: 'Elder ' },
	{ district: 'Mwangaza', elder: 'Elder ' },
	{ district: 'Baraka', elder: 'Elder Zackariah Kori' },
	{ district: 'Shammah', elder: 'Elder Samuel Kigotho' },
	{ district: 'Ushindi', elder: 'Elder John Kihumba' },
	{ district: 'Kirigiriro', elder: 'Elder Joseph Mugweru' },
	{ district: 'Kirathima', elder: 'Elder Ann Njoroge' },
	{ district: 'Highway', elder: 'Elder ' },
];
// An array of the leaders annd their props
export const Leaders = [
	{
		name: 'Rev. Emmanuel Nkoitiko',
		title: 'Session Moderator',
		image: Image1,
	},
	{
		name: 'Elder Caroline Gichuki',
		title: 'Session Clerk',
		image: Image2,
		congregation: 'Neema',
	},
	{
		name: 'Elder David Muiruri',
		title: 'Session Co-Clerk',
		image: Image3,
		congregation: 'Mukinyi',
	},
	{
		name: 'Elder Grace Benson',
		title: 'Finance Chair',
		image: Image4,
		congregation: 'Highway',
	},
	{
		name: 'Elder Simon Kigotho',
		title: 'Parish Treasurer',
		image: Image2,
		congregation: 'BHC',
	},
	{
		name: 'Elder Eng. ',
		title: 'Parish Treasurer',
		image: Image2,
		congregation: 'Neema',
	},
	{
		name: 'Elder John Kihumba',
		image: Image3,
		congregation: 'BHC',
	},
	{
		name: 'Elder Zachariah Kori',
		title: 'Registrar - BHC',
		image: Image2,
		congregation: 'BHC',
	},
	{
		name: 'Elder David Mwangi',
		image: Image3,
		title: 'Registrar - Neema Church',
		congregation: 'Neema'
	},
];

export const Beliefs = [
	{
		title: 'Mission',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Vision',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	},
	{
		title: 'Theme',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	},
];

export const mukinyiServiceArray = [
	{ time: '8:30am - 10:30am', title: 'English Service' },
	{ time: '10:40am - 1:00pm', title: 'Kiswahili Service' },
	{ time: '10:30am - 12:30pm', title: 'Youth Service' },
	{ time: '8:30am - 10:00am', title: 'Church School' },
];

export const neemaServiceArray = [
	{ time: '8:30am - 10:30am', title: 'English Service' },
	{ time: '10:40am - 1:00pm', title: 'Kiswahili Service' },
	{ time: '8:30am - 10:00am', title: 'Church School' },
];

export const bhcServiceArray = [
	{ time: '8:30am - 10:30am', title: 'English Service' },
	{ time: '10:40am - 1:00pm', title: 'Kiswahili Service' },
	{ time: '8:00am - 9:00am', title: 'Church School' },
];

export const highwayServiceArray = [
	{ time: '8:30am - 10:30am', title: 'English Service' },
	{ time: '10:40am - 1:00pm', title: 'Kiswahili Service' },
	{ time: '8:30am - 10:00am', title: 'Church School' },
];
