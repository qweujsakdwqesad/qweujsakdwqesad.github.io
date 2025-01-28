// nu uh

window.onload = async function () {
  const name = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (!name || !password) {
    alert("Hey! No bypassing security! 😡");
    document.body.innerHTML = `<h1>nu uh bad boy!</h1><p>You have been denied access to this page.</p>`;
    return;
  }

  let accessTimer = null;

async function accessCheck() {
  window.accessConfirmed = false;

  const response = await fetch('https://masdasdwqe.pythonanywhere.com/check');
  const data = await response.json();

  if (data.status === 'failure') {
    alert("You liar, you don't have access right now.");
    location.reload();
  } else {
    const name = localStorage.getItem("username");
    if (name === "SASDASD" && data.access_confirmed) {
      alert('Passed the check.');
      window.accessConfirmed = true;

      const timerValue = data.timer_value;
      const timerValueInMilliseconds = timerValue * 60 * 1000; // Convert minutes to milliseconds

      alert(`Access timer is active for ${timerValue} minutes.`);

      setTimeout(() => {
        alert("Times up!");
        location.reload();
      }, timerValueInMilliseconds);
    } else {
      alert("Access not confirmed.");
      location.reload();
    }
  }
}

// Call this function when the page loads



  // Show Jon's approval button only for Jon
  function showJonControls() {
    const jonUsername = "Jon"; // Replace with your username
    if (name === jonUsername) {
      const jonControls = document.createElement("div");
      const approveButton = document.createElement("button");
      approveButton.textContent = "Jon: Approve Access";
      approveButton.onclick = approveAccess;
      jonControls.appendChild(approveButton);
      document.body.appendChild(jonControls);
    }
  }

  async function approveAccess() {
    try {
     await fetch("https://scaling-space-train-97j4pqr7gp45hxprr-3001.app.github.dev/api/confirm", {
      method: 'GET', 
      mode: 'no-cors', // Add the no-cors mode to bypass CORS
    });
      alert("Jon has confirmed access!");
    } catch (error) {
      console.error("Error confirming access:", error);
      alert("There was an error confirming access. Please try again.");
    }
  }

  async function displayServerInfo() {
    try {
     console.log('test2')
    } catch (error) {
      console.error("Error fetching server info:", error);
    }
  }

  try {
    const response = await fetch("https://qweujsakdwqesad.github.io/name.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const validPasswords = await response.json();
    if (name === "asdasdasd") {
      alert(
        "The site is going under maintenance for you. To prevent data loss, do not log back in until the migration is complete."
      );
      document.body.innerHTML = `<h1>nu uh bad boy!</h1><p>You have been denied access to this page.</p>`;
    } else if (validPasswords[name] !== password) {
      alert("Hey! No bypassing security! 😡");
      document.body.innerHTML = `<h1>nu uh bad boy!</h1><p>You have been denied access to this page.</p>`;
    } else {
      // For Ethan and Liam, prompt Jon confirmation
    if (["Ethan", "liam"].includes(name)) {
  const isConfirmed = confirm("Hey! Has Jon confirmed you are allowed to be on this time?");
  
  if (isConfirmed) {
    try {
      const serverResponse = await fetch("https://scaling-space-train-97j4pqr7gp45hxprr-3001.app.github.dev/api/confirm", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (serverResponse.ok) {
        const { jonConfirmed } = await serverResponse.json();

        if (jonConfirmed) {
          alert(`Welcome, ${name}! You have successfully accessed the protected page.`);
        } else {
          alert("Nu-uh, bad boy!");
          location.reload(); // Refresh the page
        }
      } else {
        alert("Error confirming access. Please try again.");
      }
    } catch (error) {
      console.error("Error confirming Jon's access:", error);
      alert("There was an error confirming Jon's access. Please try again.");
    }
  } else {
    alert("Nu-uh, bad boy!");
    location.reload(); // Refresh the page if the user didn't confirm
  }
} else {
  alert(`Welcome, ${name}! You have successfully accessed the protected page.`);
}


      // Show Jon's controls for approval
      showJonControls();
    }
  } catch (error) {
    console.error("Error loading name.json:", error);
    alert("Error loading credentials. Please try again later.");
    document.body.innerHTML = `<h1>Error</h1><p>There was an error loading the security check. Please try again later.</p>`;
  }

  displayServerInfo();
};

window.onbeforeunload = () => {
  fetch("https://scaling-space-train-97j4pqr7gp45hxprr-3001.app.github.dev/api/reset");
};
