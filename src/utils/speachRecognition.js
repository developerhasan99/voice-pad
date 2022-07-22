const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

export default recognition;
