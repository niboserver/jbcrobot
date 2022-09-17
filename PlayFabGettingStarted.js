function DoExampleLoginWithCustomID(){
    PlayFab.settings.titleId = "164F7";
    var uuid = new DeviceUUID().get();
    console.log(uuid);
    var loginRequest = {
        // Currently, you need to look up the required and optional keys for this object in the API reference for LoginWithCustomID. See the Request Headers and Request Body.
        TitleId: PlayFab.settings.titleId,
        //CustomId: document.getElementById("customId").value,
        CustomId: uuid,
        CreateAccount: true
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
}

// callback functions take two parameters: result and error
// see callback functions in JavaScript if unclear
var LoginCallback = function (result, error) {

    if (result !== null) {
        console.log(result.code);
        //document.getElementById("resultOutput").innerHTML = "Congratulations, you made your first successful API call!";
    } else if (error !== null) {
        // document.getElementById("resultOutput").innerHTML =
        //     "Something went wrong with your first API call.\n" +
        //     "Here's some debug information:\n" +
            PlayFab.GenerateErrorReport(error);
            console.log('user not found');
    } 
}