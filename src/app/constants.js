"use strict";

var API_ENDPOINT = 'http://localhost:5000/api/v1/';
export default {
    API: {
        Login: API_ENDPOINT + 'login/',
        Register: API_ENDPOINT + 'register/',
        Logout: API_ENDPOINT + 'logout/',
        ChangePassword: API_ENDPOINT + 'change-password/'
    }
}