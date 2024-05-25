import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import UserTable from "./usertable";
import DashboardStats from './admincard';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  export default function CSSGrid() {
    return (
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={9}>
          
          <Box gridColumn="span 12">
            <DashboardStats />
          </Box>
          <Box gridColumn="span 12">
            <div>
                <UserTable/>
            </div>
          </Box>
        </Box>
      </Box>
    );
  }