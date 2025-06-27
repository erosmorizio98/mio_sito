async function send() {
  const message = document.getElementById("msg").value;
  const response = await fetch("https://TUO_BACKEND/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ message })
  });
  const data = await response.json();
  document.getElementById("output").textContent = data.message.content;
}
