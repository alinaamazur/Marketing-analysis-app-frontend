export async function fetchInstagramData(url) {
    const res = await fetch(
        `http://127.0.0.1:8000/api/instagram/analysis?url=${encodeURIComponent(url)}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch Instagram data");
    }
    return res.json();
}