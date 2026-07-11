/* Общий каркас мокапов: topbar + вертикальная навигация модулей.
   Использование (до </body>):
   <script>window.SHELL={area:'workspace',active:'inbox',context:'Iwoca',crumbs:'Workspace / <b>Inbox</b>',user:'AR'}</script>
   <script src="shell.js"></script>
   Контент страницы кладётся в <div id="app"> … </div> — shell оборачивает его в .shell */
(function () {
  const cfg = Object.assign(
    { area: 'workspace', active: '', context: 'Iwoca', crumbs: '', user: 'AR' },
    window.SHELL || {}
  );

  const I = {
    day:      '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 21V9"/>',
    strategy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
    leads:    '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5M16 4.5a3.5 3.5 0 010 7M21.5 20c-.5-2.4-1.8-4-3.7-4.9"/>',
    campaigns:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
    inbox:    '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5 4h14l3 8v7a1 1 0 01-1 1H3a1 1 0 01-1-1v-7l3-8z"/>',
    meetings: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
    tasks:    '<circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.5 2.5 5-5.5"/>',
    insights: '<path d="M9 18h6M10 21h4M12 3a6 6 0 014 10.5c-.8.7-1 1.5-1 2.5h-6c0-1-.2-1.8-1-2.5A6 6 0 0112 3z"/>',
    settings: '<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2" fill="var(--surface)"/><circle cx="15" cy="12" r="2" fill="var(--surface)"/><circle cx="7" cy="17" r="2" fill="var(--surface)"/>',
    /* admin */
    command:  '<path d="M12 3a9 9 0 019 9h-9V3z"/><path d="M12 3a9 9 0 109 9"/>',
    clients:  '<path d="M3 21V8l7-5 7 5v13"/><path d="M21 21V11l-4-3M7 21v-4h6v4M3 21h18"/>',
    team:     '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5M16 4.5a3.5 3.5 0 010 7M21.5 20c-.5-2.4-1.8-4-3.7-4.9"/>',
    finance:  '<circle cx="12" cy="12" r="9"/><path d="M14.5 8.5c-.6-.8-1.5-1.2-2.5-1.2-1.7 0-3 1-3 2.3s1.3 1.9 3 2.3 3 1 3 2.3-1.3 2.3-3 2.3c-1 0-1.9-.4-2.5-1.2M12 5.5v13"/>',
    quality:  '<path d="M12 2l2.4 4.8 5.6.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-.8z"/>',
    system:   '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><circle cx="7" cy="7.5" r="1"/><circle cx="7" cy="16.5" r="1"/>'
  };

  const NAV = {
    workspace: [
      ['day','My Day'],['strategy','Strategy'],['leads','Leads'],['campaigns','Campaigns'],
      ['inbox','Inbox'],['meetings','Meetings'],['tasks','Tasks'],['insights','Insights'],['settings','Settings']
    ],
    admin: [
      ['command','Command Center'],['clients','Clients'],['team','Team'],
      ['finance','Finance'],['quality','Quality'],['system','System']
    ]
  };

  const icon = k => `<svg class="icon" viewBox="0 0 24 24">${I[k]}</svg>`;
  const mods = NAV[cfg.area].map(([k, t]) =>
    `<div class="mod ${k === cfg.active ? 'active' : ''}" title="${t}">${icon(k)}</div>`).join('');

  const topbar = `
    <div class="topbar">
      <div class="brand"><div class="mark">B</div>Belkins Home</div>
      ${cfg.context ? `<div class="context-pill">${cfg.context} <span class="chev">▾</span></div>` : ''}
      <div class="crumbs">${cfg.crumbs}</div>
      <div class="spacer"></div>
      <div class="search"><svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Search… <span class="kbd">⌘K</span></div>
      <div class="avatar">${cfg.user}</div>
    </div>`;

  const app = document.getElementById('app');
  const shell = document.createElement('div');
  shell.className = 'shell';
  shell.innerHTML = `<div class="modnav">${mods}</div>`;
  document.body.insertAdjacentHTML('afterbegin', topbar);
  app.parentNode.insertBefore(shell, app);
  shell.appendChild(app);
  app.style.cssText += ';flex:1;display:flex;min-width:0;';
})();
