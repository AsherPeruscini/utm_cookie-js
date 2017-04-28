// Parse the URL
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
// Give the URL parameters variable names
var source = getParameterByName('utm_source');
var campaign = getParameterByName('utm_campaign');
var medium = getParameterByName('utm_medium');
var content = getParameterByName('utm_content');
var term = getParameterByName('utm_term');

// Set the cookies
if (!(source == null || source == "")) {
    $.cookie('utm_source', source, {
        path: '/'
    });
} else {
    source = $.cookie('utm_source');
}
if (!(campaign == null || campaign == "")) {
    $.cookie('utm_campaign', campaign, {
        path: '/'
    });
} else {
    campaign = $.cookie('utm_campaign');
}
if (!(medium == null || medium == "")) {
    $.cookie('utm_medium', medium, {
        path: '/'
    });
} else {
    medium = $.cookie('utm_medium');
}
if (!(content == null || content == "")) {
    $.cookie('utm_content', content, {
        path: '/'
    });
} else {
    content = $.cookie('utm_content');
}
if (!(term == null || term == "")) {
    $.cookie('utm_term', term, {
        path: '/'
    });
} else {
    term = $.cookie('utm_term');
}

// Grab the cookie value and set the form field values
$(document).ready(function() {
    $('input[name=utm_source]').val(source);
    $('input[name=utm_medium]').val(medium);
    $('input[name=utm_campaign]').val(campaign);
    $('input[name=utm_content]').val(content);
    $('input[name=utm_term]').val(term);
});
