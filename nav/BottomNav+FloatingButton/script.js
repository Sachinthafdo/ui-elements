const navItems = [
    { icon: '<i class="fas fa-home"></i>', label: "Home" },
    { icon: '<i class="fas fa-user"></i>', label: "Profile" },
    { icon: '<i class="fas fa-cog"></i>', label: "Settings" },
    { icon: '<i class="fas fa-comment"></i>', label: "Chat" },
    { icon: '<i class="fas fa-camera"></i>', label: "Camera" },
    // You can add or remove items here
  ];

  const bottomNav = document.getElementById("bottomNav");

  // Create radio buttons
  navItems.forEach((item, index) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "tab";
    radio.classList.add("hidetab");
    radio.id = `tab${index + 1}`;
    if (index === 0) radio.checked = true;
    bottomNav.appendChild(radio);
  });

  // Create tabs
  navItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `tab tab${index + 1}`;
    div.innerHTML = `
      <label for="tab${index + 1}">
        ${item.icon}
        <span>${item.label}</span>
      </label>
    `;
    bottomNav.appendChild(div);
  });

  // Add indicator
  const indicator = document.createElement("div");
  indicator.className = "indicator";
  bottomNav.appendChild(indicator);

  // Handle indicator position and selected text
  const updateUI = () => {
    const selectedIndex = [...document.querySelectorAll(".hidetab")].findIndex(
      (radio) => radio.checked
    );
    const selectedTabText = navItems[selectedIndex]?.label || "";
    document.querySelector(".selectedNav").textContent = selectedTabText;

    const leftPercent = ((selectedIndex + 0.5) * 100) / navItems.length;
    indicator.style.left = `calc(${leftPercent}% - 30px)`;
  };

  // Event listener
  document.addEventListener("change", (e) => {
    if (e.target.name === "tab") updateUI();
  });

  updateUI(); // Initialize on load