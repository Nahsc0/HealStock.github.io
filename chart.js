// Line Chart: Gender Distribution Over Time
var ctx1 = document.getElementById('lineChart').getContext('2d');
var lineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Male',
            data: [120, 130, 125, 140, 145, 150, 160, 170, 175, 180, 190, 200],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true
        }, {
            label: 'Female',
            data: [110, 115, 120, 130, 135, 140, 145, 150, 155, 160, 170, 180],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Bar Chart: Age Distribution
var ctx2 = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61+'],
        datasets: [{
            label: 'Age Distribution',
            data: [50, 100, 150, 200, 180, 130, 90],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Pie Chart: Types of Diseases
var ctx3 = document.getElementById('pieChart').getContext('2d');
var pieChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Diabetes', 'Hypertension', 'Arthritis', 'Respiratory Infections', 'Malaria'],
        datasets: [{
            label: 'Types of Diseases',
            data: [25, 30, 20, 15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

// Doughnut Chart: Health Status
var ctx4 = document.getElementById('doughnutChart').getContext('2d');
var doughnutChart = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Healthy', 'At Risk', 'Sick', 'Critical'],
        datasets: [{
            label: 'Health Status',
            data: [200, 150, 100, 50],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

// Area Chart: Weight Distribution
var ctx5 = document.getElementById('areaChart').getContext('2d');
var areaChart = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['Underweight', 'Normal Weight', 'Overweight', 'Obese'],
        datasets: [{
            label: 'Weight Distribution',
            data: [50, 150, 100, 70],
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Scatter Chart: Telemedicine Referrals
var ctx6 = document.getElementById('scatterChart').getContext('2d');
var scatterChart = new Chart(ctx6, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Telemedicine Referrals',
            data: [
                { x: 10, y: 15 },
                { x: 15, y: 10 },
                { x: 20, y: 25 },
                { x: 25, y: 20 },
                { x: 30, y: 30 },
                { x: 35, y: 35 }
            ],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)'
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});
