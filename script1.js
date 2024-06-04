function register(){
    window.open('register.html')
  }
  function doRegister() {
      const nameInput = document.getElementById('name').value
      const emailInput = document.getElementById('email').value
      const passwordInput = document.getElementById('password').value
  
    
      let usersData = localStorage.getItem('usersData')
      usersData = JSON.parse(usersData) || []
      const isEmailExist = usersData.find(user => user.email === emailInput)
      if(nameInput === "" && emailInput === "" && passwordInput === ""){
        return alert("enter your details")
      }
      else if (isEmailExist) {
        return alert('Email already exist!')
      }
      const newUser = {
        name: nameInput,
        email: emailInput,
        password: passwordInput
      }
      usersData.push(newUser)
      localStorage.setItem('usersData', JSON.stringify(usersData))
      console.log('okkk')
      alert('Register success!')
       document.getElementById('name').value =""
       document.getElementById('email').value =""
       document.getElementById('password').value =""
      
  }
  
  function sendMail(){
    window.open('form.html')
  }