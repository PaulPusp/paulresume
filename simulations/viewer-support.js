// Presentation-only handling for browsers that cannot create a WebGL context.
function showRendererProblem() {
  const view = document.querySelector('#view');
  if (!view || view.querySelector('.webgl-unavailable')) return;
  const notice = document.createElement('div');
  notice.className = 'webgl-unavailable';
  notice.setAttribute('role','status');
  notice.textContent = '3D rendering is unavailable in this browser. Enable WebGL / hardware acceleration and reload to run the reconstruction. Technical details and source assumptions remain available.';
  Object.assign(notice.style,{position:'absolute',left:'24%',right:'24%',top:'40%',padding:'24px',border:'1px solid #58d8ee',borderRadius:'12px',background:'#08131d',color:'#edf7fb',font:'14px/1.6 system-ui',zIndex:'12',textAlign:'center'});
  view.append(notice);
  const phase = document.querySelector('#phaseTitle');
  if (phase) phase.textContent = '3D viewer unavailable';
  const explanation = document.querySelector('#phaseExplain');
  if (explanation) explanation.textContent = 'WebGL is required to render this reconstruction. No simulation results have been generated.';
  ['play','timeline'].forEach(id => { const control = document.getElementById(id); if (control) control.disabled = true; });
}
window.addEventListener('error', event => { if (/webgl/i.test(event.message || '')) showRendererProblem(); });
document.addEventListener('DOMContentLoaded', () => { if (!document.querySelector('#view canvas')) showRendererProblem(); });
