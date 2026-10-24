const DATABASE_URL = "https://ext-chrome-4385a-default-rtdb.asia-southeast1.firebasedatabase.app";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!sender.tab || !sender.tab.id) {
    return false;
  }

  if (message?.type === "fc-firebase-auth") {
    handleAuthRequest(message)
      .then((data) => sendResponse({ ok: true, data }))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  if (message?.type === "fc-firebase-request") {
    handleDatabaseRequest(message)
      .then((data) => sendResponse({ ok: true, data }))
      .catch((error) => sendResponse({ ok: false, error: error.message }));
    return true;
  }

  return false;
});

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const requestPath = new URL(url).pathname;
    const detail = data?.error?.message || "No response details were provided.";
    throw new Error(`Firebase returned HTTP ${response.status} for ${requestPath}: ${detail}`);
  }

  return data;
}

async function handleAuthRequest({ action, apiKey, body, refresh }) {
  if (typeof apiKey !== "string" || !apiKey.trim()) {
    throw new Error("Firebase Web API key is missing.");
  }

  const supportedActions = ["accounts:signUp", "accounts:signInWithPassword"];
  if (!refresh && !supportedActions.includes(action)) {
    throw new Error("Unsupported Firebase Authentication action.");
  }

  const endpoint = refresh
    ? `https://securetoken.googleapis.com/v1/token?key=${encodeURIComponent(apiKey)}`
    : `https://identitytoolkit.googleapis.com/v1/${action}?key=${encodeURIComponent(apiKey)}`;

  return fetchJson(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": refresh ? "application/x-www-form-urlencoded" : "application/json"
    },
    body: refresh ? new URLSearchParams(body).toString() : JSON.stringify(body)
  });
}

async function handleDatabaseRequest({ path, method = "GET", data, query = "", token }) {
  if (typeof path !== "string" || !/^groups(?:\/[A-Za-z0-9_-]+)*$/.test(path)) {
    throw new Error("Invalid Firebase database path.");
  }
  if (!["GET", "POST", "PUT"].includes(method)) {
    throw new Error("Unsupported Firebase database operation.");
  }
  if (typeof token !== "string" || !token) {
    throw new Error("Firebase sign-in is required.");
  }

  const suffix = query ? `&${query}` : "";
  const url = `${DATABASE_URL}/${path}.json?auth=${encodeURIComponent(token)}${suffix}`;
  const options = { method, headers: {} };

  if (method !== "GET") {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  return fetchJson(url, options);
}