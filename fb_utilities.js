// utilities to use with facebook interactions 

function shareItem(u,t,d,i){

 
 window.open("http://www.facebook.com/sharer.php?u="+u, "facebooksharedialog", "width=626,height=436"); 
    try{
	if (_gaq){	
	  _gaq.push(['_trackEvent', 'facebook', 'share', decodeURIComponent(u)]);
	};
	} catch (err) {

	}
    return false;
};

function tweetItem(u,t){

    window.open("https://twitter.com/share?url="+u+"&text="+t, 
      'twittersharedialog', 'width=626,height=436'); 
    
    try{
	if (_gaq){	
	  _gaq.push(['_trackEvent', 'tweet', 'share', decodeURIComponent(u)]);
	};
	} catch (err) {

	}
    return false;
};

function gPlusItem(u,t){

    window.open("https://plus.google.com/share?url="+u+"&t="+t,
      'gplussharedialog', 'width=626,height=436'); 
    
    try{
	if (_gaq){	
	  _gaq.push(['_trackEvent', 'facebook', 'share', decodeURIComponent(u)]);
	};
	} catch (err) {

	}
    return false;
};


function emailItem(u,t,d,i,o,f){    
    window.open("/cfi/addthis_email.cfm?url="+u+"&subj="+t+"&image="+i+"&text="+d+"&oid="+o+"&fh_id="+f, 'emailsharedialog', 'scrollbars=1,width=626,height=550'); 
    try{
    if (_gaq){  
      _gaq.push(['_trackEvent', 'sendEmail', 'share', decodeURIComponent(u)]);
    };
    } catch (err) { }
    return false;
}; 

