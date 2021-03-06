Search = function() {

    // Index used to keep track of the current image
    var _index = 0;

    // Max number of images
    var _limit = 10;

    // URL of Flickr API
    var _url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=<TAG>&tagmode=any&format=json&jsoncallback=?";

    // This method will add all the event handlers
    //
    // You will need to handle:
    //
    // 1) Submit button clicked
    // 2) Enter key on search field
    // 3) Previous/next button clicked
    var _addEventHandlers = function() {
        //FIXME: Implement
    };

    // Make JSON call and pass the results to the _callback function
    var _search = function(query) {
        var urlWithQuery = _url.replace("<TAG>", query);
        $.getJSON(urlWithQuery, _callback);
    };

    // Handle the result of the Flickr call, keeping in mind:
    //
    // 1) Initially, show only the first image
    // 2) Only show the first _limit# of images
    // 3) The image(s) should be displayed inside the '<div id="search-results-container"></div>'
    var _callback = function(data) {
        //FIXME: Implement
    };

    return {
        init : function () {
            _addEventHandlers();
        }
    };
}();

$(Search.init);
