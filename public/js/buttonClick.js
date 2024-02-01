document.querySelector(".speedy-button").addEventListener("click", () => {

    let speedyTable = document.querySelector(".speedy-table")
    if (speedyTable.style.display === "none") {
        speedyTable.style.display = "block";
    } else {
        speedyTable.style.display = "none";
    }
  });

  document.querySelector(".john").addEventListener("click", () => {

    let johnTable = document.querySelector(".john-table")
    if (johnTable.style.display === "none") {
        johnTable.style.display = "block";
    } else {
        johnTable.style.display = "none";
    }
  });

  document.querySelector(".cloud").addEventListener("click", () => {

    let cloudTable = document.querySelector(".cloud-table")
    if (cloudTable.style.display === "none") {
        cloudTable.style.display = "block";
    } else {
        cloudTable.style.display = "none";
    }
  });