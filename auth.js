const client = new Appwrite.Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('6847c371000312047365');

const account = new Appwrite.Account(client);

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  account.createEmailSession(email, password)
    .then(() => alert("Login successful"))
    .catch(e => alert(e.message));
}

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  account.create(Appwrite.ID.unique(), email, password)
    .then(() => alert("Signup successful, please log in"))
    .catch(e => alert(e.message));
}