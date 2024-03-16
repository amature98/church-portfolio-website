import React, { useState } from 'react';
// Import MUI Components
import {
	Box,
	TableHead,
	TableBody,
	TableCell,
	TableRow,
	Typography,
	tableCellClasses,
	TableContainer,
	Paper,
	Table,
	TablePagination,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// Creating styled table components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.text.primary,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: alpha(theme.palette.primary.main, 0.15),
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function DistrictTable({ DistrictArray }) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<>
			<Box sx={{ width: '80vw', mx: 'auto', my: 8 }}>
				<Box
					component='div'
					sx={{ py: 4, textAlign: 'center' }}>
					<Typography
						gutterBottom
						variant='h3'
						color='text.primary'>
						Discover our district fellowships
					</Typography>
					<Typography
						gutterBottom
						variant='body2'
						color='text.primary'>
						Our district fellowships take place every week on Thursday from 7pm to 8pm
						usually at one of the members residence.These are our districts and their
						patrons.
					</Typography>
				</Box>

				<TableContainer
					sx={{ maxHeight: 440 }}
					component={Paper}
					elevation={6}>
					<Table
						stickyHeader
						aria-label='sticky table'>
						<TableHead>
							<TableRow>
								<StyledTableCell>
									<Typography variant='h6'>District Name</Typography>
								</StyledTableCell>
								<StyledTableCell>
									<Typography variant='h6'>Patron</Typography>
								</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{DistrictArray.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage,
							).map((districtInfo, index) => (
								<StyledTableRow key={index}>
									<TableCell>
										<Typography variant='body2'> {districtInfo.district} </Typography>
									</TableCell>
									<TableCell>
										<Typography variant='body2'> {districtInfo.elder} </Typography>
									</TableCell>
								</StyledTableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 15, 20, 25]}
					component='div'
					count={DistrictArray.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Box>
		</>
	);
}

export default DistrictTable;
