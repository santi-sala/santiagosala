function toggleCodeVisibility(button) {
  var codeContainer = button.parentElement.querySelector(".csharp-code");
  var expandButton = button;

  if (codeContainer.classList.contains("expanded")) {
    // Code is currently visible, hide it to the initial height
    codeContainer.style.maxHeight = "15em"; // Adjust the height as needed
    expandButton.textContent = "Show More";
    codeContainer.classList.remove("expanded");
  } else {
    // Code is currently hidden, show the entire code
    codeContainer.style.maxHeight = codeContainer.scrollHeight + "px";
    expandButton.textContent = "Show Less";
    codeContainer.classList.add("expanded");
  }

  // Re-run Prism for syntax highlighting after toggling visibility
  Prism.highlightAll();
}

document.addEventListener("DOMContentLoaded", function () {
  // Initially, show at least 10 lines of each code block
  var codeContainers = document.querySelectorAll(".csharp-code");
  codeContainers.forEach(function (codeContainer) {
    codeContainer.style.maxHeight = "15em"; // Adjust the height as needed
    codeContainer.classList.remove("expanded");
  });
});
