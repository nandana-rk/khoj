document.addEventListener("DOMContentLoaded", () => {
    const bodyId = document.body.id;
  
    if (bodyId === "home-page") {
      const formContainer = document.querySelector(".login-container");
      formContainer.style.opacity = 0;
      formContainer.style.transition = "opacity 1s ease";
      setTimeout(() => formContainer.style.opacity = 1, 200);
    }
  
    if (bodyId === "dashboard-page") {
      const buttons = document.querySelectorAll(".dashboard-buttons button");
      buttons.forEach((button, index) => {
        button.style.opacity = 0;
        button.style.transform = "translateY(30px)";
        button.style.transition = all 0.4s ease ${(index + 1) * 0.2}s;
        setTimeout(() => {
          button.style.opacity = 1;
          button.style.transform = "translateY(0)";
        }, 200);
      });
    }
  
    if (bodyId === "submit-report-page") {
      const formFields = document.querySelectorAll("form input, form textarea, form button");
      formFields.forEach((field, index) => {
        field.style.opacity = 0;
        field.style.transition = opacity 0.4s ease ${(index + 1) * 0.2}s;
        setTimeout(() => field.style.opacity = 1, 200);
      });
    }
  
    if (bodyId === "recent-reports-page") {
      const reports = document.querySelectorAll("ul#reports-list li");
      reports.forEach((report, index) => {
        report.style.opacity = 0;
        report.style.transition = opacity 0.4s ease ${(index + 1) * 0.2}s;
        setTimeout(() => report.style.opacity = 1, 200);
      });
    }
  });