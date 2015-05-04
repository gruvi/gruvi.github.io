$( function () {
  var appId = "706843062794819";

  $( "#share" ).find( "form" ).submit( function (event) {
    event.preventDefault();

    var href = $( this ).find( "input#href" ).val();
    var display = $( this ).find( "select#display" ).val();
    var redirect_uri = $( this ).find( "input#redirect_uri" ).val();

    if ($( this ).find( "input[type='checkbox']" ).is( ":checked" )) {
      window.open( "https://www.facebook.com/dialog/share?app_id=" + appId + "&display=" + display + "&href=" + encodeURIComponent( href ) + "&redirect_uri=" + encodeURIComponent( redirect_uri ) );
    } else {
      FB.ui({
        method: "share",
        href: href,
        display: display
      }, function(response){});
    }
  });

  $( "#feed" ).find( "form" ).submit( function (event) {
    event.preventDefault();

    var link = $( this ).find( "input#link" ).val();
    var picture = $( this ).find( "input#picture" ).val();
    var source = $( this ).find( "input#source" ).val();
    var name = $( this ).find( "input#name" ).val();
    var caption = $( this ).find( "input#caption" ).val();
    var description = $( this ).find( "input#description" ).val();
    var properties = $( this ).find( "input#properties" ).val();
    var actions = $( this ).find( "input#actions" ).val();
    var display = $( this ).find( "select#display" ).val();
    var redirect_uri = $( this ).find( "input#redirect_uri" ).val();

    if ($( this ).find( "input[type='checkbox']" ).is( ":checked" )) {
      window.open( "https://www.facebook.com/dialog/feed?app_id=" + appId +
          "&display=" + display +
          "&link=" + encodeURIComponent( link ) +
          "&redirect_uri=" + encodeURIComponent( redirect_uri ) +
          "&name=" + name +
          "&caption=" + caption +
          "&description=" + description +
          "&picture=" + picture +
          "&properties=" + properties +
          "&actions=" + actions
      );
    } else {
      FB.ui({
        method: "feed",
        link: link,
        picture: picture,
        source: source,
        name: name,
        caption: caption,
        description: description,
        properties: properties,
        actions: actions,
        display: display
      }, function(response){});
    }
  });
});
