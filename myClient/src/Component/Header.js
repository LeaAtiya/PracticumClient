import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { cleanWorker } from "./Services/WorkerService";
import { useDispatch } from "react-redux";


const Header = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        <BottomNavigationAction label="Home Page" icon={<Home />} onClick={() => { navigate("/homepage"); setValue(0) }} value={0} />
        <BottomNavigationAction label="Workers " icon={<ReceiptLongIcon />} onClick={() => { navigate("/workers"); setValue(1) }} value={1} />
        <BottomNavigationAction label="Add New Worker" icon={<PersonAddIcon />} onClick={() => { dispatch(cleanWorker()); navigate("/addWorker"); setValue(3) }} value={3} />
        <BottomNavigationAction label="Add Role" icon={<DataSaverOnIcon />} onClick={() => { navigate("/addRole"); setValue(4) }} value={4} />
      </BottomNavigation>

    </div>
  );
}

export default Header;