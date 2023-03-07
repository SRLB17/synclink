const submit = () => {
  setStatus("");
  if(validateForm()) {
    console.log("SUBMITTIN");
  }
}

const del = () => {
  setStatus("");
  if(validateForm()) {
    console.log("DELETIN");
  }
}

const validateForm = () => {
  const code = document.getElementById("code");
  if (!parseInt(code.value)) {
    setStatus("Error: code must be a num");
    return false;
  } else {
    return true;
  }
}

const setStatus = (stat) => {
  document.getElementById("status").innerHTML = stat;
} 
