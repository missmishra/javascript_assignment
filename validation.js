    function validate() {
      let isValid = true;

      // Name validation
      const name = document.getElementById("name").value.trim();
      if (name.length <= 3) {
        document.getElementById("errorName").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("errorName").style.display = "none";
      }

      // Email validation
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        document.getElementById("errorEmail").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("errorEmail").style.display = "none";
      }

      // Mobile validation
      const mobile = document.getElementById("mobile").value.trim();
      const mobilePattern = /^[0-9]{10}$/;
      if (!mobilePattern.test(mobile)) {
        document.getElementById("errorMobile").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("errorMobile").style.display = "none";
      }

      // Address validation
      const address = document.getElementById("address").value.trim();
      if (address.length < 10) {
        document.getElementById("errorAddress").style.display = "block";
        isValid = false;
      } else {
        document.getElementById("errorAddress").style.display = "none";
      }

      return isValid;
    }