import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { loggedOutUser } from '../../Slices/UserSlice';

const DropDown = ({user_data}) => {


    const dispatch = useDispatch();
    const log_out = (user) => {
        console.log("dispatching add to cart",user)
        dispatch(loggedOutUser()); 
        return;
    }

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      {user_data.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">Order History</Dropdown.Item>
        <Dropdown.Item onClick={log_out}>LogOut</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown