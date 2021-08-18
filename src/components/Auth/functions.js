import {auth} from '../../config/firebase'


 export const handleLogin=(email,password,setError)=>{

    if(email && password){
    auth.signInWithEmailAndPassword(email, password)
        .then((authUser) => {})
        .catch((error) => {
            handleErrors(error.code,setError)
        });  
    }else{
        handleErrors("",setError)
    }    
}

export const handleRegister=(username,email,password,setError)=>{
  if(username && email && password){
  auth
      .createUserWithEmailAndPassword(email,password)
      .then((authUser)=>{
          authUser.user.updateProfile({
              displayName:username,
          });
      })
      .catch((error)=> {
          handleErrors(error.code,setError)
      });
  }else{
      handleErrors("",setError)
  }
}

export const handleInfoUpdate=(username,password,navigation,setError)=>{

    if(username && password){
    auth.currentUser.updateProfile({
            displayName: username    
          }).then(function() {
          }).catch((error)=> {
            handleErrors(error.code,setError)
        });
    auth.currentUser.updatePassword(password).then(function() {
            navigation.goBack()
       
          }).catch((error)=> {
            handleErrors(error.code,setError)
        });

    }else if (username){
        auth.currentUser.updateProfile({
            displayName: username    
          }).then(function() {
            navigation.goBack()
          }).catch((error)=> {
            handleErrors(error.code,setError)
        });

    }else{
      handleErrors("",setError)
    }
    

}

export const signOut=(navigation,AuthStack)=>{

    const unsubscribe=auth.signOut().then(() => {

        navigation.replace("Login",{AuthStack})

      }).catch((error) => {
        // An error happened.
      });
      return unsubscribe
}


const handleErrors=(error,setError)=>{

  console.log(error)

    switch(error) {

        case "auth/requires-recent-login":
          setError('Verificamos que não iniciou sessão recentemente.Reinicie sessão novamente para alterar a password')
          break;
        case "auth/invalid-email":
          setError('Insira um email valido')
          break;
        case "auth/wrong-password":
            setError('Password incorreta')
          break;
        case "auth/user-not-found":
            setError('Não existe nenhuma conta com os dados inseridos')
            break;
        case "auth/too-many-requests":
            setError('Tráfego anormal.Tente nnovamente mais tarde')
            break;
        case "auth/weak-password":
            setError('A palavra-passe deve possuir no mínimo 6 caracteres')
            break;
        case "auth/email-already-in-use":
            setError('Já existe uma conta com o email inserido')
            break;
        default:
            setError('Preencha todos os campos')
          // code block
      }

}