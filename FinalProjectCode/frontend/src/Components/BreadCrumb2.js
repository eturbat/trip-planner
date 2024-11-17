import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function CustomSeparator2() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/flights" >
      Flights
    </Link>,
     <Typography key="3" color="text.primary">
     Hotels
    </Typography>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/restaurants"
    >
      Restaurants
    </Link>
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
