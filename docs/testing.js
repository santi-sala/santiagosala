function toggleCodeVisibility(button) {
  var codeContainer = button.parentElement.querySelector(".csharp-code");
  var expandButton = button;

  if (codeContainer.style.maxHeight) {
    // Code is currently visible, hide it
    codeContainer.style.maxHeight = null;
    expandButton.textContent = "Show More";
    expandButton.classList.remove("show-less");
  } else {
    // Code is currently hidden, show it
    codeContainer.style.maxHeight = codeContainer.scrollHeight + "px";
    expandButton.textContent = "Show Less";
    expandButton.classList.add("show-less");
  }

  // Re-run Prism for syntax highlighting after toggling visibility
  Prism.highlightAll();
}

document.addEventListener("DOMContentLoaded", function () {
  // Initially, show the initial portion of each code block
  var codeContainers = document.querySelectorAll(".csharp-code");
  codeContainers.forEach(function (codeContainer) {
    codeContainer.style.maxHeight = codeContainer.scrollHeight + "px";
  });
});
