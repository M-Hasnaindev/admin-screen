import React, { useState } from "react"; 
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const About = () => {
    const [age, setAge] = useState(""); // Define the 'age' state
  const handleChange = (event) => {
    setAge(event.target.value); // Handle the state change when the value is selected
  };
  return (
    <div>
        <h1>Select</h1>
        <br />
        <br />
        <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default About;
