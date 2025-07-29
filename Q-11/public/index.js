function humanizeTimeDiff(date1, date2 = new Date()) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    const diffMs = d2 - d1;
    const absDiff = Math.abs(diffMs);

    const seconds = Math.floor(absDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return diffMs > 0 ? `${days} day(s) ago` : `in ${days} day(s)`;
    } else if (hours > 0) {
        return diffMs > 0 ? `${hours} hour(s) ago` : `in ${hours} hour(s)`;
    } else if (minutes > 0) {
        return diffMs > 0 ? `${minutes} minute(s) ago` : `in ${minutes} minute(s)`;
    } else {
        return diffMs > 0 ? `${seconds} second(s) ago` : `in ${seconds} second(s)`;
    }
}

module.exports = { humanizeTimeDiff };