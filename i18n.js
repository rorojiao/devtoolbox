const T={
  en:{
    brand:'DevToolBox 🛠️',tagline:'Free Online Developer Tools',
    tools:'Tools',json:'JSON',regex:'Regex',base64:'Base64',hash:'Hash',timestamp:'Timestamp',diff:'Diff',cron:'Cron',
    // index
    jsonDesc:'Format, validate, minify & convert JSON',regexDesc:'Test regex patterns with real-time highlighting',
    base64Desc:'Encode & decode Base64 strings',hashDesc:'Generate MD5, SHA1, SHA256 hashes',
    timestampDesc:'Convert between Unix timestamps & dates',diffDesc:'Compare text side by side with diff highlighting',
    cronDesc:'Build & explain cron expressions',
    jsonFmt:'JSON Formatter',jsonFmtDesc:'Format, beautify & minify JSON with syntax highlighting',
    urlEnc:'URL Encoder',urlEncDesc:'Encode & decode URLs and query parameters',
    hashGen:'Hash Generator',hashGenDesc:'Generate MD5, SHA-1, SHA-256, SHA-512 hashes',
    jwtDec:'JWT Decoder',jwtDecDesc:'Decode JWT tokens — view header & payload',
    regexTest:'Regex Tester',regexTestDesc:'Test regex patterns with real-time match highlighting',
    cssGrad:'CSS Gradient',cssGradDesc:'Generate CSS gradients with visual preview',
    cssShadow:'CSS Shadow',cssShadowDesc:'Generate CSS box-shadow with slider controls',
    // common
    input:'Input',output:'Output',copy:'Copy',copied:'Copied!',clear:'Clear',paste:'Paste',
    format:'Format',validate:'Validate',minify:'Minify',encode:'Encode',decode:'Decode',generate:'Generate',
    compare:'Compare',convert:'Convert',
    // json
    jsonTitle:'JSON Formatter & Validator',jsonInput:'Paste your JSON here...',jsonValid:'✓ Valid JSON',jsonInvalid:'✗ Invalid JSON',
    toYaml:'→ YAML',toCsv:'→ CSV',indent:'Indent',
    // regex
    regexTitle:'Regex Tester',pattern:'Pattern',flags:'Flags',testStr:'Test String',matches:'Matches',noMatch:'No matches',
    regexPlaceholder:'Enter regex pattern...',testPlaceholder:'Enter test string...',
    // base64
    base64Title:'Base64 Encoder / Decoder',textInput:'Text / Base64 input...',
    // hash
    hashTitle:'Hash Generator',hashInput:'Enter text to hash...',
    // timestamp
    tsTitle:'Timestamp Converter',now:'Now',currentTs:'Current Unix Timestamp',tsToDate:'Timestamp → Date',dateToTs:'Date → Timestamp',
    // diff
    diffTitle:'Text Diff Tool',original:'Original',modified:'Modified',originalPh:'Original text...',modifiedPh:'Modified text...',
    added:'Added',removed:'Removed',unchanged:'Unchanged',
    // cron
    cronTitle:'Cron Expression Tool',cronExpr:'Cron Expression',cronPh:'* * * * *',explain:'Explain',nextRuns:'Next 5 runs',
    minute:'Minute',hour:'Hour',day:'Day of Month',month:'Month',weekday:'Day of Week',
    every:'Every',at:'At',
    // donate
    donate:'Find this useful? Buy the dev a coffee ☕',
    footer:'DevToolBox — Free tools for developers. No tracking. No ads.',
  },
  zh:{
    brand:'DevToolBox 🛠️',tagline:'免费在线开发者工具',
    tools:'工具',json:'JSON',regex:'正则',base64:'Base64',hash:'哈希',timestamp:'时间戳',diff:'文本对比',cron:'Cron',
    jsonDesc:'格式化、校验、压缩、转换 JSON',regexDesc:'实时匹配高亮的正则测试器',
    base64Desc:'Base64 编码与解码',hashDesc:'生成 MD5、SHA1、SHA256 哈希',
    timestampDesc:'Unix 时间戳与日期互转',diffDesc:'左右双栏文本对比，高亮差异',
    cronDesc:'Cron 表达式生成器与解读',
    jsonFmt:'JSON格式化',jsonFmtDesc:'格式化、美化、压缩JSON，语法高亮',
    urlEnc:'URL编码',urlEncDesc:'URL编码与解码',
    hashGen:'哈希生成',hashGenDesc:'生成MD5、SHA-1、SHA-256、SHA-512哈希',
    jwtDec:'JWT解码',jwtDecDesc:'解码JWT Token，查看Header和Payload',
    regexTest:'正则测试',regexTestDesc:'实时高亮匹配的正则表达式测试器',
    cssGrad:'CSS渐变',cssGradDesc:'可视化CSS渐变生成器',
    cssShadow:'CSS阴影',cssShadowDesc:'CSS Box Shadow滑块生成器',
    input:'输入',output:'输出',copy:'复制',copied:'已复制！',clear:'清空',paste:'粘贴',
    format:'格式化',validate:'校验',minify:'压缩',encode:'编码',decode:'解码',generate:'生成',
    compare:'对比',convert:'转换',
    jsonTitle:'JSON 格式化 & 校验工具',jsonInput:'在此粘贴 JSON...',jsonValid:'✓ JSON 有效',jsonInvalid:'✗ JSON 无效',
    toYaml:'→ YAML',toCsv:'→ CSV',indent:'缩进',
    regexTitle:'正则表达式测试器',pattern:'正则表达式',flags:'标志',testStr:'测试文本',matches:'匹配结果',noMatch:'无匹配',
    regexPlaceholder:'输入正则表达式...',testPlaceholder:'输入测试文本...',
    base64Title:'Base64 编码 / 解码',textInput:'输入文本或 Base64...',
    hashTitle:'哈希生成器',hashInput:'输入要哈希的文本...',
    tsTitle:'时间戳转换工具',now:'当前',currentTs:'当前 Unix 时间戳',tsToDate:'时间戳 → 日期',dateToTs:'日期 → 时间戳',
    diffTitle:'文本对比工具',original:'原始文本',modified:'修改后文本',originalPh:'原始文本...',modifiedPh:'修改后文本...',
    added:'新增',removed:'删除',unchanged:'未变',
    cronTitle:'Cron 表达式工具',cronExpr:'Cron 表达式',cronPh:'* * * * *',explain:'解读',nextRuns:'接下来 5 次执行',
    minute:'分钟',hour:'小时',day:'日',month:'月',weekday:'星期',
    every:'每',at:'在',
    donate:'觉得有用？请开发者喝杯咖啡 ☕',
    footer:'DevToolBox — 开发者免费工具。无追踪，无广告。',
  }
};
let lang=localStorage.getItem('dtb-lang')||'en';
function t(k){return T[lang][k]||T.en[k]||k}
function setLang(l){lang=l;localStorage.setItem('dtb-lang',l);renderPage()}
function toggleLang(){setLang(lang==='en'?'zh':'en')}
