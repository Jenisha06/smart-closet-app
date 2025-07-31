// Select elements
const addBtn = document.getElementById("addBtn");
const popup = document.getElementById("popupForm");
const closeBtn = document.getElementById("closeBtn");
const submitBtn = document.getElementById("submitBtn");

// Show popup on click
addBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

// Hide popup when Cancel clicked
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Handle Save Outfit (for now, just log data)
submitBtn.addEventListener("click", () => {
  const name = document.getElementById("outfitName").value;
  const type = document.getElementById("outfitType").value;
  const tags = document.getElementById("outfitTags").value;

  console.log("Outfit Saved:", name, type, tags);

  // Clear form
  document.getElementById("outfitName").value = "";
  document.getElementById("outfitType").value = "";
  document.getElementById("outfitTags").value = "";

  popup.classList.add("hidden");
});

