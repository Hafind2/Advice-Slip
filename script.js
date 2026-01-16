
const apiUrl = "https://api.adviceslip.com/advice";

const adviceText = document.getElementById("advice-text");
const adviceId = document.getElementById("advice-id");
const statusText = document.getElementById("status");
const btn = document.getElementById("get-advice-btn");

async function getAdvice() {
   
    console.log("--> Începere proces preluare sfat...");

    statusText.innerText = "Se încarcă...";
    statusText.style.color = "orange";
    
    try {
   
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error("Eroare HTTP! Status: " + response.status);
        }

        const data = await response.json();
        
        console.log("Date primite cu succes:", data);

      
        adviceText.innerText = '"' + data.slip.advice + '"';
        
        adviceId.innerText = data.slip.id;
        
        statusText.innerText = "Succes";
        statusText.style.color = "green";

    } catch (error) {
        console.error("A apărut o problemă:", error);
        
        adviceText.innerText = "Nu am putut încărca un sfat. Verifică consola.";
        statusText.innerText = "Eroare";
        statusText.style.color = "red";
        
        alert("Eroare la conectarea cu API-ul!");
    }
}


btn.addEventListener("click", getAdvice);

getAdvice();