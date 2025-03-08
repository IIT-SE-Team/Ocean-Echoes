document.querySelectorAll(".team-member").forEach(member => {
    member.addEventListener("mouseover", () => {
        member.classList.add("expanded");
    });

    member.addEventListener("mouseout", () => {
        member.classList.remove("expanded");
    });


});

