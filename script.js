function showForm(formId){
    document.querySelectorAll(".chest").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}