# Component Pattern: Microinteractions & Feedback Cues

Microinteractions add tactile responsiveness to basic interface elements.

## Microinteraction Patterns

### 1. Magnetic Button
* **Mechanism**: Button subtly shifts position towards the user's cursor when hovered within a 20px radius (`translateX/Y` scaled by distance).
* **When To Use**: Primary hero CTA or floating contact action.

### 2. Copy-to-Clipboard Confirmation
* **Mechanism**: Clicking a code snippet or API key button instantly transitions the copy icon (`ClipboardIcon`) into a checkmark (`CheckIcon`) with a green accent ring and floating "Copied!" tooltip for 2000ms.

### 3. Smooth Toggle Switch Physics
* **Mechanism**: Sliding knob uses spring physics (`stiffness: 500, damping: 30`) with a slight expansion (`scaleX(1.1)`) during mid-travel.
