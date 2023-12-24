// /sales_predictor_app/static/js/script.js
function predictSales() {
    var feature1 = document.getElementById('feature1').value;
    var feature2 = document.getElementById('feature2').value;
    var feature3 = document.getElementById('feature3').value;

    // Make an AJAX request to Flask server for prediction
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify({ feature1: feature1, feature2: feature2, feature3: feature3 }),
        url: '/predict',
        success: function (response) {
            document.getElementById('result').innerHTML = '<p>Predicted Sales: ' + response.prediction + '</p>';
        }
    });
}
