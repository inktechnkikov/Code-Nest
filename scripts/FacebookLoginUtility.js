window.fbAsyncInit = function() {
    FB.init({
        appId      : '1880143248874985',
        xfbml      : true,
        version    : 'v2.9'
    });
    FB.getLoginStatus(function (response) {
       // let divSt = $('#status').attr('id');
        if(response.status === 'connected'){
           document.getElementById('status').innerHTML = 'we are connected';
        }else if(response.status === 'not_authorized'){
            divSt.innerHTML = 'we are not login in';
        }
    })
    (function(d, s, id){
        let js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
};
