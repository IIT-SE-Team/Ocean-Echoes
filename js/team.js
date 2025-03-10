//team  page js 
document.querySelectorAll(".team-member").forEach(member => {
    member.addEventListener("mouseover", () => {
        member.classList.add("expanded");
        member.setAttribute("aria-expanded", "true");
    });

    member.addEventListener("mouseout", () => {
        member.classList.remove("expanded");
        member.setAttribute("aria-expanded", "false");
    });
});
