
export const APP_ERR_TAG = "[ChessApp]";

export function makeErrorSubtag(subtag: string) {
  return `${APP_ERR_TAG} ${subtag} `;
}