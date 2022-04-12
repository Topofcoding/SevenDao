import SVCImg from "../assets/image/logo.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "svc") {
        return toUrl(SVCImg);
    }
    throw Error(`Token url doesn't support: ${name}`);
}
