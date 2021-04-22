$(function()
{
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam) {
                return typeof sParameterName[1] === undefined ? false : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    }

    function appendText(label, text)
    {
        var elParent = document.getElementById('results');
        var elP = elParent.appendChild(document.createElement('P'));
        elP.appendChild(document.createElement('B')).appendChild(document.createTextNode(label));
        elP.appendChild(document.createTextNode(': ' + text));
    }
    var vin = getUrlParameter('vin');
    if (vin)
    {
        document.getElementById('vin').value = vin;
        $.get('https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/' + vin + '?format=json', function (data) {
            var elParent = document.getElementById('results');
            elParent.innerHTML = '';

            var elHeading = elParent.appendChild(document.createElement('H1'));
            elHeading.id = 'results-heading';
            elHeading.appendChild(document.createTextNode('Results for ' + data.SearchCriteria.replace(/:/g, ' ')));
            appendText('Message', data.Message);
            for (var i = 0; i < data.Results.length; i++) {
                var result = data.Results[i];
                if (result.Value !== null)
                    appendText(result.Variable, result.Value);
            }
        });
    }
});
