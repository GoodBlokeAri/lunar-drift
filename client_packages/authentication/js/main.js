function sendData()
{
    let loginName = document.getElementById("loginName"),
        loginPass = document.getElementById("loginPass");

    mp.trigger("loginDataToClient", loginName.value, loginPass.value);
}
