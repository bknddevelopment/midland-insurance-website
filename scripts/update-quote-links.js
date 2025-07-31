#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { glob } = require('glob');

async function updateQuoteLinks() {
  // Find all TypeScript/React files
  const files = await glob(['**/*.tsx', '**/*.jsx'], {
    ignore: ['node_modules/**', '.next/**', 'scripts/**'],
    cwd: process.cwd()
  });

  console.log(`Found ${files.length} files to check...`);

  let updatedFiles = 0;

  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    let content = await fs.readFile(filePath, 'utf8');
    const originalContent = content;

    // Skip if already updated
    if (content.includes('EXTERNAL_URLS.QUOTE_FORM')) {
      continue;
    }

    // Check if file contains quote links
    if (!content.includes('href="/quote"') && !content.includes("href='/quote'")) {
      continue;
    }

    // Add imports if not present
    if (content.includes('href="/quote"') || content.includes("href='/quote'")) {
      // Add import for EXTERNAL_URLS if not present
      if (!content.includes("from '@/lib/constants/urls'")) {
        // Find the last import statement
        const importRegex = /^import.*from.*;$/gm;
        let lastImportMatch;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
          lastImportMatch = match;
        }

        if (lastImportMatch) {
          const insertPosition = lastImportMatch.index + lastImportMatch[0].length;
          content = content.slice(0, insertPosition) + 
            "\nimport { EXTERNAL_URLS } from '@/lib/constants/urls';" +
            "\nimport { getLinkProps } from '@/lib/utils/links';" +
            content.slice(insertPosition);
        }
      }

      // Replace quote links
      // Pattern 1: href="/quote"
      content = content.replace(
        /href="\/quote"/g,
        'href={EXTERNAL_URLS.QUOTE_FORM}'
      );

      // Pattern 2: href='/quote'
      content = content.replace(
        /href='\/quote'/g,
        'href={EXTERNAL_URLS.QUOTE_FORM}'
      );

      // Add getLinkProps to Link components with quote URL
      // This is more complex and requires careful regex
      content = content.replace(
        /<Link\s+([\s\S]*?)href=\{EXTERNAL_URLS\.QUOTE_FORM\}([\s\S]*?)>/g,
        (match, before, after) => {
          if (!match.includes('getLinkProps')) {
            return `<Link ${before}href={EXTERNAL_URLS.QUOTE_FORM}${after} {...getLinkProps(EXTERNAL_URLS.QUOTE_FORM)}>`;
          }
          return match;
        }
      );
    }

    // Only write if content changed
    if (content !== originalContent) {
      await fs.writeFile(filePath, content);
      console.log(`✅ Updated: ${file}`);
      updatedFiles++;
    }
  }

  console.log(`\n✨ Updated ${updatedFiles} files with new quote URL`);
}

updateQuoteLinks().catch(console.error);