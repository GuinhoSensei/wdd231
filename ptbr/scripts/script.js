document.addEventListener("DOMContentLoaded", async function () {
    const flashcardContainer = document.querySelector(".flashcard-container");
    const vocabularyList = document.querySelector("#vocabulary-list");

    const API_KEY = "a4fcb3d514msh027dde9ed056727p13955fjsn1b7adf29c192"; 
    const API_URL = `https://lexicala1.p.rapidapi.com/search?text=portuguese&language=pt`;

    const headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "lexicala1.p.rapidapi.com"
    };

    try {
        console.log("Fetching data from API...");
        let response = await fetch(API_URL, { headers });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log("Data fetched successfully:", data);

        if (data.results && data.results.length > 0) {
            if (flashcardContainer) {
                flashcardContainer.innerHTML = ""; // Clear old content

                data.results.slice(0, 15).forEach(item => {
                    let div = document.createElement("div");
                    div.className = "flashcard";
                    div.innerHTML = `
                        <p><strong>${item.headword.text}</strong></p>
                        <p>${item.senses[0]?.definition || "No definition available"}</p>
                    `;
                    flashcardContainer.appendChild(div);
                });
            }

            if (vocabularyList) {
                vocabularyList.innerHTML = ""; // Clear old content

                data.results.slice(0, 15).forEach(word => {
                    let li = document.createElement("li");
                    li.textContent = `${word.headword.text} - ${word.senses[0]?.definition || "No definition available"}`;
                    vocabularyList.appendChild(li);
                });
            }
        } else {
            console.error("No results found from API.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
