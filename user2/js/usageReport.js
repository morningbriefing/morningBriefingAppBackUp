// Empty scaffold that will eventually hold all of the transformed data
let barChartData = {
  labels: [],
  datasets: [],
}

//Commented out just to show an example of the final structure of the barChartData
//object after data processing takes place.
// let barChartData = {
//   labels: ['2017', '2018'],
//   datasets: [
//     {
//       label: 'Accomplished',
//       backgroundColor: 'purple',
//       data: [314, 210]
//     },
//     {
//       label: 'Unaccomplished',
//       backgroundColor: 'red',
//       data: [101, 70]
//     }
//   ]
// };


let data = [
  {
  "year": "2017",
  "color":"#43c29e",
  "value":314,
  "text":"Accomplish"
  },
  {
  "year":"2017",
  "color":"#c25a43",
  "value":101,
  "text":"Unaccomplish"
  },
  {
  "year": "2018",
  "color":"#43c29e",
  "value":210,
  "text":"Accomplish"
  },
  {
  "year": "2018",
  "color":"#c25a43",
  "value":70,
  "text":"Unaccomplish"
  },
]

data.forEach((val) => {
  // Add the label if it doesn't exist already
  if(!barChartData.labels.includes(val.year)) {
    barChartData.labels.push(val.year);
  }

  // Search for the correct dataset
  let valsDataset;
  // let datasetName = `Dataset ${val.color}`;
  let datasetName = `${val.text}`;
  barChartData.datasets.forEach((dataset) => {
    if(dataset.label === datasetName) valsDataset = dataset;
  });

  // Add the dataset if it doesn't exist already
  if(valsDataset === undefined) {
    valsDataset = {
      label: datasetName,
      backgroundColor: val.color,
      data: []
    }
    barChartData.datasets.push(valsDataset);
  }

  // Find the correct index of the data array for this value, by looking up the year
  let valIndex = barChartData.labels.indexOf(val.year);
  // Set the correct data attribute according to val.value
  valsDataset.data[valIndex] = val.value;
});



		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myBar = new Chart(ctx, {
				type: 'bar',
				data: barChartData,
				options: {
					title: {
						display: true,
						text: 'Unaccomplished vs Accomplished Tasks'
					},
					tooltips: {
						mode: 'index',
						intersect: false
					},
					responsive: true,
					scales: {
						xAxes: [{
							stacked: true,
						}],
						yAxes: [{
							stacked: true
						}]
					}
				}
			});
		};
