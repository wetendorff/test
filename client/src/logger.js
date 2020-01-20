const output = document.getElementById('output');

export default function log(message) {
  const time = new Date().toLocaleTimeString();
  output.value += `${time} - ${message}\n`;
}
