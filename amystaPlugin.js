(function (cloudStack) {
  cloudStack.plugins.amystaPlugin = function(plugin) {
    plugin.ui.addSection({
      id: 'amystaPlugin',
      title: 'Billing',
      preFilter: function(args) {
        return true;
      },
      show: function() {
        var amysta_domain = "https://" + document.location.hostname;
        var amysta_path = '/billing';
        var amysta_url = amysta_domain + amysta_path;

	window.open(amysta_url, "_blank");
        
	return('<p style="margin: 20px;">Amysta is being opened in a separate tab.</p>')
	}
    });
  };
}(cloudStack));
