document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    let valid = true;
    let responseMessage = "";
  
    // Validar nombre
    if (name === "") {
      valid = false;
      responseMessage += "El nombre es obligatorio.\n";
    }
  
    // Validar correo electrónico
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      valid = false;
      responseMessage += "Por favor ingrese un correo electrónico válido.\n";
    }
  
    // Validar mensaje
    if (message === "") {
      valid = false;
      responseMessage += "El mensaje es obligatorio.\n";
    }
  
    // Mostrar mensaje de validación
    if (valid) {
      document.getElementById("responseMessage").style.color = "green";
      document.getElementById("responseMessage").innerText = "¡Formulario enviado con éxito!";
    } else {
      document.getElementById("responseMessage").style.color = "red";
      document.getElementById("responseMessage").innerText = responseMessage;
    }
  });
  