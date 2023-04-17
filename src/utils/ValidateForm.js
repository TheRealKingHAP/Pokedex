export function ValidateForm(){
    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
          return (true)
        }
        return (false)
    }

    const validatePassword = (password) => {
        if(password.length < 8){
            return false
        }
        return true
    }

    return {validateEmail, validatePassword}
}

