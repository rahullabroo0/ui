import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import "../index.css";
import { Link } from "react-router-dom";
// import MyTable from './mytable';

  
export default function Page() {
  return (
    <div style={{ display: 'block', padding: 30, alignItems: "center" }} >
      <h4>How to use Pagination Component in ReactJS?</h4>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        sx={{ height: 100 }}
      >
        <Box p={1} bgcolor="grey.300">
          Username
        </Box>
        <Box p={1} bgcolor="grey.300">
        Email
        </Box>
        <Box p={1} bgcolor="grey.300">
          Login Time
        </Box>
        <Box p={1} bgcolor="grey.300">
          Logout Time
        </Box>
        <Box p={1} bgcolor="">
          <Button variant="contained" color="primary" component={Link} to={"/mytable"}>
            View Details
          </Button>
          {/* <Link to={"MyTable"} className="but but-primary">view</Link> */}
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        sx={{ height: 100 }}
      >
        <Box p={1} bgcolor="grey.300">
          Username
        </Box>
        <Box p={1} bgcolor="grey.300">
        Email
        </Box>
        <Box p={1} bgcolor="grey.300">
          Login Time
        </Box>
        <Box p={1} bgcolor="grey.300">
          Logout Time
        </Box>
        <Box p={1} bgcolor="">
          <Button variant="contained" color="primary" >
            View Details
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        sx={{ height: 100 }}
      >
        <Box p={1} bgcolor="grey.300">
          Username
        </Box>
        <Box p={1} bgcolor="grey.300">
        Email
        </Box>
        <Box p={1} bgcolor="grey.300">
          Login Time
        </Box>
        <Box p={1} bgcolor="grey.300">
          Logout Time
        </Box>
        <Box p={1} bgcolor="">
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        p={1}
        m={1}
        bgcolor="background.paper"
        sx={{ height: 100 }}
      >
        <Box p={1} bgcolor="grey.300">
          Username
        </Box>
        <Box p={1} bgcolor="grey.300">
        Email
        </Box>
        <Box p={1} bgcolor="grey.300">
          Login Time
        </Box>
        <Box p={1} bgcolor="grey.300">
          Logout Time
        </Box>
        <Box p={1} bgcolor="">
          <Button variant="contained" color="primary" onClick={() => { console.log('onClick'); }}>
            View Details
          </Button>
        </Box>
      </Box>


      <Pagination count={10} />
    </div>
  );
}