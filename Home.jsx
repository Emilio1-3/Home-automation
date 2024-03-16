const switches = document.querySelectorAll(".switch input");

switches.forEach((switchEl) => {
  switchEl.addEventListener("change", (e) => {
    const labelEl = e.target.parentElement.nextElementSibling;
    if (e.target.checked) {
      labelEl.textContent = `${labelEl.textContent} On`;
    } else {
      labelEl.textContent = `${labelEl.textContent} Off`;
    }
  });
});