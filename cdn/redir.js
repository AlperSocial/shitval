function redirect(urltext) {
    const url = new URL(urltext);
    if (url.hostname == "discord.com" || url.hostname == "discord.gg") { return window.open(urltext, "_blank"); }
    if (url.hostname == "shitval.top" || url.hostname == "www.shitval.top") { return window.open(urltext, "_self"); }
    
    Swal.fire({
        title: "Hold on!",
        text: "You are leaving shitval.top, are you sure you want to go to " + url.hostname + "?",
        icon: "warning",
        showDenyButton: true,
        showCancelButton: false,

        confirmButtonColor: "#dc3741",
        denyButtonColor: "#7066e0",
        
        confirmButtonText: "Redirect me to " + url.hostname,
        denyButtonText: "Stay on shitval.top"
    }).then((result) => {
      if (result.isConfirmed) {
          window.open(urltext, "_blank")
      }
    });
}
$(document).on('click', 'a', function(e) {
    redirect(e.target.parentElement.href)
    e.preventDefault();
    return false;
});
