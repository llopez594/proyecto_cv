const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const cache = new Map();

async function fetchCached(key, url, options) {
    if (cache.has(key)) return cache.get(key);

    const promise = fetch(url, options).then(async (res) => {
        if (!res.ok) throw new Error(`Error fetching ${key}`);
        return res.json();
    });

    cache.set(key, promise);
    return promise;
}

export function clearApiCache(key) {
    if (!key) cache.clear();
    else cache.delete(key);
}

export function getAbout() {
    return fetchCached("about", `${API_BASE_URL}/about`);
}

export function getServices() {
    return fetchCached("services", `${API_BASE_URL}/services`);
}

export function getProjects() {
    return fetchCached("projects", `${API_BASE_URL}/projects`);
}

export function getProjectBySlug(slug) {
    return fetchCached(`project:${slug}`, `${API_BASE_URL}/projects/${slug}`);
}

export async function sendContact(data) {
    const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Error sending message");
    return response.json();
}
