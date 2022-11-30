const profileContainer = document.getElementById("profile");
const logout = () => {
  localStorage.removeItem("access_token");
  location.href = "/";
};

(async () => {
  try {
    const response = await fetch("/users/data", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    if (response.status !== 200) {
      return (location.href = "/unauthorized");
    }

    const userResponse = await response.json();
    const userData = userResponse.data;
    // http://localhost:8080/templates/profile.ejs
    const templateResponse = await fetch("/templates/profile.ejs");
    const template = await templateResponse.text();
    const html = ejs.render(template, { user: userData });
    profileContainer.innerHTML = html;
  } catch (error) {
    console.log(error);
    profileContainer.innerHTML = `<h1 style="color: red;"> ERROR </h1>`;
  }
})();
