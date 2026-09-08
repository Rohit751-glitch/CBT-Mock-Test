# TCS iON / DigiALM Authentic CBT Mock Assessment Platform

A professional web application replicating the authentic **TCS iON (DigiALM)** Computer-Based Test (CBT) examination environment used across Indian PSU, GATE, HAL, NMDC, DRDO, and SSC examinations.

---

## 🌟 What's Included

1. **Authentic TCS iON Examination Interface**:
   - Realistic Candidate Login Screen (Candidate details, system name, photo preview, version tag).
   - Verbatim General Instructions with the 5 TCS status legends (Not Visited, Not Answered, Answered, Marked for Review, Answered & Marked for Review).
   - Candidate Declaration screen with checkbox undertaking and language selection.
   - Live Countdown Timer with automatic exam submission when time expires.
   - Dynamic Section Tabs with live question counters.
   - Subbar with question type, marks per question, negative marks, and tool links.
   - Question Palette with responsive layout, collapsible sidebar, and active question indicator.
   - Pre-submission Exam Summary table showing section-by-section attempt metrics.
   - Integrated Virtual Scientific Calculator and Question Paper popup viewer.

2. **Rich Content & Media Support (Images, Circuits, Code, Graphs, Tables)**:
   - **Images & Diagrams**: Paste markdown `![Alt](url)` or click **"🖼️ Insert Local Image"** to select any PNG/JPG file from your PC; it is automatically converted into an offline Base64 embedded string.
   - **Click-to-Zoom Lightbox**: Clicking any image or diagram opens a full-screen high-resolution inspection modal.
   - **Circuits & Graphs in Code (Inline SVG)**: Paste vector SVG code directly into questions or options. Renders clean, high-precision circuit schematics and signal graphs.
   - **Code Blocks**: Embedded C, Python, Verilog, or Assembly code wrapped in ` ```lang ... ``` ` with a dark syntax theme and one-click **"📋 Copy"** button.
   - **Tables**: Supports Markdown tables (`| Col1 | Col2 |`) and HTML `<table>` elements for state tables, truth tables, and component specifications.
   - **Rich Options**: Options A, B, C, and D can also contain images, circuits, or code!

3. **Per-Question Time Tracking Engine**:
   - Actively logs the exact time (in seconds and minutes) spent on each question.
   - Real-time question stopwatch: `⏱️ Time on Question: MM:SS`.
   - Post-test Question Analysis table showing the duration spent on every single question.
   - Total test duration, average time per question, and section-level time tracking.
   - Downloadable CSV and JSON reports containing granular question-by-question time data.

4. **Built-in Digital Rough Sheet / Scribble Pad**:
   - Located right below the question for instant rough work, circuit sketching, and math calculations.
   - Touchpad, Mouse, and Stylus / Pen pressure support.
   - Pen mode, Eraser mode, color palette (Black, Blue, Red, Pencil Graphite), stroke thickness selector (Fine 2px, Medium 4px, Thick 8px), Undo stroke, and Clear Pad.
   - **Expandable / Infinite Height**: `➕ Expand Height (+300px)` button allows adding endless vertical canvas space and scrolling down as much as needed.
   - **Autosave per Question**: Your rough sketches are automatically linked and saved to each question ID. When moving between questions, rough notes are preserved and restored.
   - Review rough sketches in the post-exam solution review alongside official explanations!

5. **Dynamic Test Creator & Question Importer**:
   - Easily create new tests or import custom question sets.
   - Auto-detection of sections (e.g., `[Section: Electrical Engineering]`).
   - Configurable exam title, duration, marks per question, and negative marking (1/3rd, 1/4th, 1/2, 0, or custom).
   - Preloaded with 10 sample PSU questions (General Aptitude & Electrical Engineering with SVG circuit and C code).
   - LocalStorage persistence: Custom tests remain saved even after refreshing the browser.

6. **Post-Exam Scorecard & Solution Analysis**:
   - Overall Scorecard: Total Marks, Percentage, Accuracy %, Correct / Incorrect / Unattempted counts.
   - Section-wise Performance table.
   - Detailed Question-by-Question Solution Cards with explanations, selected vs correct options, time taken, and saved rough work images.
   - One-click export to CSV, JSON, and printable PDF.

---

## 🚀 How to Run on Your PC

1. Extract the `tcs_cbt_mock_test.zip` file on your PC.
2. Double-click `index.html` to open it in your browser (Chrome, Edge, Firefox, etc.).
3. Runs completely offline without any internet connection or installation required.
