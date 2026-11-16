let lockerLoadPromise: Promise<void> | null = null;

declare global {
  interface Window {
    b_C?: () => void;
    rPGvN_bLP_TMiTQc?: { it: number; key: string };
  }
}

/**
 * Loads the AdBlueMedia locker only after a visitor explicitly clicks an offer CTA.
 * If the third-party script cannot load, the caller can fall back to the sponsor URL.
 */
export async function openAdBlueMediaLocker(): Promise<void> {
  if (typeof window === 'undefined') {
    throw new Error('Content Locker is only available in a browser.');
  }

  if (typeof window.b_C === 'function') {
    window.b_C();
    return;
  }

  if (!lockerLoadPromise) {
    lockerLoadPromise = new Promise<void>((resolve, reject) => {
      window.rPGvN_bLP_TMiTQc = { it: 4642349, key: 'ad0c6' };

      const script = document.createElement('script');
      script.src = 'https://d18k3i06xdslhs.cloudfront.net/5510924.js';
      script.async = true;
      script.onload = () => {
        if (typeof window.b_C === 'function') resolve();
        else reject(new Error('AdBlueMedia locker function was not initialized.'));
      };
      script.onerror = () => reject(new Error('AdBlueMedia locker script failed to load.'));
      document.head.appendChild(script);
    }).catch((error) => {
      lockerLoadPromise = null;
      throw error;
    });
  }

  await lockerLoadPromise;

  if (typeof window.b_C !== 'function') {
    throw new Error('AdBlueMedia locker function is unavailable.');
  }

  window.b_C();
}
