const formSignUp = document.getElementById("signUp-form");
formSignUp.addEventListener(" submit", async (event) => {
  event.preventDefault();
  const username = formSignUp[0].value;
  const password = formSignUp[1].value;
  const signUpResponse = await fetch("/auth/register", {
    method: "POST",
    headers: {
      " Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const response = await signUpResponse.json();
  const { access_token } = response.data;
  if (access_token) {
    localStorage.setItem("access_token", access_token);
    location.href = "/profile";
  } else {
    location.href = "/unauthorized";
  }
});
