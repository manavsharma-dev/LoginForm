const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

function login_pending(pending_info){

    retrun ({
        type:LOGIN_PENDING,
        pending_info
    });
}

function login_success(success_info){

    retrun ({
        type:LOGIN_SUCCESS,
        success_info
    });
}

function login_error(error_info){

    retrun ({
        type:LOGIN_ERROR,
        error_info
    });
}


export default function reducer(state = {
    pending_info:true,
    success_info:false,
    error_info:null

}, action){
    switch (action.type){
        case LOGIN_PENDING:{
            return {
                ...state,
                pending_info : action.pending_info
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state,
                success_info : action.success_info
            }
        }
        case LOGIN_ERROR:{
            return {
                ...state,
                error_info : action.error_info
            }
        }
        default :
        return state;
    }

}



export function login (email, password){
    return dispatch => {
        dispatch(login_pending(true));
        dispatch(login_success(false));
        dispatch(login_error(null));

        loginRequest(email,password, error => {
        
            dispatch(login_pending(false));
            if(!error){
                dispatch(login_success(true));
            } else{
                dispatch.login_error(err);
            }
        });
    }
}

function loginRequest(email, password, callback){
    setTimeout(()=>{
        if (email === 'admin@admin.com' && password === 'admin'){
            return callback(true);
        }else{
            return callback(new Error('Invalid Email/Password'))
        }
    }, 1000);
}