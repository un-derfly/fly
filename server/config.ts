export const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
  throw new Error("GITHUB_TOKEN environment variable is required");
}

export const GITHUB_REPO = "un-derfly/fly";
export const GITHUB_BRANCH = "main";
export const GITHUB_STORAGE_FILE = "chat-storage.json";
