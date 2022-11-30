const formLogin = document.getElementById("login-form");
formLogin.addEventListener(" submit", async (event) => {
  event.preventDefault();
  const username = formLogin[0].value;
  const password = formLogin[1].value;
  const loginResponse = await fetch("/auth/login", {
    method: "POST",
    headers: {
      " Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const response = await loginResponse.json();
  const { access_token } = response.data;
  if (access_token) {
    localStorage.setItem("access_token", access_token);
    location.href = "/profile";
  } else {
    location.href = "/unauthorized";
  }
});
