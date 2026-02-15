function $(s,p){return(p||document).querySelector(s)}
function $$(s,p){return[...(p||document).querySelectorAll(s)]}
function showToast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500)}
function copyText(text){navigator.clipboard.writeText(text).then(()=>showToast(t('copied')))}
function renderNav(active){
  const nav=$('#nav');
  const pages=[
    ['index.html','tools'],['json.html','json'],['regex.html','regex'],['base64.html','base64'],
    ['hash.html','hash'],['timestamp.html','timestamp'],['diff.html','diff'],['cron.html','cron']
  ];
  nav.innerHTML=pages.map(([href,key])=>
    `<a href="${href}" class="${active===key?'active':''}">${t(key)}</a>`
  ).join('')+`<button class="lang-btn" onclick="toggleLang()">${lang==='en'?'中文':'EN'}</button>`;
}
function renderDonate(){
  const d=$('#donate');
  if(d)d.innerHTML=`<p>${t('donate')}</p><p style="margin-top:8px"><code>0xEeD903787Cb86bcCc17777E5C7d10A4c2De43823</code></p>`;
}
function renderFooter(){const f=$('#footer');if(f)f.textContent=t('footer')}
