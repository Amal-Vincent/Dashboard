$.widget.bridge('uibutton', $.ui.button);
$(function() {
  $(".dial").knob({
    'readOnly': true
  });
});
$(function() {
  $('input[name="daterange"]').daterangepicker();
});
$(function() {

  //get the line chart canvas
  var ctx = $("#myChart");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "Sleep score",
      data: [5, 5, 1, 4, 2, 2, 5, 3, 1, 5],
      borderColor: "lightblue",
      fill: false,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: false,
      position: "top",
      text: "Line Graph",
      fontSize: 18,
      fontColor: "#111"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});
/*$("#dims-spark").sparkline([7,7,7,9,9,13,22,21,20,11], {
type: 'line',
chartRangeMin: 7,
chartRangeMax: 35,
width:150,
height:150,
chartRangeMinX: 0,
chartRangeMaxX: 10});
$("#sbd-spark").sparkline([7,7,7,9,9,13,15,3,14,7], {
type: 'line',
chartRangeMin: 3,
chartRangeMax: 15,
width:150,
height:150,
chartRangeMinX: 0,
chartRangeMaxX: 10});
$("#da-spark").sparkline([7,7,7,9,9,13,15,3,14,7], {
type: 'line',
chartRangeMin: 3,
chartRangeMax: 15,
width:150,
height:150,
chartRangeMinX: 0,
chartRangeMaxX: 10});
$("#swtd-spark").sparkline([7,7,7,9,9,13,22,21,20,11], {
type: 'line',
chartRangeMin: 7,
chartRangeMax: 35,
width:150,
height:150,
chartRangeMinX: 0,
chartRangeMaxX: 10});
$("#does-spark").sparkline([7,7,7,9,9,13,22,21,20,11], {
type: 'line',
chartRangeMin: 7,
chartRangeMax: 35,
width:150,
height:150,
chartRangeMinX: 0,
chartRangeMaxX: 10});
$("#shy-spark").sparkline([7,7,7,9,9,3,2,2,2,7], {
type: 'line',
chartRangeMin: 2,
chartRangeMax: 10,
width:150,
height:150,
chartRangeMinX: 0,
chartRangeMaxX: 10});
$("#total-spark").sparkline([42,66,32,41,56,72,81,42,31,42], {
type: 'line',
chartRangeMin: 26,
chartRangeMax: 130,
width:150,
height:150,
chartRangeMinX: 0,
chartRangeMaxX: 10});*/
$(function() {

  //get the line chart canvas
  var ctx = $("#dims-spark");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "DIMS last 10 assessments",
      data: [7,7,7,9,9,13,22,21,20,11],
      borderColor: "lightblue",
      fill: true,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "DIMS last 10 assessments",
      fontSize: 18,
      fontColor: "#ffffff"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});

$(function() {

  //get the line chart canvas
  var ctx = $("#sbd-spark");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "SBD last 10 assessments",
      data: [7,7,7,9,9,13,15,3,14,7],
      borderColor: "lightblue",
      fill: true,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "SBD last 10 assessments",
      fontSize: 18,
      fontColor: "#ffffff"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});
$(function() {

  //get the line chart canvas
  var ctx = $("#da-spark");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "DA last 10 assessments",
      data: [7,7,7,9,9,13,15,3,14,7],
      borderColor: "lightblue",
      fill: true,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "DA last 10 assessments",
      fontSize: 18,
      fontColor: "#ffffff"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});
$(function() {

  //get the line chart canvas
  var ctx = $("#swtd-spark");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "SWTD last 10 assessments",
      data: [7,7,7,9,9,13,22,21,20,11],
      borderColor: "lightblue",
      fill: true,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "SWTD last 10 assessments",
      fontSize: 18,
      fontColor: "#ffffff"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});
$(function() {

  //get the line chart canvas
  var ctx = $("#does-spark");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "DOES last 10 assessments",
      data: [7,7,7,9,9,13,22,21,20,11],
      borderColor: "lightblue",
      fill: true,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "DOES last 10 assessments",
      fontSize: 18,
      fontColor: "#ffffff"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});
$(function() {

  //get the line chart canvas
  var ctx = $("#shy-spark");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "SHY last 10 assessments",
      data: [7,7,7,9,9,3,2,2,2,7],
      borderColor: "lightblue",
      fill: true,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "SHY last 10 assessments",
      fontSize: 18,
      fontColor: "#ffffff"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});
$(function() {

  //get the line chart canvas
  var ctx = $("#total-spark");
  //x-axis
  array = new Array();
  for (i = 1; i < 11; i++) {
    array[i - 1] = i;
  }

  //line chart data
  var data = {
    labels: array,
    datasets: [{
      label: "TOTAL last 10 assessments",
      data: [42, 66, 32, 41, 56, 72, 81, 42, 31, 42],
      borderColor: "lightblue",
      fill: true,
      lineTension: 0,
    }]
  };

  //options
  var options = {
    responsive: true,
    title: {
      display: true,
      position: "top",
      text: "TOTAL last 10 assessments",
      fontSize: 18,
      fontColor: "#ffffff"
    },
    legend: {
      display: false
    },

  };

  //create Chart class object
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options
  });
});
