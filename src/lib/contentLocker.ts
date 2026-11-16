declare global {
  interface Window {
    b_C?: () => void;
    rPGvN_bLP_TMiTQc?: { it: number; key: string };
  }
}

/**
 * Opens the AdBlueMedia Content Locker from a direct user click.
 * The official dashboard snippet is loaded from index.html in the document head.
 */
export function openAdBlueMediaLocker(): void {
  if (typeof window === 'undefined' || typeof window.b_C !== 'function') {
    throw new Error('AdBlueMedia Content Locker is not available.');
  }

  // Keep this synchronous so browsers do not block the locker as a popup.
  window.b_C();
}
