// redir.js 2.0
// thank you to maxxus for most of the code <3
// might not work, depends on my stupidity

function popupredir {
    const url = new URL(urltext);
    
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

const getHostname = ("canParse" in URL) ? (function(url) {
    if (URL.canParse(url)) { return new URL(url).hostname; } else { return null; };
}) : (function(url) {  
    let parsedUrl;
    try {
        parsedUrl = new URL(url).hostname;
    } catch (e) {
        parsedUrl = null; // invalid url
    };
    return parsedUrl;
});

document.addEventListener("click", function(event) {
    const el = event.target.parentElement;
    if (el.tagName !== "A") return;
    
    const hostname = getHostname(el.href);
    if (hostname === null) {
        console.warn("invalid link on element:", el);
        continue; // skip cuz invalid
    };
    if (hostname === "shitval.top" || hostname === "www.shitval.top") {
        continue; // skip cuz it's shitval
    };
    if (hostname === "discord.gg" || hostname === "www.discord.gg") {
        continue; // skip cuz it's shitval
    };
    if (hostname === "discord.com" || hostname === "www.discord.com") {
        continue; // skip cuz it's shitval
    };
    event.preventDefault();
    popupredir(el.href);
});
