let options = {
  chart: {
    type: 'line',
    height: "280px",
    fontFamily: "Nunito",
    toolbar: {
      show: false
    }
  },
  markers: {
    size: 5,
    colors: ["#6e00ff"],
  },
  grid: {
    strokeDashArray: 10,
  },
  stroke: {
    curve: "smooth",
    width: 4,
    colors: ["#6e00ff"],
  },
  series: [{
    name: 'engagement',
    data: [4, 3, 10, 8, 29, 19, 22, 8, 11, 20, 14, 7]
  }],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
  }
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();



// Radial Bar Chart
let optionsRadial = {
  series: [67],
  chart: {
    height: 280,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '65%',
      }, 
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          formatter: function(val) {
            return parseInt(val);
          },
          color: '#777',
          fontSize: '40px',
          fontWeight: 500,
        }
      }
    },
  },
  stroke: {
    lineCap: "round",
  },
  fill: {
    colors: ["#ffb100"],
  }
};
let chartRadial = new ApexCharts(document.querySelector("#emailChart"), optionsRadial);
chartRadial.render();
