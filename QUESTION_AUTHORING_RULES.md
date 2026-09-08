# 📋 CBT UNIVERSAL QUESTION BANK SPECIFICATION
> **Purpose:** Single universal format for authoring questions with optional tables, code, circuits, and images without breaking the parser.

---

## 🚀 UNIVERSAL QUESTION FORMAT (ONE BOX FOR EVERYTHING)

Simply paste your questions directly into the Question Bank box. Everything is natural and optional:

```text
[Section: General Aptitude]
Q1. If a train running at 72 km/h crosses an electric pole in 15 seconds, what is the length of the train?
A) 250 meters
B) 300 meters
C) 360 meters
D) 400 meters
Ans: B
Exp: Speed = 72 * (5/18) = 20 m/s. Length = 20 * 15 = 300 meters.

[Section: Electrical Engineering]
Q2. For the circuit shown below, find the steady-state current:
![Circuit Diagram](circuit.png)
```c
// Optional code block if needed
void Motor_PWM_Init(void) {
    TIM1->PSC = 71;
}
```
| Parameter | Value |
| Voltage | 24 V |
A) 2 A
B) 4 A
C) 6 A
D) 8 A
Ans: B
Exp: Step-by-step calculation here...
```

---

## 📐 CORE RULES:

1. **Sections:** Start with `[Section: Section Name]`.
2. **Question Numbering:** `Q1.`, `Q2.`, etc.
3. **4 Options:** Provide `A)`, `B)`, `C)`, `D)` on separate lines.
4. **Answer Key:** `Ans: X` on its own line after Option D.
5. **Explanation (Optional):** `Exp: Solution text...` (Omit if not needed).
6. **Rich Media (All Optional):**
   - **Images:** `![Alt Text](url_or_file_path)` or directly paste via **Ctrl+V** inside the box!
   - **Code Blocks:** Wrap in ```c ... ```.
   - **Tables:** Standard markdown tables `| Col 1 | Col 2 |`.
   - **Circuits (SVG):** Inline `<svg viewBox="...">...</svg>`.
   - **Options with Media:** Options can also have images or code: `A) ![Waveform](w1.png)`.
