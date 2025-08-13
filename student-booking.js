document.addEventListener("DOMContentLoaded", function () {

    const subjectFilter = document.getElementById("subjectFilter");
    const gradeFilter = document.getElementById("GradeFilter");
    const availabilityFilter = document.getElementById("availabilityFilter");
    const tutors = document.querySelectorAll(".tutor-card");
    const nameSearch = document.getElementById("nameSearch");

    const gradeOrder = ["A*", "A", "B", "C"];

    function filterTutors() {
        const selectedSubject = subjectFilter.value.toLowerCase();
        const selectedGrade = gradeFilter.value;
        const selectedAvailability = availabilityFilter.value;
        const nameQuery = nameSearch.value.trim().toLowerCase();

        tutors.forEach(tutor => {
        const tutorSubjects = tutor.getAttribute("data-subject").toLowerCase().split(",").map(s => s.trim());
        const tutorGrade = tutor.getAttribute("data-grade");
        const tutorAvailability = tutor.getAttribute("data-availability");
        const tutorName = tutor.querySelector("h3").textContent.toLowerCase();

        const subjectMatch = selectedSubject === "all" || tutorSubjects.includes(selectedSubject);
        const gradeMatch = selectedGrade === "all" || gradeOrder.indexOf(tutorGrade) <= gradeOrder.indexOf(selectedGrade);
        const availabilityMatch = selectedAvailability === "all" || tutorAvailability === selectedAvailability || tutorAvailability === "flexible";
        const nameMatch = tutorName.includes(nameQuery);

        if (subjectMatch && gradeMatch && availabilityMatch && nameMatch) {
            tutor.style.display = "block";
        } else {
            tutor.style.display = "none";
        }
        });
    }

    subjectFilter.addEventListener("change", filterTutors);
    gradeFilter.addEventListener("change", filterTutors);
    availabilityFilter.addEventListener("change", filterTutors);
    nameSearch.addEventListener("input", filterTutors);
});