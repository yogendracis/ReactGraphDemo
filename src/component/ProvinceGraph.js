import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
//import provinceData from './provinceData';
import Chart from 'chart.js/auto';
import { database, ref, onValue, orderByChild, equalTo, get, query } from '../firebase'

const ProvinceGraph = () =>
{
  const graphJobdata = {
    provinces: [
      "Eastern Cape",
      "Free State",
      "Gauteng",
      "KwaZulu-Natal",
      "Limpopo",
      "Mpumalanga",
      "North West",
      "Northern Cape",
      "Western Cape"
    ],
    availableJobsData: [100, 120, 200, 150, 80, 90, 110, 70, 180],
    appliedJobsData: [80, 100, 150, 120, 60, 70, 90, 50, 130]
  }


  const data = {
    labels: graphJobdata.provinces,
    datasets: [
      {
        label: 'Available Jobs',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        // data: provinceData.availableJobs,
        data: graphJobdata.appliedJobsData,
      },
      {
        label: 'Applied Jobs',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        // data: provinceData.appliedJobs,
        data: graphJobdata.appliedJobsData,
      },
    ],
  };

  useEffect(() =>
  {
    const dbRef = ref(database, 'opportunityAvailable');

    // const querydata = query(dbRef, orderByChild('Mpumalanga'))
    const querydata = query(dbRef, equalTo('Province', 'Mpumalanga'))
    onValue(querydata, (snapshot) =>
    {
      console.log(snapshot)
    });

  }, []);




  return (
    <div>
      <h2>opportunity in South Africa Provinces</h2>
      <Bar data={data} />
    </div>
  );
};

export default ProvinceGraph;
