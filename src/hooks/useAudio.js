import { useCallback, useRef } from 'react';

// Web Audio API hook for sound effects
export function useAudio() {
  const ctxRef = useRef(null);

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctxRef.current;
  }, []);

  const playTone = useCallback((freq, duration = 0.15, type = 'sine', vol = 0.3) => {
    try {
      const ctx = getCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Silently fail if audio not available
    }
  }, [getCtx]);

  const playCorrect = useCallback(() => {
    playTone(523, 0.1); // C5
    setTimeout(() => playTone(659, 0.1), 100); // E5
    setTimeout(() => playTone(784, 0.2), 200); // G5
  }, [playTone]);

  const playIncorrect = useCallback(() => {
    playTone(300, 0.15, 'triangle', 0.2);
    setTimeout(() => playTone(250, 0.2, 'triangle', 0.2), 150);
  }, [playTone]);

  const playClick = useCallback(() => {
    playTone(800, 0.05, 'sine', 0.15);
  }, [playTone]);

  const playComplete = useCallback(() => {
    // Victory fanfare
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.2, 'sine', 0.25), i * 150);
    });
  }, [playTone]);

  const playLevelUp = useCallback(() => {
    playTone(440, 0.1);
    setTimeout(() => playTone(554, 0.1), 100);
    setTimeout(() => playTone(659, 0.1), 200);
    setTimeout(() => playTone(880, 0.25), 300);
  }, [playTone]);

  return { playCorrect, playIncorrect, playClick, playComplete, playLevelUp };
}
