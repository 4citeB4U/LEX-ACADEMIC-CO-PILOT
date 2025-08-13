
# LΞX Ops Center

**Your private, voice-first, AI-powered academic co-pilot.**

LΞX is a sophisticated, browser-based operations center designed for the modern student. It's a private, offline-first application that leverages the power of the Google Gemini API to help you manage tasks, set goals, conduct research, and conquer your academic challenges. All your data is stored exclusively on your device, ensuring complete privacy.

---

## Core Features

The Ops Center is divided into several specialized tools:

*   **The Pulse**: Your mission dashboard, providing an at-a-glance overview of daily tasks, upcoming deadlines, and quick actions.
*   **The Magna Carta**: The strategic command center for your life. Define and track long-term goals, and use the Career Blueprint tool to generate AI-powered roadmaps for your future ambitions.
*   **The Grind**: A powerful task management system with multiple "lenses" to view your work:
    *   **Lanes**: A Kanban-style board for tracking progress (`To Do`, `In Progress`, `Done`).
    *   **Horizon**: A 7-day calendar view to plan your week.
    *   **Matrix**: An Eisenhower Matrix to prioritize tasks based on urgency and importance.
    *   **Ledger**: A detailed table view for sorting and filtering all assignments.
*   **The Lab**: Your digital notebook. Write down ideas, automatically save transcripts of conversations with LΞX, and view analysis results.
*   **The Analyzer**: A versatile intelligence tool. Upload documents (`PDF`, `DOCX`) or images to have LΞX summarize them, extract key information, or describe what's in the picture.
*   **The Intel**: Your personal research agent. Ask any question, and LΞX will use Google Search to gather a comprehensive dossier with text overviews, image galleries, and links to source documents.
*   **The Campus**: An explorer tool to get detailed, up-to-date information on any college or university.
*   **The Garage**: Deeply customize your experience. Adjust LΞX's AI personality, change the UI theme, manage voice settings, and handle data backups.
*   **Voice Control**: Navigate the app, dictate notes, and issue commands hands-free with a robust voice-first interface.

## Tech Stack

*   **Frontend**: React & TypeScript
*   **Styling**: Tailwind CSS (via CDN)
*   **Local Database**: Dexie.js (a powerful wrapper for IndexedDB)
*   **AI Engine**: Google Gemini API (`@google/genai`)
*   **Offline Capability**: Service Worker for caching and offline access.

---

## Deployment to GitHub Pages

Follow these steps to deploy the LΞX Ops Center to your own GitHub Pages site.

### 1. API Key Configuration (CRITICAL)

This application requires a Google Gemini API key to function. The code expects this key to be available as `process.env.API_KEY`.

**WARNING**: GitHub Pages serves static files. You **must not** hardcode your API key directly into the files, as it will be publicly visible.

The correct way to handle this is to use a build process that substitutes the key at deployment time.

**Recommended Solution (using GitHub Actions):**
1.  **Get an API Key**: Obtain your API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  **Add Key to GitHub Secrets**:
    *   In your GitHub repository, go to `Settings` > `Secrets and variables` > `Actions`.
    *   Click `New repository secret`.
    *   Name the secret `VITE_API_KEY`.
    *   Paste your API key as the value.
3.  **Set up a Build Workflow**: You will need to introduce a build tool like Vite or Create React App and a GitHub Actions workflow file (`.github/workflows/deploy.yml`). This workflow will check out your code, build the static files (replacing `process.env.API_KEY` with your secret), and deploy the result to the `gh-pages` branch.

### 2. GitHub Pages Setup

1.  Push all the project files (`index.html`, `README.md`, `src/`, `public/`, etc.) to your GitHub repository.
2.  In your repository settings, go to the `Pages` tab.
3.  Under `Build and deployment`, set the **Source** to `Deploy from a branch`.
4.  Select the `gh-pages` branch (or your main branch if you are not using a build step) and the `/root` folder, then click **Save**.

### 3. SPA Routing on GitHub Pages

This project includes a `404.html` file. This is a common method to enable single-page applications to work correctly on GitHub Pages. It catches any requests for pages that don't physically exist and redirects them to your `index.html`, allowing the application to handle its own state. No configuration is needed for this; simply ensure the `404.html` file is in the root of your deployment.

---

## A Note on Privacy

Your privacy is paramount. All of your data (notes, tasks, goals, etc.) is stored **locally on your device** inside your browser's IndexedDB storage. It is never sent to an external server or seen by anyone else.

The only data that leaves your device are the prompts and commands you issue to LΞX, which are sent to the Google Gemini API for processing to generate a response.
# LEX-ACADEMIC-CO-PILOT
# LEX-ACADEMIC-CO-PILOT
# LEX-ACADEMIC-CO-PILOT
