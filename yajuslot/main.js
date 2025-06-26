ikisugiBtn.addEventListener('click', () => {
  if(ikisugiBtn.disabled) return;

  stopAllSounds();
  isLocked = true;
  ikisugiBtn.disabled = true;
  ikisugiBtn.classList.remove('enabled');

  ikisugiOverlay.classList.add('show');

  console.log("イキスギ音声再生開始");
  ikisugiSound.volume = 1;
  ikisugiSound.muted = false;
  ikisugiSound.play();

  ikisugiSound.onended = () => {
    console.log("イキスギ音声再生終了");
    ikisugiOverlay.classList.remove('show');
    isLocked = false;
    spinCount = 0; // リセット
    ikisugiBtn.disabled = true;
  };
});
