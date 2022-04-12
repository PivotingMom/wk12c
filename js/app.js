const form = document.getElementById("FormContainer");
const button = document.querySelector("button");

const login = (options) => {
  const response = axios
    .request(options)
    .then((response) => {
      loginSuccess(response);
      return response;
    })
    .catch((error) => loginFailed(error));

  return response;
};

const loginSuccess = (response) => {
  console.log(response);
};

const loginFailed = (error) => {
  console.log(error);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const loading = document.getElementById("loading");

  const formData = {
    email: email,
    password: password,
  };

  const options = {
    url: "https://reqres.in/api/login/",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: formData,
  };

  error.innerHTML = "";
  loading.innerHTML = "Loading ...";

  const response = await login(options);

  if (response.status === 200) {
    loading.innerHTML = "";
    window.location.replace("/home.html");
  } else {
    loading.innerHTML = "";
    error.innerHTML = "Invalid Credentials";
  }
});
