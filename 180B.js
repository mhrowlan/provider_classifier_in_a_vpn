
function plot_feature_importances() { Highcharts.chart('features', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Features Ranked by Importance'
    },
    xAxis: {
        categories: [
        'smoothed_mean_delay_10s',
		'upload_bytes_cv',
		'sent_mean_size',
        'smoothed_mean_delay_60s',
		'received_small_prop',
		'received_large_prop',
		'received_mean_size',
		'large_packet_ratio',
		'sent_small_prop',
        'max_frequency_prominence',
        'small_packet_ratio',
	'download_bytes_cv',
        'medium_packet_ratio']
,
        title: {
            text: 'Features'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Feature Importance (%)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Importance',
        data: [16.575313, 11.746197, 11.32997, 11.197422, 7.458614, 6.851336, 6.334201, 5.589548, 5.105438, 4.767989, 4.681443, 4.532762, 3.829766]
    }]
})};

function plotstackedhistogram() {
  Highcharts.chart('container6', {
      chart: {
          type: 'histogram'
      },
      title: {
          text: 'Streaming Providers: Packet Size Frequency'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          title: {
              text: 'Packet Sizes'
              },
  
          categories: [0, 200, 400, 600, 800, 
            1000, 1200, 1400, 1600],
          crosshair: true
      },
      yAxis: {
          min: 0,
          max:1,
          title: {
          text: 'Normalized Frequency'
          }
      },
      tooltip: {
          
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
        series: {
          dataLabels: {
              enabled: true
              
      

          }
      },
          column: {
          pointPadding: 0,
          borderWidth: 0,
          groupPadding: 0,
          shadow: false
          }
      },
      series: [{
          name: 'Amazon Prime',
          data: [0.293, 0.160, 0.081, 0.005, 0.006, 0.003, 0.425, 0.027],
          color: 'blue'
      
      }, {
        name: 'Youtube Live',
        data: [0.565, 0.004, 0.011, 0.002, 0.004, 0.002, 0.412, 0.000],
        color: 'red'
    
    }, 
    {
      name: 'Twitch',
      data: [0.217, 0.024, 0.055, 0.023, 0.016, 0.013, 0.651, 0.000],
      color: 'purple'
  
  },
  {
    name: 'Netflix',
    data: [0.295, 0.042, 0.027, 0.007, 0.006, 0.002, 0.615, 0.006],
    color: 'darkred'

  },
  {
    name: 'Youtube',
    data: [0.121, 0.013, 0.044, 0.006, 0.058, 0.005, 0.753, 0.000],
    color: 'rgb(225,15,0)'

  }]
      })};

function plotcolumn() {  Highcharts.chart('container', {

    chart: {
        type: 'column'
    },

    title: {
        text: 'Streaming Providers: Packet Size Frequency'
    },

    subtitle: {
        text: 'Hover over the providers for more information!'
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    xAxis: {
        categories: [0, 200, 400, 600, 800, 
			  1000, 1200, 1400, 1600],
        labels: {
            x: -10
        },title: {
              text: 'Packet Sizes'
              },
  
    },

    yAxis: {
        allowDecimals: true,
        title: {
            text: 'Normalized Frequency'
        }
    },

    series: [{
        name: 'Amazon Prime',
			data: [0.293, 0.160, 0.081, 0.005, 0.006, 0.003, 0.425, 0.027],
			color: 'blue'
    }, {
        name: 'Youtube Live',
		  data:  [0.565, 0.004, 0.011, 0.002, 0.004, 0.002, 0.412, 0.000],
		  color: 'red'
    }, {
       name: 'Twitch',
		data: [0.217, 0.024, 0.055, 0.023, 0.016, 0.013, 0.651, 0.000],
		color: 'purple'
    },{
	  name: 'Netflix',
	  data: [0.295, 0.042, 0.027, 0.007, 0.006, 0.002, 0.615, 0.006],
	  color: 'darkred'
  
	},
	{
	  name: 'Youtube',
	  data: [0.121, 0.013, 0.044, 0.006, 0.058, 0.005, 0.753, 0.000],
	  color: 'rgb(225,15,0)'
  
	}
    ]})};
function removeside(){
	var sidebar= document.getElementById("sidebar")
	sidebar.remove()
	
}

function treeexample(){
	Highcharts.chart('tree', {

  chart: {
    height: 400,
    inverted: true
  },

  title: {
    useHTML: true,
    text: 'Example Decision Tree'
  },

  series: [{
    type: 'organization',
    name: 'United Nations',
    keys: ['from', 'to'],
    data: [
      
      ['Director', 'ESU'],
      ['Director', 'CDS'],
      
      ['ESU', 'ESB'],
      ['ESU', 'DSSB'],
      ['CDS', 'EESB'],
      ['CDS', 'TSB'],
      ['CDS', 'SSB'],
      
      
      
      
    ],
    levels: [{
      level: 0,
      color: 'silver',
      dataLabels: {
        color: 'black'
      },
      height: 20
    }, {
      level: 1,
      color: 'silver',
      dataLabels: {
        color: 'black'
      },
      height: 20
    }, {
      level: 2,
      dataLabels: {
        color: 'black'
      },
      height: 20
    }, {
      level: 4,
      dataLabels: {
        color: 'black'
      },
      height: 20
    }],
    nodes: [{
      id: 'Director',
      title: null,
      name: 'Data',
      color: "#c9daf8ff",
           info: "Raw Data processed to enter the classification tree"

    }, {
      className: 'title',
      id: 'ESU',
      title: null,
      name: 'Engineered Feature',
      layout: 'hanging',
      color: "#6d9eebff",
      info: "The variety of different engineered features help classify each file into a certain class"
    }, {
      id: 'CDS',
      title: null,
      name: 'Engineered Feature',
      image: null,
     // layout: 'hanging',
      color: "#6d9eebff",
      info: "The variety of different engineered features help classify each file into a certain class"
    }, {
      id: 'ESB',
      title: null,
      name: 'Youtube',
      column: 2,
      layout: 'hanging',
      color: "#e10f00",
      info: "Classified Data"
    },  {
      id: 'DSSB',
      name: 'Twitch',
      column: 2,
      layout: 'hanging',
      color: "#b16eff",
      info: "Classified Data"
    }, {
      id: 'EESB',
      name: 'Netflix',
      column: 2,
      layout: 'hanging',
      color: "#ba020e",
      info: "Classified Data"
    },  {
      id: 'TSB',
      name: 'Youtube Live',
      column: 2,
      layout: 'hanging',
      color: "red",
      info: "Classified Data"
    },  {
      id: 'SSB',
      name: 'Amazon',
      column: 2,
      layout: 'hanging',
      color: "#00ade1",
      info: "Classified Data"
    }],
    colorByPoint: false,
    color: '#007ad0',
    dataLabels: {
      color: 'white',
    },
    borderColor: 'white',
    nodeWidth: 65,
    nodePadding: 0
  }],

  tooltip: {
    outside: true,
    formatter: function() {
      //debugger;
      return this.point.info;
    }
  }

});

}

function uploadappear() {
    var checkBox = document.getElementById("C1");
    var text = document.getElementById("text1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}

function downloadappear() {
    var checkBox = document.getElementById("C2");
    var text = document.getElementById("text2");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}



function init() { 

    console.log("inside")
    removeside();
    treeexample();
    plotcolumn();
	plot_feature_importances();
	
	uploadappear();
	downloadappear();
    //plotstackedhistogram();


}


document.addEventListener('DOMContentLoaded', init, false);
