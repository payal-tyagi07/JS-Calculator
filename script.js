* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.3s, color 0.2s;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Light theme (default) */
body.light {
    background: #f0f0f0;
}
body.light .calculator {
    background: white;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}
body.light .display {
    background: #f8f9fa;
    color: #212529;
}

/* Dark theme */
body.dark {
    background: #1e1e2f;
}
body.dark .calculator {
    background: #2d2d44;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
body.dark .display {
    background: #3a3a55;
    color: white;
}
body.dark button {
    background: #4a4a6a;
    color: white;
}
body.dark button:hover {
    background: #5e5e82;
}

.calculator {
    width: 350px;
    border-radius: 20px;
    padding: 20px;
}

.theme-toggle {
    text-align: right;
    margin-bottom: 15px;
}
#themeBtn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 20px;
}

.display {
    padding: 20px;
    text-align: right;
    border-radius: 15px;
    margin-bottom: 20px;
    min-height: 90px;
}
.previous-operand {
    font-size: 1rem;
    opacity: 0.7;
    min-height: 25px;
}
.current-operand {
    font-size: 2.5rem;
    font-weight: bold;
    word-wrap: break-word;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
button {
    padding: 18px;
    font-size: 1.3rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.05s linear;
}
button:active {
    transform: scale(0.95);
}
.number {
    background: #e9ecef;
}
.operator, .clear, .backspace {
    background: #ffc107;
}
.equals {
    background: #28a745;
    color: white;
    grid-column: span 2;
}
.zero {
    grid-column: span 2;
}