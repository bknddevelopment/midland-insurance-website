#!/bin/bash

# Find all files with quote links
echo "Finding all files with /quote links..."

# Create a list of files that need updating
files=$(find . -name "*.tsx" -o -name "*.jsx" | grep -v node_modules | grep -v .next | xargs grep -l 'href=.*\/quote')

echo "Found $(echo "$files" | wc -l) files to update"

# Process each file
for file in $files; do
    # Skip if already updated
    if grep -q "EXTERNAL_URLS.QUOTE_FORM" "$file"; then
        echo "✓ Already updated: $file"
        continue
    fi
    
    # Skip HomePage.tsx and Hero.tsx as they're already done
    if [[ "$file" == "./app/HomePage.tsx" ]] || [[ "$file" == "./components/Hero.tsx" ]]; then
        echo "✓ Already updated: $file"
        continue
    fi
    
    echo "Updating: $file"
    
    # Create a temporary file
    tmp_file="${file}.tmp"
    
    # Check if the file has any imports
    if grep -q "^import" "$file"; then
        # Add imports after the last import if not present
        if ! grep -q "@/lib/constants/urls" "$file"; then
            # Use awk to add imports after last import
            awk '
                /^import/ { last_import = NR }
                { lines[NR] = $0 }
                END {
                    for (i = 1; i <= NR; i++) {
                        print lines[i]
                        if (i == last_import) {
                            print "import { EXTERNAL_URLS } from '\''@/lib/constants/urls'\'';"
                            print "import { getLinkProps } from '\''@/lib/utils/links'\'';"
                        }
                    }
                }
            ' "$file" > "$tmp_file"
            
            # Replace href="/quote" with href={EXTERNAL_URLS.QUOTE_FORM}
            sed -i.bak 's|href="/quote"|href={EXTERNAL_URLS.QUOTE_FORM}|g' "$tmp_file"
            sed -i.bak "s|href='/quote'|href={EXTERNAL_URLS.QUOTE_FORM}|g" "$tmp_file"
            
            # Move the temp file back
            mv "$tmp_file" "$file"
            rm -f "${tmp_file}.bak"
            
            echo "✅ Updated: $file"
        fi
    fi
done

echo "✨ Update complete!"