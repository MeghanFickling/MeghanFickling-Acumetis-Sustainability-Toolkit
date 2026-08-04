const completed = new Set();
const totalInteractions = 3;

const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");

function completeInteraction(name) {
  completed.add(name);

  const count = completed.size;
  const percentage = (count / totalInteractions) * 100;

  progressLabel.textContent =
    count + " of " + totalInteractions + " interactions completed";

  progressBar.style.width = percentage + "%";
}

const toolboxButton = document.getElementById("toolboxButton");
const toolboxBody = document.getElementById("toolboxBody");
const toolboxPrompt = document.getElementById("toolboxPrompt");

toolboxButton.addEventListener("click", function () {
  const isOpen = toolboxButton.classList.toggle("open");

  toolboxBody.classList.toggle("open", isOpen);
  toolboxButton.setAttribute("aria-expanded", String(isOpen));
  toolboxPrompt.textContent = isOpen ? "Select to close ↑" : "Select to open ↓";

  if (isOpen) {
    completeInteraction("toolbox");
  }
});

const guidanceCards = document.querySelectorAll(".guidance-card");
const exploredGuidance = new Set();

guidanceCards.forEach(function (card, index) {
  card.addEventListener("click", function () {
    card.classList.add("explored");
    exploredGuidance.add(index);

    if (exploredGuidance.size === guidanceCards.length) {
      completeInteraction("guidance");
    }
  });
});

const finishButton = document.getElementById("finishButton");
const finishMessage = document.getElementById("finishMessage");

finishButton.addEventListener("click", function () {
  finishMessage.classList.add("visible");
  finishButton.textContent = "Ready for the knowledge check ✓";
  completeInteraction("finish");
});
