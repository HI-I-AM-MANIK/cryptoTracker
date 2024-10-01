import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import "./style.css";
import List from '../List';
export default function LabTabs({ coins }) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <div style={{ color: 'var(--white)' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </Box>
        <TabPanel value="grid">
          <div className="grid-flex">
            {/* Handle undefined or empty coins array */}
            {coins && coins.length > 0 ? (
              coins.map((coin, i) => {
                return (
                  <Grid coin= {coin} id ={i}/>
                );
              })
            ) : (
              <p>No coins available</p> // Fallback if coins is empty
            )}
          </div>
        </TabPanel>
        <TabPanel value="list">
        <table className='list-flex'>
            {/* Handle undefined or empty coins array */}
            {coins && coins.length > 0 ? (
              coins.map((item, i) => {
                return (
                  <List coin= {item} id={i}/>
                );
              })
            ) : (
              <p>No coins available</p> // Fallback if coins is empty
            )}
          </table>
        
        </TabPanel>
      </TabContext>
    </div>
  );
}
