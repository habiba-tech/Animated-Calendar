const monthYear = document.getElementById("monthYear");
const dates = document.getElementById("dates");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(direction) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYear.textContent = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  dates.innerHTML = "";

  if (direction === "next") {
    dates.classList.add("slide-left");
  } else if (direction === "prev") {
    dates.classList.add("slide-right");
  }

  setTimeout(() => {
    dates.classList.remove("slide-left", "slide-right");
  }, 400);

  for (let i = 0; i < firstDay; i++) {
    dates.innerHTML += `<div></div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = i;

    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      date.classList.add("today");
    }

    dates.appendChild(date);
  }
}

prev.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar("prev");
});

next.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar("next");
});

renderCalendar();
