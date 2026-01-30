// 1. Controlling the 'Message' Paragraph
const messageDisplay = document.getElementById('message');
messageDisplay.innerText = "The Utility Room has successfully delivered the message!";
messageDisplay.style.color = "blue";

// 2. Controlling the 'System Status' Div
const statusDisplay = document.getElementById('system-status');
statusDisplay.innerText = "SYSTEM ONLINE: Communication Secure";
statusDisplay.style.color = "green";
statusDisplay.style.fontWeight = "bold";

console.log("Handshake Complete: Porch updated by Utility Room.");