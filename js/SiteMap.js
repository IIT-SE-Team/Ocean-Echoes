document.addEventListener("DOMContentLoaded", function () {
    function createBubble() {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * window.innerWidth + "px";
        bubble.style.width = bubble.style.height = Math.random() * 40 + 10 + "px";
        document.body.appendChild(bubble);
        setTimeout(() => bubble.remove(), 6000);
    }

    setInterval(createBubble, 50);

    // Adding interactive click animations
    document.querySelectorAll(".node").forEach(node => {
        node.addEventListener("click", function () {
            node.style.fill = "005f92";  // Change color on click
            setTimeout(() => node.style.fill = "#ffffff", 300);
        });
    });
});