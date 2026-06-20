#!/usr/bin/env node

// Test the exact sanitization logic used in the careers upload

function sanitizeFilename(filename) {
  return filename
    .normalize("NFD") // Normalize unicode (decompose accents, etc.)
    .replace(/[̀-ͯ]/g, "") // Remove diacritics
    .replace(/[^\w\s.-]/g, "") // Remove special chars entirely (em dash, ampersand, etc.)
    .replace(/\s+/g, "_") // Replace spaces with underscore
    .replace(/_{2,}/g, "_") // Collapse multiple underscores
    .replace(/\.+/g, ".") // Collapse multiple dots
    .replace(/^[._-]+|[._-]+$/g, "") // Remove leading/trailing special chars
    .trim(); // Remove whitespace
}

const testCases = [
  "Abdelrahman ELBELKASY — Sr. DevOps & Cloud Infra .pdf",
  "test.pdf",
  "Resume — 2024.pdf",
  "My CV & Portfolio.docx",
  "File...with...dots.pdf",
  "___leading_underscores.pdf",
  "Café_Résumé.pdf",
];

console.log("=".repeat(80));
console.log("FILENAME SANITIZATION TEST");
console.log("=".repeat(80));
console.log();

testCases.forEach((original) => {
  const sanitized = sanitizeFilename(original);
  const isSafe = /^[\w._-]+$/.test(sanitized);

  console.log(`Original:   "${original}"`);
  console.log(`Sanitized:  "${sanitized}"`);
  console.log(`Length:     ${original.length} → ${sanitized.length}`);
  console.log(`Safe chars: ${isSafe ? "✓ YES" : "✗ NO"}`);
  console.log();
});

// Test with timestamp and job_id like in production
const jobId = "cm2abc123";
const timestamp = Date.now();
const testFilename = "Abdelrahman ELBELKASY — Sr. DevOps & Cloud Infra .pdf";
const sanitized = sanitizeFilename(testFilename);
const fullPath = `${jobId}/${timestamp}-${sanitized}`;

console.log("=".repeat(80));
console.log("PRODUCTION PATH SIMULATION");
console.log("=".repeat(80));
console.log();
console.log(`Job ID:     ${jobId}`);
console.log(`Timestamp:  ${timestamp}`);
console.log(`Original:   ${testFilename}`);
console.log(`Sanitized:  ${sanitized}`);
console.log(`Full path:  ${fullPath}`);
console.log(`Path length: ${fullPath.length} chars`);
console.log();
