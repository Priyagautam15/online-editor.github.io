// Selecting inputs and elements
let htmlinput = document.querySelector(".html-input");
let cssinput = document.querySelector(".css-input");
let jsinput = document.querySelector(".js-input");

let save = document.querySelector("#save");
let outputContainer = document.querySelector(".output-container");
let output = document.querySelector("#output");

let full = document.querySelector("#full");
let copy = document.querySelectorAll(".copy");

// Save button functionality
save.addEventListener("click", () => {
    output.contentDocument.body.innerHTML = htmlinput.value;
    output.contentDocument.head.innerHTML = `<style>${cssinput.value}</style>`;
    output.contentWindow.eval(jsinput.value);
});

// Fullscreen toggle functionality
full.addEventListener("click", () => {
    outputContainer.classList.toggle("output-full-active");
    full.style.transform = outputContainer.classList.contains("output-full-active") 
        ? "rotate(180deg)" 
        : "rotate(0deg)";
});

// Copy functionality
copy.forEach((button, index) => {
    button.addEventListener("click", () => {
        let textToCopy;

        // Determine which input to copy from based on index or specific reference
        if (index === 0) {
            textToCopy = htmlinput.value; // HTML copy
        } else if (index === 1) {
            textToCopy = cssinput.value; // CSS copy
        } else if (index === 2) {
            textToCopy = jsinput.value; // JS copy
        }

        // Copy text to clipboard
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy)
                .then(() => alert("Copied to clipboard!"))
                .catch(() => alert("Failed to copy!"));
        }
    });
});
