
// Additional JS functions here
   
window.fbAsyncInit = function () {
    FB.init({
        appId: '536466069729077', // App ID
        channelUrl: '//http://people.rit.edu/~amb8805/Music/channel.html', // Channel File
        status: true, // check login status
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true  // parse XFBML
    });

    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            $('#social').fbWall({
                id: response.authResponse.userID,
                accessToken: response.authResponse.accessToken,
                showGuestEntries: true,
                showComments: true,
                max: 5,
                timeConversion: 12
                   
            });
            $('a#loginbutton').text('Log out');
            $(function () {
                $('a#loginbutton').click(function () {
                    if ($(this).text() == ("Log out")) {
                               
                        FB.logout();
                    }
                    else {
                              
                    }
                    console.log($(this).text());
                });
            

            });
                  
               
            $('a#register').hide();
            document.getElementById('content').style.display = "inline";
            // connected
        } else if (response.status === 'not_authorized') {
            // not_authorized
               
            // $('#social).hide();
                
        } else {
            console.log("i got here");
            $('#social').hide();
            $('form').hide();
             
            // not_logged_in
        }
    });
    // Additional init code here
};
    
(function() {
    var e = document.createElement('script');
    e.type = 'text/javascript';
    e.src = document.location.protocol +
        '//connect.facebook.net/en_US/all.js';
    e.async = true;
    document.getElementById('fb-root').appendChild(e);
}());
    
function setStatus() {
       
    status1 = document.getElementById('status').value;
    FB.api(
    {
        method: 'status.set',
        status: status1
    },
    function (response) {
        if (response == 0) {
            alert('Your facebook status not updated. Give Status Update Permission.');
        }
        else {
           
           
        }
    });
}

function uploadphoto() {
    var imgsrc = document.getElementById("uploadImage").src;
    var wallPost = {
        message: $('#status').val(),
        
        picture: imgsrc,
    }; console.log(imgsrc);
    FB.api('/me/feed', 'post', wallPost, function (response) {
        if (!response || response.error) {
            alert('Error occured');
        } else {
            alert('Post ID: ' + response);
        }
    });
    var imgURL = $('#uploadImage').attr('src');

             
}



// Load the SDK Asynchronously
(function (d) {
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

$('#postbut').click(function () {
    console.log("posting status");
    setStatus();
   
});
$('#showpic').click(function () {
   uploadphoto();
});