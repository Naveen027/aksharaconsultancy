function toggleNavbar() {
    const navbarMenu = document.getElementById('navbarMenu');
    const navbarToggle = document.querySelector('.navbar-toggle');
    navbarMenu.classList.toggle('active');
    navbarToggle.classList.toggle('active');
    document.getElementById('navbarMenu').style.width='100%';
  }
  
      // Function to open the pop-up
      function openPopup() {
        document.getElementById("popup").style.display = "block";
    }
    // Function to close the pop-up
    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }
    