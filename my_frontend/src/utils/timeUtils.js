export function formatTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (seconds < 60) return "Just now";
    if (minutes < 60) return minutes + " min ago";
    if (hours < 24) return hours + " hours ago";
    if (days === 1) return "Yesterday";
    return days + " days ago";
}
