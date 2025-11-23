const express = require("express");
const cors = require("cors");
function createProxyServer(port) {
    const app = express();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header("Access-Control-Allow-Credentials", "true");
        if (req.method === "OPTIONS") return res.sendStatus(200);
        next();
    });

    app.use(express.json());
    app.all("/proxy", async (req, res) => {
        const url = req.query.url;
        if (!url) return res.status(400).json({ error: "URL required" });
        console.log("Proxying to:", url);

        try {
            const body = req.method !== "GET" && req.method !== "HEAD"
                ? JSON.stringify(req.body)
                : undefined;

            const headers = {
                "User-Agent": req.userAgent || "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36",
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "cross-site",
                "X-Forwarded-For": req.headers["x-forwarded-for"],
                "Client-IP": req.headers["x-forwarded-for"],
                "Content-Type": req.headers["content-type"] || "application/json",
                ...(req.headers.authorization && { "Authorization": req.headers.authorization })
            };

            const response = await fetch(url, {
                method: req.method,
                headers,
                body
            });

            const contentType = response.headers.get("content-type") || "text/plain";
            res.setHeader("content-type", contentType);
            const text = await response.text();
            res.status(response.status).send(text);

        } catch (error) {
            console.error("Proxy error:", error.message);
            res.status(500).json({ error: error.message });
        }
    });
    app.listen(port, () => console.log(`Proxy running on http://127.0.0.1:${port}`));
}
[8088].forEach(createProxyServer);
// this makes 4 proxies and u can just cycle through em >:))
