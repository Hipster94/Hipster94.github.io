if (sessionStorage.getItem("user") === "admin" && sessionStorage.getItem("pass") === "admin") {
  window.location.replace("https://ganes556.github.io/bayu/main/");
}
let login = {
  name: "admin",
  password: "admin",
};

$(document).ready(function () {
  $(".btn").click(function (e) {
    e.preventDefault();
    if ($("#username").val() === login.name && $("#password").val() === login.password) {
      window.location.replace("https://ganes556.github.io/bayu/main/");
      sessionStorage.setItem("user", $("#username").val());
      sessionStorage.setItem("pass", $("#password").val());
    } else {
      $(".incorrect").removeClass("d-none");
      $(".incorrect").css("font-size", "0.8rem");
      $(".form-control").addClass("is-invalid");
    }
  });
});
