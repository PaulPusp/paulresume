(() => {
  const workbench = document.querySelector('#simulation-workbench');
  if (!workbench) return;
  const demos = {
    local: {path:'simulations/local-floodplain.html',title:'Local floodplain interactive scenario',description:'Explore river stage, rainfall, terrain bias, and inundation in a local floodplain scenario.'},
    cyclone: {path:'simulations/cyclone-impact.html',title:'Cyclone compound impact simulator',description:'Compare cyclone tracks and explore wind, rainfall, surge, drainage, embankment, and exposure scenarios.'},
    nepal: {path:'simulations/nepal-glof.html',title:'Nepal glacial-lake flood reconstruction',description:'Explore the Purepu–Rasuwagadhi reconstruction, flood propagation, terrain, and scenario assumptions. Uncalibrated; not a forecast.'}
  };
  const tabs = [...workbench.querySelectorAll('[data-simulation]')];
  const panel = workbench.querySelector('#simulation-panel');
  const frame = workbench.querySelector('iframe');
  const status = workbench.querySelector('#simulation-status');
  let selected = 'local';
  function activate(key) {
    const demo = demos[key];
    if (!demo) return;
    selected = key;
    tabs.forEach(tab => { const active = tab.dataset.simulation === key; tab.setAttribute('aria-selected',String(active)); tab.tabIndex = active ? 0 : -1; });
    panel.setAttribute('aria-labelledby',`sim-tab-${key}`);
    workbench.querySelector('#simulation-description').textContent = demo.description;
    workbench.querySelector('#simulation-open').href = demo.path;
    workbench.querySelector('#simulation-download').href = demo.path;
    frame.title = demo.title;
    status.textContent = 'Loading interface…';
    frame.src = demo.path;
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click',() => activate(tab.dataset.simulation));
    tab.addEventListener('keydown',event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); tabs[next].focus(); activate(tabs[next].dataset.simulation);
    });
  });
  frame.addEventListener('load',() => { status.textContent = 'Interface loaded. Data availability is shown inside the simulation.'; });
  workbench.querySelector('#simulation-reload').addEventListener('click',() => activate(selected));
})();
