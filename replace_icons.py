import os
import glob

target_html = """          <div class="mt-4 flex gap-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
              aria-label="Facebook">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h4v-9h3.61L17 8h-3V7a1 1 0 0 1 1-1h3V2h-3c-3.3 0-6 2.7-6 6z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4405F] text-white hover:opacity-90 transition-opacity"
              aria-label="Instagram">
              <svg class="h-4 w-4 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#16A34A] text-white hover:opacity-90 transition-opacity"
              aria-label="Tripadvisor">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 1.5a10.5 10.5 0 0 0-5.87 19.16L6 21l3.5-.82a10.45 10.45 0 0 0 5 0l3.5.82-.13-.34A10.5 10.5 0 0 0 12 1.5zm-3.5 13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm7 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
              aria-label="YouTube">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>"""

replacement_html = """          <div class="mt-4 flex gap-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
              aria-label="Facebook">
              <i data-lucide="facebook" class="h-4 w-4 fill-current"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#E4405F] text-white hover:opacity-90 transition-opacity"
              aria-label="Instagram">
              <i data-lucide="instagram" class="h-4 w-4"></i>
            </a>
            <a href="https://www.tripadvisor.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#16A34A] text-white hover:opacity-90 transition-opacity"
              aria-label="Tripadvisor">
              <i data-lucide="compass" class="h-4 w-4"></i>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
              aria-label="YouTube">
              <i data-lucide="youtube" class="h-4 w-4 fill-current"></i>
            </a>
          </div>"""

html_files = glob.glob('/Users/shresthastella/Documents/Learning/Panorama/html/*.html')

for filepath in html_files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    if target_html in content:
        new_content = content.replace(target_html, replacement_html)
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"Target block not found in {filepath}")
