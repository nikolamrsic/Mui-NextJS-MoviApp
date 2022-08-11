import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	

	components: {
		MuiPaginationItem: {
		  styleOverrides: {
			root: ({ ownerState }) => ({
			  ...(ownerState.variant === 'text' &&
				ownerState.color === 'secondary' && {
				  backgroundColor: 'transparent',
				  color: '#fff',
				  marginLeft:'25px'
				}),
			}),
		  },
		},
	  },

	palette: {
		primary: {
			main: '#1e1e26',
			mainT: 'rgb(30, 30, 38,0.1)',
			blackFift: 'rgba(0, 0, 0, 0.82)',
			dark: '#131319',
			black:'#151313'
		
		},
		secondary: {
			main: '#6A5CCE',
		},
		error: {
			main: red.A400,
		},
	},
	shape:{
		borderRadius:0
	},
});

export default theme;
