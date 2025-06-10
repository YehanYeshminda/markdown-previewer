import { Component, OnInit } from '@angular/core';
import { TemplateService, Template } from './services/template.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Markdown Previewer Updated After';
  markdownContent = '';
  isFullscreen = false;
  isDarkTheme = false;
  copySuccess = false;
  templates: Template[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.templates = this.templateService.getTemplates();
    this.categories = this.templateService.getTemplateCategories();
    this.markdownContent = this.templates[0].content;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    }
  }

  updateMarkdown(event: any) {
  }

  loadTemplate(template: Template) {
    this.markdownContent = template.content;
  }

  filterTemplatesByCategory(category: string) {
    this.selectedCategory = category;
    return category === 'All'
      ? this.templates
      : this.templates.filter(t => t.category === category);
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.markdownContent).then(
      () => {
        this.copySuccess = true;
        setTimeout(() => {
          this.copySuccess = false;
        }, 2000);
      },
      (err) => {
        console.error('Could not copy text: ', err);
      }
    );
  }

  downloadAsMarkdown() {
    this.downloadFile(this.markdownContent, 'markdown-document.md', 'text/markdown');
  }

  downloadAsHtml() {
    const markdownElement = document.querySelector('.markdown-preview > markdown');

    if (markdownElement) {
      const htmlContent = markdownElement.innerHTML;
      const fullHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown Export</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif; line-height: 1.6; padding: 20px; max-width: 800px; margin: 0 auto; }
    pre { background-color: #f5f5f5; padding: 15px; border-radius: 5px; overflow-x: auto; }
    code { font-family: 'Courier New', Courier, monospace; }
    blockquote { border-left: 4px solid #ccc; margin-left: 0; padding-left: 15px; color: #555; }
    table { border-collapse: collapse; width: 100%; }
    table, th, td { border: 1px solid #ddd; }
    th, td { padding: 10px; text-align: left; }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

      this.downloadFile(fullHtml, 'markdown-document.html', 'text/html');
    }
  }

  private downloadFile(content: string, filename: string, contentType: string) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  insertMarkdown(markdown: string) {
    const textarea = document.querySelector('.markdown-editor') as HTMLTextAreaElement;
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;
      const before = text.substring(0, start);
      const after = text.substring(end);

      const selected = text.substring(start, end);

      let formattedText = '';
      switch (markdown) {
        case 'bold':
          formattedText = `**${selected || 'bold text'}**`;
          break;
        case 'italic':
          formattedText = `*${selected || 'italic text'}*`;
          break;
        case 'heading':
          formattedText = `## ${selected || 'Heading'}`;
          break;
        case 'link':
          formattedText = selected ? `[${selected}](url)` : '[link text](url)';
          break;
        case 'list':
          formattedText = `\n- ${selected || 'list item'}\n- another item\n- third item`;
          break;
        case 'code':
          formattedText = selected ? `\`${selected}\`` : '`code`';
          break;
        case 'codeblock':
          formattedText = selected ?
            `\`\`\`\n${selected}\n\`\`\`` :
            '```\ncode block\n```';
          break;
      }

      this.markdownContent = before + formattedText + after;

      setTimeout(() => {
        textarea.focus();
        const newCursorPos = before.length + formattedText.length;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    }
  }
}
