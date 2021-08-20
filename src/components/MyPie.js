/**
 * The pie chart that appears in the home tab showing the percentages of all haks
 */


import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';
import './MyPie.css';
import data from '../important/data.json';


const MyPie = () => {
  function HaksPie(){
    let count = [0, 0, 0]
    for (let item in data) {
      if (data[item].points[data[item].points.length-1] > data[item].points[data[item].points.length-2]) {
        count[0] += 1
      } else if (data[item].points[data[item].points.length-1] < data[item].points[data[item].points.length-2]) {
        count[1] += 1
      } else {count[2] += 1}
      }
      return count;
    }
  
  return (
    <div style={{ height: '150px', width: '100%'}}>
      <ChartDonut style={{fontFamily: "Varela Round"}}
        ariaDesc="Average number of pets"
        ariaTitle="Donut chart example"
        constrainToVisibleArea={true}
        data={[{ x: 'Up', y: HaksPie()[0]}, { x: 'Down', y: HaksPie()[1] }, { x: 'No Change', y: HaksPie()[2] }]}
        height={150}
        labels={({ datum }) => `${datum.x}: ${(datum.y/1.2).toFixed(2)}%`}
        legendData ={[{ name : 'עליה: ' + String(HaksPie()[0])}, { name : 'ירידה: ' + String(HaksPie()[1])}, { name : 'ללא שינוי: ' + String(HaksPie()[2])}]}
        legendOrientation="vertical"
        legendPosition="right"
        padding={{
          bottom: 20,
          left: 20,
          right: 145, // Adjusted to accommodate legend
          top: 20
        }}
        title= '120'
        subTitle = 'םיזוחאב יוניש' 
        width={300}
      />
    </div>
  )
};


export default MyPie;
