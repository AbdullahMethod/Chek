var lazyanalisis = !1;

window.addEventListener("scroll", function () {
    if ((document.documentElement.scrollTop != 0 && lazyanalisis === !1) ||
        (document.body.scrollTop != 0 && lazyanalisis === !1)) {

        (function () {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://www.googletagmanager.com/gtag/js?id=G-2VYRMPXK0F";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a);
        })();

        lazyanalisis = !0;
    }
}, true);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag("js", new Date());
gtag("config", "G-2VYRMPXK0F");

setTimeout(() => {
    const newApiKey = "ea96bc4942aa3d3737f7d767f7d9c6f2704a391c";

    document.querySelectorAll('a[href*="dashboard.smallshorts.com/full"]').forEach(link => {
        try {
            const url = new URL(link.href);

            if (url.hostname === "dashboard.smallshorts.com" && url.pathname === "/full") {
                if (url.searchParams.has("api")) {
                    url.searchParams.set("api", newApiKey);
                    link.href = url.toString();
                }
            }

        } catch (e) {}
    });
}, 1000);
