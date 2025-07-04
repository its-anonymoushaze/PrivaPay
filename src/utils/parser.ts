
export function parseJSONLikeString(recordString: string): string {
    const json = recordString.replace(/(['"])?([a-z0-9A-Z_.]+)(['"])?/g, '"$2" ');
    const correctJson = json;
    return JSON.parse(correctJson);
}
