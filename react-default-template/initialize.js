import { writeFile } from "fs/promises";
import { randomBytes } from "crypto";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Generate a unique public salt (32 bytes, Base64 encoded)
const publicSalt = randomBytes(32).toString("base64");

// Define the TypeScript file content
const tsContent = `export const publicSalt = "${publicSalt}";\n`;

// Define the file path
const filePath = join(__dirname, "src", "qapp-config.ts");

// Write the TypeScript file
try {
    await writeFile(filePath, tsContent, "utf8");
    console.log("✅ qapp-config.ts has been created with a unique public salt.");
} catch (error) {
    console.error("❌ Error writing qapp-config.ts:", error);
}
