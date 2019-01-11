document.getElementById("playButton").addEventListener("click", event => {
  let Oberon = document.getElementById("Oberon").checked;
  let Mordred = document.getElementById("Mordred").checked;
  let Percival = document.getElementById("Percival").checked;
  let Morgana = document.getElementById("Morgana").checked;

  let lines = [
    { text: "Everyone close your eyes and extend your hand into a fist in front of you", condition: true },
    { text: "Minions of Mordred", condition: true },
    { text: "Not Oberon", condition: Oberon },
    { text: "Open your eyes and look around so that you know all agents of Evil", condition: true },
    { text: "", condition: true },
    { text: "Minions of Mordred", condition: true },
    { text: "Close your eyes", condition: true },
    { text: "All players should have their eyes closed and in a fist in front of them", condition: true },
    { text: "Minions of Mordred", condition: true },
    { text: "Not Mordred himself", condition: Mordred },
    { text: "extend your thumb so that Merlin will know of you", condition: true },
    { text: "Merlin, Open your eyes and see the agents of Evil", condition: true },
    { text: "", condition: true },
    { text: "Minions of Mordred", condition: true },
    { text: "put your thumb down and re-form your hand into a fist", condition: true },
    { text: "Merlin", condition: true },
    { text: "Close your eyes", condition: true },
    { text: "All players should have their eyes closed and in a fist in front of them" },
    { text: "Merlin", condition: Percival },
    { text: "and Morgana", condition: Percival && Morgana },
    { text: "extend your thumb so that Percival may know of you", condition: Percival },
    { text: "Percival, open your eyes so you may know Merlin", condition: Percival },
    { text: "and Morgana", condition: Percival && Morgana },
    { text: "", condition: Percival },
    { text: "Merlin", condition: Percival },
    { text: "and Morgana", condition: Percival && Morgana },
    { text: "Put your thumb down and re-form your hand into a fist", condition: Percival },
    { text: "Percival", condition: Percival },
    { text: "Close your eyes", condition: Percival },
    { text: "All players should have their eyes closed and in a fist in front of them", condition: Percival },
    { text: "", condition: true },
    { text: "Everyone open your eyes", condition: true }
  ];

  function readLine() {
    if (!lines.length) {
      return;
    }
      
    let line = lines.shift();
    if (line.condition) {
      if (line.text) {
        responsiveVoice.speak(line.text, "US English Female", { onend: readLine });
      } else {
        responsiveVoice.speak("This is a pause now", "US English Female", { volume: 0, rate: 0.1, onend: readLine });
      }
    } else {
      readLine();
    }
  }

  document.getElementById("result").innerText = lines
    .filter(line => line.condition)
    .map(line => line.text)
    .join("\n");

  readLine();
});

document.getElementById("stopButton").addEventListener("click", event => {
  responsiveVoice.cancel();
});
