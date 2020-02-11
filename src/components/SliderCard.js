import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Slider
} from "@material-ui/core";

// const marks = [
//   {
//     value: 0,
//     label: "0"
//   },
//   {
//     value: 10,
//     label: "10"
//   },
//   {
//     value: 20,
//     label: "20"
//   },
//   {
//     value: 30,
//     label: "30"
//   },
//   {
//     value: 40,
//     label: "40"
//   },
//   {
//     value: 50,
//     label: "50"
//   },
//   {
//     value: 60,
//     label: "60"
//   },
//   {
//     value: 70,
//     label: "70"
//   },
//   {
//     value: 80,
//     label: "80"
//   },
//   {
//     value: 90,
//     label: "90"
//   },
//   {
//     value: 100,
//     label: "100"
//   }
// ];

function valuetext(value) {
  return `${value}`;
}

//function valueLabelFormat(value) {
//  return marks.findIndex(mark => mark.value === value) + 1;
//}

export default function SliderCard() {
  return (
    <Card
      style={{ width: "300px", height: "200px", margin: "10px" }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h6">Master Volume</Typography>
        <Typography variant="body1">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
        ></Slider>
      </CardActions>
    </Card>
  );
}
