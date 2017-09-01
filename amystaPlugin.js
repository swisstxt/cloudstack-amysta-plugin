(function (cloudStack) {
  cloudStack.plugins.amystaPlugin = function(plugin) {
    plugin.ui.addSection({
      id: 'amystaPlugin',
      title: 'Billing',
      preFilter: function(args) {
        return true;
      },
      show: function() {
        var amysta_domain = 'https://ma-cloud.swisstxt.ch';
        var amysta_path = '/billing';
	var session_id = $.cookie("JSESSIONID");
        var amysta_url = amysta_domain + amysta_path + '?jsessionid=' + session_id /* + '&sessionkey=' + g_sessionKey;*/
	console.log( $.cookie("JSESSIONID") );
	console.log(amysta_url);
	console.log(document.cookie);

	window.open(amysta_url, "_blank");
        
	return('<p style="margin: 20px;">Amysta is being opened in a separate tab.</p>')
	}
    });
  };
}(cloudStack));
