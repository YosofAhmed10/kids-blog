const dashboardList = document.querySelector(".list");
const user = document.querySelector(".nav > a:last-child");

user.addEventListener("click", () => {
  dashboardList.classList.toggle("hidden");
});
