/*
	Element class is a helper to work easier with our UI elements (like auth form, some menus etc)

	Showing element:
		Without:
			js: document.getElementById("auth").setAttribute("style", "display: block");
			jquery: $("#auth").show();

		With:
			window.elements.auth.visible = true;

*/

/*

onclick='sendData()'
*/

function sendData()
{
    let loginName = document.getElementById("loginName"),
        loginPass = document.getElementById("loginPass");

    mp.trigger("loginDataToClient", loginName.value, loginPass.value);
}
