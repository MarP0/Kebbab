function sudziba() {
  alert("Sūdzība veiksmīgi nosūtīta!");
}

function ieiet() {
  let Parole_ = document.getElementById("parole").value;
  let E_pasts_ = document.getElementById("emails").value;
  if (Parole_ == "12345678" && E_pasts_ == "admins@gmail.com")
  {
    alert("Veiksmīgi ielogošanās!");
  }
  else
  {
    alert("Nepareizs e-pasts vai parole");
  }
}