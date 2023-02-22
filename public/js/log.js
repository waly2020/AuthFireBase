const onglets = document.querySelectorAll(".btn");
const forms = document.querySelectorAll("form");

forms[0].classList.add("active");

onglets.forEach(btn => {
    btn.addEventListener("click", () => {
        for (let i = 0; i < forms.length; i++) {
            const form = forms[i];
            const btns = onglets[i];
            form.classList.remove("active");
            btns.classList.remove("active");
        }
        btn.classList.add("active")
        forms[parseInt(btn.getAttribute("data-onglet"))].classList.add("active");
    })

})