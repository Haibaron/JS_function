// 注销
	$(document).on('click', '.sign-out', function() {
		$.post('/Signout', function() {
			$.userInit({});
			$.page.openUrl('/');
		});
	});