function redirect(urltext) {
  const url = new URL(urltext);
  if (url.hostname == "discord.com") { return window.open(urltext, "_blank"); }
  
  swal({
    title: "Hold on!",
    text: "You are leaving shitval.top, are you sure you want to go to '" + url.hostname + "'?",
    icon: "warning",
    buttons: {
        cancel: "Stay on shitval.top",
        yes: "Redirect me to " + url.hostname,
    },
  }).then((value) => {
    switch (value) {
      case "yes":
        window.open(urltext, "_blank")
        break;
      default:
        break;
    }
  });
}
$(document).on('click', 'a', function(e) {
  redirect(e.target.href)
    e.preventDefault();
    return false;
});
