const explorer = document.querySelector(".project-explorer");
const panels = explorer.querySelectorAll("details");

for (const panel of panels) {
  panel.addEventListener("toggle", () => {
    if (!panel.open) return;

    for (const other of panels) {
      if (other !== panel) other.open = false;
    }
  });
}
