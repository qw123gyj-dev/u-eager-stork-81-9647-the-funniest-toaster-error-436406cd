import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The funniest error message a kitchen toaster would show its owner.
// One line, at most 120 characters, written like a real appliance display.
const MESSAGE = "ERROR 451: TOAST BURNED. I WAS TRYING TO IMPRESS THE SMOKE ALARM.";

function validateMessage(message: string): void {
  if (typeof message !== "string") {
    throw new Error("Message must be a string.");
  }
  if (message.length === 0) {
    throw new Error("Message must not be empty.");
  }
  if (message.trim().length === 0) {
    throw new Error("Message must not be only whitespace.");
  }
  if (message !== message.trim()) {
    throw new Error("Message must not have leading or trailing whitespace.");
  }
  if (message.includes("\n") || message.includes("\r")) {
    throw new Error("Message must be exactly one line.");
  }
  if (message.includes("\t")) {
    throw new Error("Message must not contain tabs — a toaster display cannot render them.");
  }
  // Reject any other control characters: a real appliance display
  // can only show printable text, and the gate requires clean UTF-8.
  for (const ch of message) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) {
      throw new Error(`Message contains a non-printable character (U+${code.toString(16).toUpperCase().padStart(4, "0")}).`);
    }
  }
  if ([...message].length !== message.length && message.length > 120) {
    throw new Error("Message length check failed.");
  }
  if (message.length > 120) {
    throw new Error(`Message must be at most 120 characters, got ${message.length}.`);
  }
}

function main(): void {
  validateMessage(MESSAGE);

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });

  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, MESSAGE, "utf8");

  const written = readFileSync(outputPath, "utf8");
  if (written !== MESSAGE) {
    throw new Error("Verification failed: file contents do not match the message exactly.");
  }

  console.log(MESSAGE);
  console.log(`Character count: ${MESSAGE.length}`);
}

main();
