// redir.js 2.2
// thank you to maxxus for most of the code <3
// this one probably works

const whitelistedDomains = new Set([
    "shitval.top", "www.shitval.top",
    "discord.gg", "www.discord.gg",
    "discord.com", "www.discord.com",
]);

function popupredir(hostname, link) {
    Swal.fire({
        title: "Hold on!",
        text: "You are leaving shitval.top, are you sure you want to go to " + hostname + "?",
        icon: "warning",
        showDenyButton: true,
        showCancelButton: false,
    
        confirmButtonColor: "#dc3741",
        denyButtonColor: "#7066e0",
    
        confirmButtonText: "Redirect me to " + hostname,
        denyButtonText: "Stay on shitval.top",
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(link, "_blank");
        };
    });
};

const getHostname = ("canParse" in URL) ? (function(url) {
    if (URL.canParse(url)) { return new URL(url).hostname; } else { return null; };
}) : (function(url) {  
    let parsedUrl;
    try {
        parsedUrl = new URL(url).hostname;
    } catch {
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
        alert(`We're sorry, but an error occurred.\nPlease contact us below so we can fix this.\n\nerr: invalid link @ ${window.location.pathname} > "${el.href}"`);

        // LEAVE THIS HERE!! the link is 100% invalid, and not ignoring it WILL throw an error.
        return;
    };

    // we haven't used preventDefault() yet, so we can just ignore and they'll still be redirected
    if (whitelistedDomains.has(hostname)) return;

    event.preventDefault();
    popupredir(hostname, el.href);
});
