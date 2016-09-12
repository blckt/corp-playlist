const checkAuth = (nextState:any, replace:Function, cb:Function)=> {
   console.log(nextState);
    if (!localStorage.getItem('token')) {
        return replace(`/auth`), cb();
    }
    if(nextState.location.pathname==='/auth'){
        //check token
        return replace(`/`), cb();
    } else cb();

};


export default {
    checkAuth
}