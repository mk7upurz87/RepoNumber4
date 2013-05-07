
// Additional JS functions here
var email = "";

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
            
            var myurl = 'https://graph.facebook.com/me/home?access_token=' + response.authResponse.accessToken;
            var rawjson;
         
            $.ajax({
                url: myurl,
                type: 'GET',
                dataType: "jsonp",
                success: function(json){
                    rawjson = json;
                    $.each(rawjson.data, function (index,dataObj) {
                        if (dataObj.message) {
                            var profimgs = $('<img class="friendimg" src="http://graph.facebook.com/' + dataObj.from.id + '/picture?type=square" />'); // object which I will append the list items into
                            var name = $('<p  class="fbcontent fbname"><b>'+ dataObj.from.name +'</b></p>'); // object which I will append the list items into
                            var msg = $('<p class="fbcontent">   ' + dataObj.message + '</p></br>');
                            $('#wall').append(profimgs.clone());
                            $('#wall').append(name.clone());
                            $('#wall').append(msg.clone());
                            if (dataObj.picture) {
                                var msgimg = $('<img class="fbmsgimg" src="'+ dataObj.picture + '" />');
                                $('#wall').append(msgimg.clone());
                            }
                            else if (dataObj.likes) {
                                if (dataObj.likes.count == 1) {
                                    var likes = $('<img class="likebtn" src="Images/like.png"/><p class="likecount">' + dataObj.likes.count + ' person likes this</p>');
                                }
                                else {
                                    var likes = $('<img class="likebtn" src="Images/like.png"/><p class="likecount">' + dataObj.likes.count + ' people like this</p>');
                                }
                                $('#wall').append(likes.clone());
                            }
                           // else if (dataObj.comments) {
                            //    $.each(dataObj.comments.data, function (index, commentObj) {
                                //    var comment = $('<p class="comment">' + commentObj.from.name + '</p><p class="comment commentmsg>' + commentObj.message + '</p>');
                                 //   $('#wall').append(comment.clone());
                                 //   console.log(commentObj);
                               // });
                         //   }
                           // else if (dataObj.link) {
                           //     var link = $('<a href="' + dataObj.link + '">' + dataObj.name + '</a>');
                            //    $('#wall').append(link.clone());
                           // }
                       
                        }
                    });
                    console.log(json);
                }
            });
           


            FB.api('/me', function (meResponse) {
                $('#fb-Hidden-Content').attr('value', (meResponse.id));

                // Set the profile image in the profile tile
                setProfileImage(response, meResponse);

            });

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
            

            })
            $('a#register').hide();
            document.getElementById('feed-content').style.display = "inline";
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
       
    status1 = document.getElementById('fb-status').value;
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
        imgUrl: imgsrc
    };
    console.log(imgsrc);
    FB.api('/me/feed', 'post', wallPost, function (response) {
        if (!response || response.error) {
            
        } else {
            
        }
    });
    var imgURL = $('#uploadImage').attr('src');
}


// Load the SDK Asynchronously
(function (d) {
    var js,
        id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];

    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

$('#postbut').click(function() {
    console.log("posting status");
    uploadphoto();
});

$('#showpic').click(function() {
    uploadphoto();
});


function setProfileImage(user, meUser) {
    $("#profile-content").append("<img src='" + 'http://graph.facebook.com/' + user.authResponse.userID + '/picture?type=large' + "'></img>");
    $("#profile-content").append("<h4 id='quotes-div'>" + meUser.quotes + "</h4>");
}
