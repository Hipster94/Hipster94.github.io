if (sessionStorage.getItem("user") !== "admin" && sessionStorage.getItem("pass") !== "admin") {
  window.location.replace("https://ganes556.github.io/bayu/");
}
$(document).ready(function () {
  $("a.log-out").click(function (e) {
    window.location.replace("https://ganes556.github.io/bayu/");
    sessionStorage.clear();
  });
});
