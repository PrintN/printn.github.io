(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

async function fetchAndRenderBlogPreviews() {
    const githubRepo = 'PrintN/printn.github.io'; // GitHub repository
    const folderPath = 'blogs'; // Path to your Markdown files within the repository

    try {
        const response = await fetch(`https://api.github.com/repos/${githubRepo}/contents/${folderPath}`);
        if (!response.ok) {
            throw new Error('Failed to fetch markdown files');
        }
        const fileList = await response.json();

        // Filter out files that are not Markdown
        const markdownFiles = fileList.filter(file => file.name.toLowerCase().endsWith('.md'));

        const blogsContainer = document.getElementById('blogs-container');
        blogsContainer.innerHTML = ''; // Clear existing content

        // Render each blog preview
        markdownFiles.forEach(async (file) => {
            try {
                const mdResponse = await fetch(file.download_url);
                if (!mdResponse.ok) {
                    throw new Error(`Failed to fetch ${file.name}`);
                }
                const mdContent = await mdResponse.text();

                // Parse front matter (metadata) from Markdown content
                const { data, content } = parseMarkdown(mdContent);

                // Extract metadata fields
                const title = data.title || 'Untitled';
                const pubDate = data.pubDate || '';
                const description = data.description || '';
                const author = data.author || '';
                const imageUrl = data.image ? data.image.url : ''; // URL of the image
                const imageAlt = data.image ? data.image.alt : ''; // Alt text for the image
                const tags = data.tags || []; // Array of tags

                // Create blog preview element
                const blogPreview = document.createElement('div');
                blogPreview.classList.add('blog-preview');

                // Content initially shown in preview
                blogPreview.innerHTML = `
                    <button class="close-button">&times;</button>
                    <div class="blog-header">
                        ${imageUrl ? `<img src="${imageUrl}" alt="${imageAlt}" class="blog-image">` : ''}
                        <div class="blog-info">
                            <h3>${title}</h3>
                            <p class="blog-description">${description}</p>
                            <p class="blog-meta">Published on ${pubDate} by ${author}</p>
                        </div>
                    </div>
                    <div class="blog-tags">
                        ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                `;

                // Full content hidden initially
                const fullContent = document.createElement('div');
                fullContent.classList.add('blog-full-content');
                fullContent.innerHTML = convertMarkdownToHtml(content);

                // Append full content to blog preview
                blogPreview.appendChild(fullContent);

                // Add event listener to "close" button
                const closeButton = blogPreview.querySelector('.close-button');
                closeButton.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent triggering the preview click event
                    blogPreview.classList.remove('expanded');
                    document.querySelectorAll('.blog-preview').forEach(preview => {
                        preview.style.display = 'block'; // Show all previews
                    });
                });

                // Toggle full content visibility on preview click
                blogPreview.addEventListener('click', () => {
                    const currentlyExpanded = document.querySelector('.blog-preview.expanded');
                    if (currentlyExpanded && currentlyExpanded !== blogPreview) {
                        currentlyExpanded.classList.remove('expanded');
                        currentlyExpanded.style.display = 'block'; // Show other previews
                    }
                    blogPreview.classList.add('expanded');
                    document.querySelectorAll('.blog-preview').forEach(preview => {
                        if (preview !== blogPreview) {
                            preview.style.display = 'none'; // Hide other previews
                        }
                    });
                });

                // Append blog preview to container
                blogsContainer.appendChild(blogPreview);
            } catch (error) {
                console.error(`Error fetching ${file.name}:`, error);
            }
        });
    } catch (error) {
        console.error('Error fetching markdown files:', error);
    }
}

// Function to parse Markdown content and extract front matter (simplified)
function parseMarkdown(mdContent) {
    const delimiter = '---';
    const delimiterIndex = mdContent.indexOf(delimiter, 1); // Find the second delimiter
    if (delimiterIndex !== -1) {
        const frontMatterString = mdContent.substring(0, delimiterIndex + delimiter.length);
        const content = mdContent.substring(delimiterIndex + delimiter.length).trim();
        
        // Manual parsing of front matter
        const data = {};
        frontMatterString.slice(delimiter.length, -delimiter.length)
            .trim()
            .split('\n')
            .forEach(line => {
                const [key, value] = line.split(':').map(item => item.trim());
                if (key && value) {
                    // Convert tags to array if applicable
                    if (key === 'tags') {
                        data[key] = value.split(',').map(tag => tag.trim());
                    } else if (key === 'image') {
                        // Parse image object
                        const imageObj = {};
                        value.split('\n').forEach(prop => {
                            const [propKey, propValue] = prop.split(':').map(item => item.trim());
                            if (propKey && propValue) {
                                imageObj[propKey] = propValue.slice(1, -1); // Remove quotes
                            }
                        });
                        data[key] = imageObj;
                    } else {
                        data[key] = value;
                    }
                }
            });

        return { data, content };
    }
    return { data: {}, content: mdContent };
}

function convertMarkdownToHtml(markdown) {
    // Replace Markdown headers with corresponding HTML headers
    markdown = markdown
        .replace(/^######\s+(.*)$/gm, '<h6>$1</h6>')
        .replace(/^#####\s+(.*)$/gm, '<h5>$1</h5>')
        .replace(/^####\s+(.*)$/gm, '<h4>$1</h4>')
        .replace(/^###\s+(.*)$/gm, '<h3>$1</h3>')
        .replace(/^##\s+(.*)$/gm, '<h2>$1</h2>')
        .replace(/^#\s+(.*)$/gm, '<h1>$1</h1>');

    // Convert bold and italic text
    markdown = markdown
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert bold (**text**) to <strong>
        .replace(/\*(.*?)\*/g, '<em>$1</em>'); // Convert italic (*text*) to <em>

    // Convert unordered lists
    markdown = markdown
        .replace(/^- (.*)$/gm, '<li>$1</li>') // Convert Markdown lists (- item) to <li>
        .replace(/<\/li><li>/g, '</li><li>'); // Replace list item joins

    // Wrap list items in <ul>
    markdown = markdown
        .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');

    // Convert line breaks
    markdown = markdown.replace(/\n/g, '<br>');

    return markdown;
}

// Call the function to fetch and render blog previews when the page loads
window.onload = fetchAndRenderBlogPreviews;