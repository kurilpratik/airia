## AiRIA - AI for ARIA Web Accessibility

This project acts as a tool that takes care of everything ARIA, web accessibility using LLM powered code. It helps users with disabilities to access websites comfortably by finetuning the screen reader as per the content, making the internet and inclusive space.

> This project was developed at Hack For Impact, 2025 @ IIIT Delhi.

### How this works?

1. Scans the source code
2. Identifies the context of code
3. Modifes the code to fit ARIA standards

### Why this matters?

- Legal compliance: Ensures WCAG 2.1 and ADA compliance
- Wider Audience: Improves accessibility for users with disabilities
- Developer Productivity: Automates best practices and saves time
- Innovation: Uses AI for meaningful impact in web development

### Key Features

- [x] Code Scanning
- [x] Automated AI Fixes
- [ ] IDE integration
- [ ] Reports and Analytics

### Getting Started

```bash
git clone
# or
cd airia
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result and to test it out.

### Technology Stack

- Nextjs
- OpenRouter
- deepseek-r1-distill-llama-70b model
- Tailwind
- React Dropzone
- React Syntax Highlighter

### Screenshots

Landing Page
![Landing Page](/public/img-landing.png)

Dashboard
![Dashboard](/public/img-dashboard.png)

Code Suggestions
![Code Suggestions](/public/img-suggestion.png)

### Scope of Work

- Add IDE integration
- Media context awareness
- Chrome extension that scans website & adds ARIA modification on the go
- Summarize and directions
- Voice chat with website
