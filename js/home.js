const home = document.querySelector(".homeContainer");
const logoutButton = document.getElementById("logout");

fetch("https://reqres.in/api/unknown")
  .then((data) => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
  })
  .then((formData) => {
    const data = formData.data;

    data.map((entry) => {
      const newDiv = document.createElement("div");
      const newParagraph = document.createElement("p");
      const newSpan = document.createElement("span");
      const newInnerDiv = document.createElement("div");
      newInnerDiv.style.width = "100px";
      newInnerDiv.style.height = "100px";
      newInnerDiv.style.backgroundColor = `${entry.color}`;
      newParagraph.innerText = `Color Name: ${entry.name}`;
      newSpan.innerText = `Year Created: ${entry.year}`;
      newDiv.appendChild(newParagraph);
      newDiv.appendChild(newSpan);
      newDiv.appendChild(newInnerDiv);
      home.appendChild(newDiv);
    });
  })
  .catch((e) => {
    console.log(e);
  });

logoutButton.addEventListener("click", () => {
  window.location.replace("/index.html");
});
