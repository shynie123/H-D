document.addEventListener("DOMContentLoaded", function () {
  // Toggle Mobile Menu
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Form Validation Đặt Lịch
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const serviceChecked = document.querySelector('input[name="service"]:checked');

      if (!fullname) {
        alert("Vui lòng nhập họ và tên của bạn!");
        document.getElementById("fullname").focus();
        return;
      }

      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
      if (!phoneRegex.test(phone)) {
        alert("Vui lòng nhập đúng số điện thoại (10 chữ số)!");
        document.getElementById("phone").focus();
        return;
      }

      if (!serviceChecked) {
        alert("Vui lòng chọn 1 dịch vụ bạn quan tâm!");
        return;
      }

      alert(`Cảm ơn quý khách ${fullname}! H&D Spa đã tiếp nhận yêu cầu đặt lịch cho dịch vụ: [${serviceChecked.value}]. Nhân viên sẽ liên hệ lại ngay!`);
      bookingForm.reset();
    });
  }
}); 