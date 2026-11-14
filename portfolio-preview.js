const viewport = document.querySelector('.personal-preview-viewport');
if (viewport) {
  const frame = viewport.querySelector('iframe');
  const fitPreview = () => {
    frame.style.transform = `scale(${viewport.clientWidth / 1440})`;
  };
  fitPreview();
  new ResizeObserver(fitPreview).observe(viewport);
}
