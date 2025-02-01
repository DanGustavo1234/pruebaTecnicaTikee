import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



const DefaultLayout = () => {
  return (
    <>
     <Tabs
        orientation="vertical"
        variant="scrollable"
        // value={value}
        // onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" />
        <Tab label="Item Two"  />
        <Tab label="Item Three"  />
      </Tabs>
      <p  >
        Item One
      </p>
      <a  >
        Item Two
      </a>
      
    </>
  )
}

export default DefaultLayout
