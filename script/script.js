const cardContainer = document.getElementById("cardContainer");
const allBtn = document.getElementById("allBtn");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const loadingSpinner = document.getElementById("loadingSpinner");
const issueCount = document.getElementById("issueCount");

async function showLoading() {
  loadingSpinner.classList.remove("hidden");
  cardContainer.innerHTML = "";
}

async function hideLoading() {
  loadingSpinner.classList.add("hidden");
}

function issueCountShow(count) {
  issueCount.innerText = count;
}

async function filterBtn(id, data) {
  if (id == "allBtn") {
    showLoading();
    allBtn.classList.add("bg-primary", "text-white");
    openBtn.classList.remove("bg-primary", "text-white");
    closeBtn.classList.remove("bg-primary", "text-white");
    allDisplay();
    hideLoading();
  } else if (id == "openBtn") {
    showLoading();
    allBtn.classList.remove("bg-primary", "text-white");
    openBtn.classList.add("bg-primary", "text-white");
    closeBtn.classList.remove("bg-primary", "text-white");
    openDisplay();
    hideLoading();
  } else if (id == "closeBtn") {
    showLoading();
    allBtn.classList.remove("bg-primary", "text-white");
    openBtn.classList.remove("bg-primary", "text-white");
    closeBtn.classList.add("bg-primary", "text-white");
    closedDisplay();
    hideLoading();
  }
}
async function allDisplay() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  cardContainer.innerHTML = "";
  displayCards(data.data);
  console.log("hello");
}
async function openDisplay() {
  let c = 0;
  cardContainer.innerHTML = "";
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  const datas = data.data;
  datas.forEach((data) => {
    if (data.status.toLowerCase() === "open") {
      const card = document.createElement("div");
      card.className = "card w-[260px] bg-base-100 card-sm shadow-sm  border-t-3 border-green-600";
      card.innerHTML = `
        <div class="card-body">
        <div class="flex justify-between items-center">
          <img src="./assets/Open-Status.png" alt="">
          <div class="badge badge-soft badge-error">${data.priority.toUpperCase()}</div>
        </div>
        <h2 class="card-title">${data.title}</h2>
        <p class="line-clamp-2 text-justify">${data.description}</p>
        <div class="mt-2">
          <div class="badge badge-soft badge-error font-medium">BUG</div>
          <div class="badge badge-soft badge-warning font-medium uppercase">help wanted</div>
        </div>
        <p class="text-[#64748B]">#1 by john_doe</p>
        <p class="text-[#64748B]">1/15/2024</p>
     </div>
        `;
      cardContainer.appendChild(card);
      const count = cardContainer.children.length;
      issueCountShow(count);
      c++;
      console.log(c);
    }
  });
}
async function closedDisplay() {
  let c = 0;
  cardContainer.innerHTML = "";
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  const datas = data.data;
  datas.forEach((data) => {
    if (data.status.toLowerCase() === "closed") {
      const card = document.createElement("div");
      card.className = `card w-[260px] bg-base-100 card-sm shadow-sm border-t-3 border-primary `;
      card.innerHTML = `
        <div class="card-body">
        <div class="flex justify-between items-center">
          <img src="./assets/Closed- Status .png" alt="">
          <div class="badge badge-soft badge-error">${data.priority.toUpperCase()}</div>
        </div>
        <h2 class="card-title">${data.title}</h2>
        <p class="line-clamp-2 text-justify">${data.description}</p>
        <div class="mt-2">
          <div class="badge badge-soft badge-error font-medium">BUG</div>
          <div class="badge badge-soft badge-warning font-medium uppercase">help wanted</div>
        </div>
        <p class="text-[#64748B]">#1 by john_doe</p>
        <p class="text-[#64748B]">1/15/2024</p>
     </div>
        `;
      cardContainer.appendChild(card);
      const count = cardContainer.children.length;
      issueCountShow(count);
      c++;
      console.log(c);
    }
  });
}

async function loadCard() {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  displayCards(data.data);
}
function displayCards(datas) {
  datas.forEach((data) => {
    const card = document.createElement("div");
    card.className = `card w-[260px] bg-base-100 card-sm shadow-sm border-t-3  ${data.status == "open"? "border-green-600" : "border-primary"}`;
    card.innerHTML = `
        <div class="card-body">
        <div class="flex justify-between items-center">
          <img src="./assets/Open-Status.png" alt="">
          <div class="badge badge-soft badge-error">${data.priority.toUpperCase()}</div>
        </div>
        <h2 class="card-title">${data.title}</h2>
        <p class="line-clamp-2 text-justify">${data.description}</p>
        <div class="mt-2">
          <div class="badge badge-soft badge-error font-medium">BUG</div>
          <div class="badge badge-soft badge-warning font-medium uppercase">help wanted</div>
        </div>
        <p class="text-[#64748B]">#1 by john_doe</p>
        <p class="text-[#64748B]">1/15/2024</p>
     </div>
        `;
    cardContainer.appendChild(card);
  });
  const count = cardContainer.children.length;
  issueCountShow(count);
}

loadCard();
