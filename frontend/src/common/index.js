const backendDomin = "http://localhost:5000"

const SummaryApi =  {
    signUp : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/signin`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    google_login_success : {
        url : `${backendDomin}/api/login/success`,
        method : 'get'
    },
    google_login_failed : {
        url : `${backendDomin}/api/login/failed`,
        method : 'get'
    },
    google_logout : {
        url : `${backendDomin}/api/logout`,
        method : 'get'
    },
    google_profile : {
        url : `${backendDomin}/api/google`,
        method : 'get'
    },
    google_callback : {
        url : `${backendDomin}/api/google/callback`,
        method : 'get'
    },
    
    

}
export default SummaryApi