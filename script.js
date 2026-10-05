fetch("events.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Hálózati hiba történt.");
    }
    return response.json();
  })
  .then((events) => {
    const list = document.querySelector("#starred");
    events.forEach((event) => {
      const item = document.createElement("li");
      item.textContent = `${event.name} — starred ${event.starred}`;
      list.appendChild(item);
    });
  })
  .catch((error) => {
    const list = document.querySelector("#starred");
    if (list) {
      const errorItem = document.createElement("li");
      errorItem.textContent = "Sajnos nem sikerült betölteni az eseményeket.";
      list.appendChild(errorItem);
    }
  });
