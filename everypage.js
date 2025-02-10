// nu uh

async function checkAccess() {
  const name = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (!name || !password) {
    alert("Hey! No bypassing security! 😡");
    document.body.innerHTML = `<h1>nu uh bad boy!</h1><p>You have been denied access to this page.</p>`;
    return;
  }

  try {
    const response = await fetch("https://qweujsakdwqesad.github.io/name.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const validPasswords = await response.json();
    if (validPasswords[name] !== password) {
      alert("Access denied. Invalid credentials.");
      location.reload(); // Refresh the page if the username and password don't match
    } else {
      alert(`Welcome, ${name}! You have successfully accessed the protected page.`);
    }
  } catch (error) {
    console.error("Error loading name.json:", error);
    alert("Error loading credentials. Please try again later.");
    document.body.innerHTML = `<h1>Error</h1><p>There was an error loading the security check. Please try again later.</p>`;
  }
}

// Call the function to check access
checkAccess();


let accessTimer = null;

async function accessCheck() {
  window.accessConfirmed = false;

  const response = await fetch('https://masdasdwqe.pythonanywhere.com/check');
  const data = await response.json();
  const name = localStorage.getItem("username");

  if ((name === "Liam" || name === "Ethan") && data.status === 'failure') {
    alert("You liar, you don't have access right now.");
    location.reload();
  } else if ((name === "Liam" || name === "Ethan") && data.access_confirmed) {
    alert('Passed the check.');
    window.accessConfirmed = true;

    const timerValue = data.timer_value;
    const timerValueInMilliseconds = timerValue * 60 * 1000; // Convert minutes to milliseconds

    alert(`Access timer is active for ${timerValue} minutes.`);

    accessTimer = setTimeout(() => {
      alert("Times up!");
      location.reload();
    }, timerValueInMilliseconds);
  } else {
    alert("Access not confirmed.");
    location.reload();
  }
}

accessCheck();
