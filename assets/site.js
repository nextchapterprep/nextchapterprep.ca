// Phone menu: open and close the page list from the header button.
(function () {
  var btn = document.getElementById("menu-btn");
  var panel = document.getElementById("menu-panel");
  if (!btn || !panel) return;
  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.querySelector(".i-open").hidden = open;
    btn.querySelector(".i-close").hidden = !open;
  }
  btn.addEventListener("click", function () { setOpen(panel.hidden); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !panel.hidden) { setOpen(false); btn.focus(); }
  });
  document.addEventListener("click", function (e) {
    if (!panel.hidden && !panel.contains(e.target) && !btn.contains(e.target)) setOpen(false);
  });
})();
