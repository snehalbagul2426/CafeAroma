// ==================== DATA STORE (localStorage) ====================
var DB = {
  get: function(key, def) { try { return JSON.parse(localStorage.getItem('cafe_'+key)) || def; } catch(e) { return def; } },
  set: function(key, val) { localStorage.setItem('cafe_'+key, JSON.stringify(val)); }
};

// Initialize default data
function initData() {
  if (!DB.get('initialized')) {
    DB.set('menuItems', [
      {id:'m1',name:'Espresso',cat:'☕ Coffee',price:120,emoji:'☕',desc:'Rich and bold single shot',img:'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',available:true},
      {id:'m2',name:'Cappuccino',cat:'☕ Coffee',price:180,emoji:'☕',desc:'Creamy foam with espresso',img:'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',available:true},
      {id:'m3',name:'Latte',cat:'☕ Coffee',price:200,emoji:'☕',desc:'Smooth milk coffee blend',img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',available:true},
      {id:'m4',name:'Mocha',cat:'☕ Coffee',price:220,emoji:'☕',desc:'Chocolate espresso delight',img:'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&h=300&fit=crop',available:true},
      {id:'m5',name:'Butter Croissant',cat:'🥐 Snacks',price:150,emoji:'🥐',desc:'Flaky French pastry',img:'https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=400&h=300&fit=crop',available:true},
      {id:'m6',name:'Club Sandwich',cat:'🥐 Snacks',price:250,emoji:'🥪',desc:'Triple-decker classic',img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop',available:true},
      {id:'m7',name:'Chocolate Cake',cat:'🍰 Desserts',price:280,emoji:'🍰',desc:'Rich Belgian chocolate',img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',available:true},
      {id:'m8',name:'Cheesecake',cat:'🍰 Desserts',price:300,emoji:'🍰',desc:'New York style classic',img:'https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=400&h=300&fit=crop',available:true},
      {id:'m9',name:'Fresh Juice',cat:'🥤 Beverages',price:160,emoji:'🥤',desc:'Seasonal fruit blend',img:'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',available:true},
      {id:'m10',name:'Iced Tea',cat:'🥤 Beverages',price:140,emoji:'🥤',desc:'Refreshing lemon tea',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',available:true},
      {id:'m11',name:'Margherita Pizza',cat:'🍕 Meals',price:350,emoji:'🍕',desc:'Classic Italian pizza',img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',available:true},
      {id:'m12',name:'Pasta Alfredo',cat:'🍕 Meals',price:320,emoji:'🍝',desc:'Creamy white sauce pasta',img:'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',available:false}
    ]);
    DB.set('tables', [
      {id:1,seats:2,status:'available'},{id:2,seats:4,status:'occupied'},{id:3,seats:2,status:'reserved'},
      {id:4,seats:6,status:'occupied'},{id:5,seats:4,status:'available'},{id:6,seats:2,status:'available'},
      {id:7,seats:4,status:'occupied'},{id:8,seats:8,status:'available'},{id:9,seats:2,status:'available'},
      {id:10,seats:4,status:'reserved'},{id:11,seats:6,status:'available'},{id:12,seats:2,status:'available'}
    ]);
    DB.set('orders', [
      {id:1045,type:'Dine-in',table:3,items:[{name:'Cappuccino',emoji:'☕',price:180,qty:2},{name:'Croissant',emoji:'🥐',price:150,qty:1}],total:510,time:'10:32 AM',date:'2026-04-04',status:'Pending',paymentMethod:''},
      {id:1044,type:'Dine-in',table:7,items:[{name:'Latte',emoji:'☕',price:200,qty:1},{name:'Sandwich',emoji:'🥪',price:250,qty:1}],total:450,time:'10:15 AM',date:'2026-04-04',status:'Completed',paymentMethod:'Card'},
      {id:1043,type:'Takeaway',table:'-',items:[{name:'Espresso',emoji:'☕',price:120,qty:2},{name:'Chocolate Cake',emoji:'🍰',price:280,qty:1}],total:520,time:'10:05 AM',date:'2026-04-03',status:'Completed',paymentMethod:'Cash'}
    ]);
    DB.set('orderCounter', 1046);
    DB.set('customers', [
      {id:'c1',name:'Raj Patel',email:'raj@email.com',phone:'+91 98765 43210',visits:45,points:1250,tier:'Gold',lastVisit:'Today',avatar:'R'},
      {id:'c2',name:'Anita Shah',email:'anita@email.com',phone:'+91 98765 43211',visits:32,points:890,tier:'Silver',lastVisit:'Yesterday',avatar:'A'},
      {id:'c3',name:'Vikram Singh',email:'vikram@email.com',phone:'+91 98765 43212',visits:58,points:1680,tier:'Platinum',lastVisit:'2 days ago',avatar:'V'},
      {id:'c4',name:'Priya Mehta',email:'priya@email.com',phone:'+91 98765 43213',visits:12,points:340,tier:'Bronze',lastVisit:'1 week ago',avatar:'P'},
      {id:'c5',name:'Arjun Reddy',email:'arjun@email.com',phone:'+91 98765 43214',visits:25,points:720,tier:'Silver',lastVisit:'3 days ago',avatar:'A'},
      {id:'c6',name:'Meera Joshi',email:'meera@email.com',phone:'+91 98765 43215',visits:8,points:220,tier:'Bronze',lastVisit:'2 weeks ago',avatar:'M'}
    ]);
    DB.set('staff', [
      {id:'s1',name:'Amit Kumar',role:'Admin',email:'amit@cafearoma.com',phone:'+91 98765 00001',active:true,duties:['Manage accounts','Inventory'],emoji:'🧔'},
      {id:'s2',name:'Priya Sharma',role:'Manager',email:'priya@cafearoma.com',phone:'+91 98765 00002',active:true,duties:['Floor management','Scheduling'],emoji:'👩'},
      {id:'s3',name:'Ravi Desai',role:'Waiter',email:'ravi@cafearoma.com',phone:'+91 98765 00003',active:true,duties:['Table service','Customer care'],emoji:'👨'},
      {id:'s4',name:'Sneha Iyer',role:'Waiter',email:'sneha@cafearoma.com',phone:'+91 98765 00004',active:false,duties:['Table service','Billing'],emoji:'👩‍🦱'},
      {id:'s5',name:'Karthik Nair',role:'Manager',email:'karthik@cafearoma.com',phone:'+91 98765 00005',active:true,duties:['Kitchen oversight','Quality'],emoji:'🧑'},
      {id:'s6',name:'Divya Menon',role:'Waiter',email:'divya@cafearoma.com',phone:'+91 98765 00006',active:true,duties:['Takeaway orders','Cleaning'],emoji:'👧'}
    ]);
    DB.set('notifications', [
      {id:'n1',title:'New Order',msg:'Table 4 placed a new order',emoji:'🛎️',time:'2 min ago',unread:true},
      {id:'n2',title:'Order Ready',msg:'Order #1042 is ready to serve',emoji:'✅',time:'5 min ago',unread:true},
      {id:'n3',title:'Reservation',msg:'New reservation for 7:00 PM',emoji:'📅',time:'15 min ago',unread:false},
      {id:'n4',title:'Low Stock',msg:'Espresso beans running low',emoji:'⚠️',time:'1 hr ago',unread:false},
      {id:'n5',title:'Payment',msg:'Table 7 paid ₹450 via Card',emoji:'💳',time:'2 hr ago',unread:false}
    ]);
    DB.set('initialized', true);
  }
}
initData();

// ==================== NOTIFICATIONS ====================
function renderNotifications() {
  var notifs = DB.get('notifications', []);
  var panel = document.getElementById('notif-panel');
  if (!panel) return;
  var unreadCount = notifs.filter(n => n.unread).length;
  var dot = document.querySelector('.bell-btn .dot');
  if (dot) dot.style.display = unreadCount > 0 ? '' : 'none';
  var countEl = panel.querySelector('.count');
  if (countEl) countEl.textContent = unreadCount;
  var list = panel.querySelector('.notif-list');
  if (list) {
    list.innerHTML = notifs.map(n =>
      '<div class="notif-item ' + (n.unread ? 'unread' : '') + '" onclick="markRead(\'' + n.id + '\')">' +
      '<span class="emoji">' + n.emoji + '</span><div class="content"><div class="title-row"><span class="title">' + n.title + '</span>' +
      (n.unread ? '<span class="unread-dot"></span>' : '') + '</div><p class="msg">' + n.msg + '</p><p class="time">' + n.time + '</p></div></div>'
    ).join('');
  }
}

function markRead(id) {
  var notifs = DB.get('notifications', []);
  notifs = notifs.map(n => n.id === id ? {...n, unread: false} : n);
  DB.set('notifications', notifs);
  renderNotifications();
}

function addNotification(title, msg, emoji) {
  var notifs = DB.get('notifications', []);
  notifs.unshift({id: 'n' + Date.now(), title: title, msg: msg, emoji: emoji, time: 'Just now', unread: true});
  if (notifs.length > 20) notifs = notifs.slice(0, 20);
  DB.set('notifications', notifs);
  renderNotifications();
}

// ==================== TOAST ====================
function showToast(msg) {
  var toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:linear-gradient(135deg,#6b3a1f,#d4901a);color:#faf8f5;padding:16px 24px;border-radius:14px;font-size:14px;font-weight:600;box-shadow:0 8px 24px rgba(107,58,31,0.35);z-index:9999;animation:fadeInUp 0.4s ease-out;font-family:Inter,sans-serif';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(function() {
    toast.style.opacity = '0'; toast.style.transform = 'translateY(10px)'; toast.style.transition = 'all 0.3s';
    setTimeout(function() { toast.remove(); }, 300);
  }, 3000);
}

// ==================== MODAL HELPER ====================
function showModal(title, bodyHTML, onSave) {
  var overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = '<div class="modal-box glass-card-static" style="animation:scaleIn 0.3s ease-out"><div class="modal-header"><h3>' + title + '</h3><button class="modal-close" onclick="closeModal()">✕</button></div><div class="modal-body">' + bodyHTML + '</div><div class="modal-footer"><button class="btn-secondary" onclick="closeModal()">Cancel</button><button class="btn-primary modal-save">Save</button></div></div>';
  document.body.appendChild(overlay);
  overlay.querySelector('.modal-save').onclick = function() { if (onSave) onSave(); };
  overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };
}
function closeModal() {
  var m = document.querySelector('.modal-overlay');
  if (m) m.remove();
}

// ==================== CHARTS ====================
function renderChart(id, data, color) {
  var el = document.getElementById(id);
  if (!el) return;
  var max = Math.max(...data.map(d => d.value));
  el.innerHTML = data.map((d, i) => {
    var h = (d.value / max) * 160;
    return '<div class="chart-bar" style="height:0;background:' + color + ';transition-delay:' + (i * 0.08) + 's" data-height="' + h + '"><span class="chart-val">' + d.value + '</span><span class="chart-label">' + d.label + '</span></div>';
  }).join('');
  requestAnimationFrame(function() {
    setTimeout(function() {
      el.querySelectorAll('.chart-bar').forEach(function(bar) { bar.style.height = bar.dataset.height + 'px'; });
    }, 100);
  });
}

// ==================== DASHBOARD ====================
function initDashboard() {
  var orders = DB.get('orders', []);
  var tables = DB.get('tables', []);
  var customers = DB.get('customers', []);
  var totalOrders = orders.length;
  var revenue = orders.reduce((s, o) => s + (o.total || 0), 0);
  var activeTables = tables.filter(t => t.status !== 'available').length;
  var totalTables = tables.length;

  var vals = document.querySelectorAll('.stat-card .value');
  if (vals[0]) vals[0].textContent = totalOrders;
  if (vals[1]) vals[1].textContent = '₹' + revenue.toLocaleString();
  if (vals[2]) vals[2].textContent = activeTables + '/' + totalTables;
  if (vals[3]) vals[3].textContent = customers.length;

  renderChart('revenue-chart', [
    {label:'Mon',value:4200},{label:'Tue',value:3800},{label:'Wed',value:5100},
    {label:'Thu',value:4600},{label:'Fri',value:6200},{label:'Sat',value:7400},{label:'Sun',value:5800}
  ], 'var(--gradient-warm)');
  renderChart('orders-chart', [
    {label:'9AM',value:12},{label:'10AM',value:19},{label:'11AM',value:15},
    {label:'12PM',value:28},{label:'1PM',value:32},{label:'2PM',value:22},
    {label:'3PM',value:18},{label:'4PM',value:24},{label:'5PM',value:30}
  ], 'var(--gradient-gold)');
}

// ==================== MENU ====================
function initMenu() {
  renderMenuGrid();
}

function renderMenuGrid() {
  var items = DB.get('menuItems', []);
  var grid = document.getElementById('menu-grid');
  if (!grid) return;
  var availCount = items.filter(i => i.available).length;
  var menuInfo = document.getElementById('menu-info');
  if (menuInfo) menuInfo.textContent = items.length + ' items • ' + availCount + ' available';

  grid.innerHTML = items.map(item =>
    '<div class="glass-card menu-card" data-id="' + item.id + '" data-cat="' + item.cat + '">' +
    '<div class="img-wrap"><img src="' + item.img + '" alt="' + item.name + '" loading="lazy"><div class="gradient-overlay"></div>' +
    '<span class="emoji-tag">' + item.emoji + '</span><span class="price-tag">₹' + item.price + '</span></div>' +
    '<div class="card-body"><h3>' + item.name + '</h3><p class="desc">' + item.desc + '</p>' +
    '<div class="bottom"><span class="cat">' + item.cat + '</span>' +
    '<button class="avail-btn ' + (item.available ? 'available' : 'unavailable') + '" onclick="toggleMenuAvail(\'' + item.id + '\',this)">' +
    (item.available ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Available' : 'Unavailable') + '</button></div>' +
    '<button class="edit-menu-btn" onclick="editMenuItem(\'' + item.id + '\')">✏️ Edit</button>' +
    '</div></div>'
  ).join('');

  // Re-apply stagger
  grid.classList.add('stagger');
  grid.querySelectorAll(':scope > *').forEach(c => c.classList.add('animate-fadeInUp'));
}

function toggleMenuAvail(id, btn) {
  event.stopPropagation();
  var items = DB.get('menuItems', []);
  items = items.map(i => i.id === id ? {...i, available: !i.available} : i);
  DB.set('menuItems', items);
  var item = items.find(i => i.id === id);
  if (item.available) {
    btn.className = 'avail-btn available';
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Available';
  } else {
    btn.className = 'avail-btn unavailable';
    btn.innerHTML = 'Unavailable';
  }
  // Update count
  var availCount = items.filter(i => i.available).length;
  var menuInfo = document.getElementById('menu-info');
  if (menuInfo) menuInfo.textContent = items.length + ' items • ' + availCount + ' available';
  showToast(item.name + ' marked as ' + (item.available ? 'available ✅' : 'unavailable ❌'));
  addNotification('Menu Update', item.name + ' is now ' + (item.available ? 'available' : 'unavailable'), item.available ? '✅' : '❌');
}

function editMenuItem(id) {
  var items = DB.get('menuItems', []);
  var item = items.find(i => i.id === id);
  if (!item) return;
  var cats = ['☕ Coffee','🥐 Snacks','🍰 Desserts','🥤 Beverages','🍕 Meals'];
  var catOpts = cats.map(c => '<option value="' + c + '"' + (c === item.cat ? ' selected' : '') + '>' + c + '</option>').join('');
  showModal('Edit Menu Item',
    '<div class="form-group"><label>Name</label><input id="edit-name" value="' + item.name + '"></div>' +
    '<div class="form-group"><label>Price (₹)</label><input id="edit-price" type="number" value="' + item.price + '"></div>' +
    '<div class="form-group"><label>Category</label><select id="edit-cat">' + catOpts + '</select></div>' +
    '<div class="form-group"><label>Description</label><input id="edit-desc" value="' + item.desc + '"></div>' +
    '<div class="form-group"><label>Image URL</label><input id="edit-img" value="' + item.img + '"></div>' +
    '<div class="form-group"><label>Emoji</label><input id="edit-emoji" value="' + item.emoji + '"></div>',
    function() {
      var items = DB.get('menuItems', []);
      items = items.map(i => i.id === id ? {...i,
        name: document.getElementById('edit-name').value,
        price: Number(document.getElementById('edit-price').value),
        cat: document.getElementById('edit-cat').value,
        desc: document.getElementById('edit-desc').value,
        img: document.getElementById('edit-img').value,
        emoji: document.getElementById('edit-emoji').value
      } : i);
      DB.set('menuItems', items);
      closeModal();
      renderMenuGrid();
      showToast('Menu item updated ✅');
    }
  );
}

function addNewMenuItem() {
  var cats = ['☕ Coffee','🥐 Snacks','🍰 Desserts','🥤 Beverages','🍕 Meals'];
  var catOpts = cats.map(c => '<option value="' + c + '">' + c + '</option>').join('');
  showModal('Add New Menu Item',
    '<div class="form-group"><label>Name</label><input id="edit-name" placeholder="Item name"></div>' +
    '<div class="form-group"><label>Price (₹)</label><input id="edit-price" type="number" placeholder="0"></div>' +
    '<div class="form-group"><label>Category</label><select id="edit-cat">' + catOpts + '</select></div>' +
    '<div class="form-group"><label>Description</label><input id="edit-desc" placeholder="Short description"></div>' +
    '<div class="form-group"><label>Image URL</label><input id="edit-img" placeholder="https://..."></div>' +
    '<div class="form-group"><label>Emoji</label><input id="edit-emoji" placeholder="☕"></div>',
    function() {
      var items = DB.get('menuItems', []);
      var newItem = {
        id: 'm' + Date.now(),
        name: document.getElementById('edit-name').value || 'New Item',
        price: Number(document.getElementById('edit-price').value) || 0,
        cat: document.getElementById('edit-cat').value,
        desc: document.getElementById('edit-desc').value || '',
        img: document.getElementById('edit-img').value || 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
        emoji: document.getElementById('edit-emoji').value || '🍽️',
        available: true
      };
      items.push(newItem);
      DB.set('menuItems', items);
      closeModal();
      renderMenuGrid();
      showToast('New item "' + newItem.name + '" added ✅');
      addNotification('Menu Update', newItem.name + ' added to menu', '🆕');
    }
  );
}

function filterMenu(cat, btn) {
  document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.menu-card').forEach(c => {
    c.style.display = (cat === 'All' || c.dataset.cat === cat) ? '' : 'none';
  });
}

function searchMenu(q) {
  q = q.toLowerCase();
  document.querySelectorAll('.menu-card').forEach(c => {
    var name = c.querySelector('h3').textContent.toLowerCase();
    c.style.display = name.includes(q) ? '' : 'none';
  });
}

// ==================== TABLES ====================
function initTables() {
  renderTablesGrid();
}

function renderTablesGrid() {
  var tables = DB.get('tables', []);
  var grid = document.getElementById('tables-grid');
  if (!grid) return;
  var avail = tables.filter(t => t.status === 'available').length;
  var occ = tables.filter(t => t.status === 'occupied').length;
  var res = tables.filter(t => t.status === 'reserved').length;
  var summaryVals = document.querySelectorAll('.summary-card .val');
  if (summaryVals[0]) summaryVals[0].textContent = avail;
  if (summaryVals[1]) summaryVals[1].textContent = occ;
  if (summaryVals[2]) summaryVals[2].textContent = res;

  grid.innerHTML = tables.map(t => {
    var statusClass = t.status;
    var dotClass = t.status === 'available' ? 'green' : t.status === 'occupied' ? 'blue' : 'yellow';
    var badgeClass = t.status === 'available' ? 'badge-success' : t.status === 'occupied' ? 'badge-primary' : 'badge-warning';
    var statusText = t.status.charAt(0).toUpperCase() + t.status.slice(1);
    return '<button class="glass-card table-card ' + statusClass + '" onclick="cycleTable(' + t.id + ')" data-status="' + t.status + '" data-id="' + t.id + '">' +
      '<div class="bg-grad"></div><div class="card-inner">' +
      '<div class="top-row"><div class="left"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16h18"/><path d="M3 11a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v5H3Z"/><path d="M17 11a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v5h-4Z"/><path d="M7 16v4"/><path d="M17 16v4"/></svg><span class="tnum">T' + t.id + '</span></div><span class="dot ' + dotClass + '"></span></div>' +
      '<div class="seats-row"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>' + t.seats + ' seats</span></div>' +
      '<div class="status-row"><span class="badge ' + badgeClass + '">' + statusText + '</span></div>' +
      '</div></button>';
  }).join('');
  grid.classList.add('stagger');
  grid.querySelectorAll(':scope > *').forEach(c => c.classList.add('animate-fadeInUp'));
}

function cycleTable(id) {
  var tables = DB.get('tables', []);
  tables = tables.map(t => {
    if (t.id === id) {
      var next = t.status === 'available' ? 'reserved' : t.status === 'reserved' ? 'occupied' : 'available';
      return {...t, status: next};
    }
    return t;
  });
  DB.set('tables', tables);
  renderTablesGrid();
}

// ==================== ORDERS ====================
var cart = [];
var orderType = 'Dine-in';
var tableNum = 1;

function initOrders() {
  renderOrdersTable();
  updateOrderCounts();
  renderCart();
}

function renderOrdersTable() {
  var orders = DB.get('orders', []);
  var tbody = document.getElementById('orders-tbody');
  if (!tbody) return;
  tbody.innerHTML = orders.map(o => {
    var items = o.items.map(i => i.emoji + i.name + '×' + i.qty).join(', ');
    var badgeClass = o.status === 'Pending' ? 'badge-muted' : o.status === 'Preparing' ? 'badge-warning' : 'badge-success';
    var actionBtn = '';
    if (o.status === 'Pending') actionBtn = '<button class="btn-primary" style="padding:6px 12px;font-size:12px" onclick="updateOrderStatus(' + o.id + ',\'Preparing\')">Start</button>';
    else if (o.status === 'Preparing') actionBtn = '<button class="btn-primary" style="padding:6px 12px;font-size:12px" onclick="updateOrderStatus(' + o.id + ',\'Completed\')">Complete</button>';
    return '<tr><td style="font-weight:600">#' + o.id + '</td><td>' + (o.type==='Dine-in'?'🪑':'🛍️') + ' ' + o.type + '</td>' +
      '<td style="color:var(--muted-fg)">' + (o.type==='Dine-in'?'Table '+o.table:'-') + '</td>' +
      '<td style="color:var(--muted-fg)">' + items + '</td>' +
      '<td style="font-weight:600">₹' + o.total + '</td>' +
      '<td style="color:var(--muted-fg)">' + o.time + '</td>' +
      '<td><span class="badge ' + badgeClass + '">' + o.status + '</span></td>' +
      '<td>' + actionBtn + '</td></tr>';
  }).join('');
}

function updateOrderStatus(id, newStatus) {
  var orders = DB.get('orders', []);
  orders = orders.map(o => o.id === id ? {...o, status: newStatus} : o);
  DB.set('orders', orders);
  renderOrdersTable();
  updateOrderCounts();
  if (newStatus === 'Completed') {
    showToast('Order #' + id + ' completed ✅');
    addNotification('Order Completed', 'Order #' + id + ' has been completed', '✅');
  } else {
    showToast('Order #' + id + ' is now preparing 🔥');
  }
}

function updateOrderCounts() {
  var orders = DB.get('orders', []);
  var pending = orders.filter(o => o.status === 'Pending' || o.status === 'Preparing').length;
  var done = orders.filter(o => o.status === 'Completed').length;
  var pendingEl = document.getElementById('pending-count');
  var doneEl = document.getElementById('done-count');
  var orderCountEl = document.getElementById('order-count');
  if (pendingEl) pendingEl.textContent = pending;
  if (doneEl) doneEl.textContent = done;
  if (orderCountEl) orderCountEl.textContent = orders.length;
}

function showTab(tab, btn) {
  document.querySelectorAll('.tab-switcher')[0].querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  var newEl = document.getElementById('tab-new');
  var allEl = document.getElementById('tab-all');
  if (newEl) newEl.classList.toggle('hidden', tab !== 'new');
  if (allEl) allEl.classList.toggle('hidden', tab !== 'all');
}

function setOrderType(type, btn) {
  orderType = type;
  btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  var ts = document.getElementById('table-selector');
  if (ts) ts.style.display = type === 'Dine-in' ? '' : 'none';
}

function selectTable(num, btn) {
  tableNum = num;
  document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function addToCart(id, name, price, emoji) {
  var item = cart.find(c => c.id === id);
  if (item) item.qty++; else cart.push({id:id, name:name, price:price, qty:1, emoji:emoji});
  renderCart();
}

function updateQty(id, delta) {
  cart = cart.map(c => c.id === id ? {...c, qty: Math.max(0, c.qty + delta)} : c).filter(c => c.qty > 0);
  renderCart();
}

function renderCart() {
  var el = document.getElementById('cart-items');
  var totals = document.getElementById('cart-totals');
  var countEl = document.getElementById('cart-count');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty"><span class="emoji">🛒</span><p>Add items to get started</p></div>';
    if (totals) totals.classList.add('hidden');
    if (countEl) countEl.textContent = '0 items';
    return;
  }
  if (countEl) countEl.textContent = cart.length + ' items';
  el.innerHTML = cart.map(c =>
    '<div class="cart-item" style="animation:fadeInUp 0.3s ease-out"><div class="left"><span>' + c.emoji + '</span><div><p class="name">' + c.name + '</p><p class="meta">₹' + c.price + ' × ' + c.qty + '</p></div></div><div class="cart-controls"><button onclick="updateQty(\'' + c.id + '\', -1)">−</button><span class="qty">' + c.qty + '</span><button onclick="updateQty(\'' + c.id + '\', 1)">+</button></div></div>'
  ).join('');
  var subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  var tax = Math.round(subtotal * 0.05);
  document.getElementById('subtotal').textContent = '₹' + subtotal;
  document.getElementById('tax').textContent = '₹' + tax;
  document.getElementById('grand-total').textContent = '₹' + (subtotal + tax);
  if (totals) totals.classList.remove('hidden');
  // Update qty badges on menu items
  document.querySelectorAll('.order-menu-item').forEach(function(el) {
    var id = el.dataset.id;
    var inCart = cart.find(c => c.id === id);
    el.classList.toggle('in-cart', !!inCart);
    var existing = el.querySelector('.qty-badge');
    if (existing) existing.remove();
    if (inCart) {
      var badge = document.createElement('span');
      badge.className = 'qty-badge';
      badge.textContent = inCart.qty;
      el.querySelector('.img-wrap').appendChild(badge);
    }
  });
}

function placeOrder() {
  if (cart.length === 0) return;
  var subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  var tax = Math.round(subtotal * 0.05);
  var total = subtotal + tax;
  var now = new Date();
  var time = now.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});
  var date = now.toISOString().split('T')[0];
  var counter = DB.get('orderCounter', 1046);
  var order = {
    id: counter,
    type: orderType,
    table: orderType === 'Dine-in' ? tableNum : '-',
    items: cart.map(c => ({name: c.name, emoji: c.emoji, price: c.price, qty: c.qty})),
    total: total,
    time: time,
    date: date,
    status: 'Pending',
    paymentMethod: ''
  };
  var orders = DB.get('orders', []);
  orders.unshift(order);
  DB.set('orders', orders);
  DB.set('orderCounter', counter + 1);
  cart = [];
  renderCart();
  renderOrdersTable();
  updateOrderCounts();
  showToast('Order #' + counter + ' placed successfully! ✅');
  addNotification('New Order', 'Order #' + counter + (orderType === 'Dine-in' ? ' for Table ' + tableNum : ' (Takeaway)'), '🛎️');
  // Switch to All Orders tab
  var allBtn = document.querySelector('.tab-switcher button:last-child');
  if (allBtn) showTab('all', allBtn);
}

// ==================== BILLING ====================
var selectedInvoice = null;
var discount = 0;

function initBilling() {
  renderInvoiceList();
}

function renderInvoiceList() {
  var orders = DB.get('orders', []);
  var list = document.getElementById('invoice-list-container');
  if (!list) return;
  list.innerHTML = orders.map((o, idx) =>
    '<button class="glass-card invoice-card" onclick="selectInvoice(' + idx + ',this)">' +
    '<div class="top-row"><span class="id">INV-' + o.id + '</span>' +
    '<span class="badge ' + (o.paymentMethod ? 'badge-success' : 'badge-warning') + '">' +
    (o.paymentMethod ? '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg> Paid' : 'Pending') +
    '</span></div>' +
    '<p class="meta">' + (o.table === '-' ? 'Takeaway' : 'Table ' + o.table) + ' • ' + o.date + '</p>' +
    '<p class="items">' + o.items.map(i => i.emoji + i.name).join(', ') + '</p>' +
    '<p class="total">₹' + o.total + '</p></button>'
  ).join('');
}

function selectInvoice(idx, btn) {
  selectedInvoice = idx;
  document.querySelectorAll('.invoice-card').forEach(c => c.classList.remove('selected'));
  btn.classList.add('selected');
  discount = 0;
  renderInvoice();
}

function renderInvoice() {
  var orders = DB.get('orders', []);
  var inv = orders[selectedInvoice];
  var el = document.getElementById('invoice-detail');
  if (!inv || !el) return;
  var subtotal = inv.items.reduce((s,i) => s + i.price * i.qty, 0);
  var tax = Math.round(subtotal * 0.05);
  var disc = Math.round(subtotal * discount / 100);
  var total = subtotal + tax - disc;
  var tableText = inv.table === '-' ? 'Takeaway' : 'Table ' + inv.table;
  var rows = inv.items.map(i => '<tr><td style="font-weight:500">' + i.emoji + ' ' + i.name + '</td><td style="text-align:center">' + i.qty + '</td><td style="text-align:right;color:var(--muted-fg)">₹' + i.price + '</td><td style="text-align:right;font-weight:600">₹' + (i.price*i.qty) + '</td></tr>').join('');
  var payHtml = inv.paymentMethod
    ? '<div class="paid-banner">✅ Paid via ' + inv.paymentMethod + '</div>'
    : '<p style="font-size:14px;font-weight:600;margin-bottom:12px">Select Payment Method</p><div class="payment-methods"><button class="pay-btn" onclick="payInvoice(\'Cash\')"><span class="emoji">💵</span>Cash</button><button class="pay-btn" onclick="payInvoice(\'Card\')"><span class="emoji">💳</span>Card</button><button class="pay-btn" onclick="payInvoice(\'UPI\')"><span class="emoji">📱</span>UPI</button></div>';
  el.innerHTML = '<div class="glass-card-static invoice-detail" style="animation:scaleIn 0.4s ease-out"><div class="header"><div class="icon">🧾</div><div><h3>INV-' + inv.id + '</h3><p>' + tableText + ' • ' + inv.date + ' • ' + inv.time + '</p></div></div><div class="body"><table><thead><tr><th>Item</th><th style="text-align:center">Qty</th><th style="text-align:right">Price</th><th style="text-align:right">Total</th></tr></thead><tbody>' + rows + '</tbody></table><div class="discount-row"><label>Discount</label><div class="discount-wrap"><input type="number" value="' + discount + '" min="0" max="100" onchange="discount=Number(this.value);renderInvoice()"><span>%</span></div></div><div class="totals-section"><div class="row"><span>Subtotal</span><span>₹' + subtotal + '</span></div><div class="row"><span>Tax (5%)</span><span>₹' + tax + '</span></div>' + (disc > 0 ? '<div class="row"><span>Discount (' + discount + '%)</span><span style="color:var(--success)">-₹' + disc + '</span></div>' : '') + '<div class="grand"><span>Total</span><span>₹' + total + '</span></div></div>' + payHtml + '<div class="invoice-actions"><button class="print-btn" onclick="printInvoice()">🖨️ Print Invoice</button><button class="download-btn" onclick="downloadInvoice()">⬇️ Download</button></div></div></div>';
}

function payInvoice(method) {
  var orders = DB.get('orders', []);
  orders[selectedInvoice].paymentMethod = method;
  DB.set('orders', orders);
  renderInvoice();
  renderInvoiceList();
  showToast('Payment received via ' + method + ' 💰');
  addNotification('Payment', 'INV-' + orders[selectedInvoice].id + ' paid via ' + method, '💳');
}

function generateInvoiceHTML(inv) {
  var subtotal = inv.items.reduce((s,i)=>s+i.price*i.qty,0);
  var tax = Math.round(subtotal*0.05);
  var disc = Math.round(subtotal*discount/100);
  var total = subtotal+tax-disc;
  return '<!DOCTYPE html><html><head><title>Invoice INV-'+inv.id+'</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Segoe UI,sans-serif;padding:40px;max-width:520px;margin:0 auto;color:#3a2a1a}.header{text-align:center;padding-bottom:24px;border-bottom:2px solid #8B5E3C}.logo{font-size:28px;font-weight:700;color:#5C3D2E}table{width:100%;border-collapse:collapse;margin:20px 0}th{text-align:left;padding:10px;border-bottom:2px solid #eee;color:#888;font-size:11px;text-transform:uppercase}td{padding:10px;border-bottom:1px solid #f5f5f5;font-size:14px}.total-row{display:flex;justify-content:space-between;padding:6px 0;font-size:14px;color:#666}.grand-total{font-size:20px;font-weight:700;color:#5C3D2E;border-top:2px solid #5C3D2E;padding-top:12px;margin-top:8px}.footer{text-align:center;margin-top:32px;color:#aaa;font-size:12px}</style></head><body><div class="header"><div class="logo">☕ Café Aroma</div><p style="color:#888;font-size:13px;margin-top:8px">INV-'+inv.id+' • '+inv.date+'<br>'+(inv.table==='-'?'Takeaway':'Table '+inv.table)+'</p></div><table><thead><tr><th>Item</th><th>Qty</th><th>Price</th><th style="text-align:right">Total</th></tr></thead><tbody>'+inv.items.map(i=>'<tr><td>'+i.name+'</td><td>'+i.qty+'</td><td>₹'+i.price+'</td><td style="text-align:right">₹'+(i.price*i.qty)+'</td></tr>').join('')+'</tbody></table><div class="total-row"><span>Subtotal</span><span>₹'+subtotal+'</span></div><div class="total-row"><span>Tax (5%)</span><span>₹'+tax+'</span></div>'+(disc>0?'<div class="total-row"><span>Discount ('+discount+'%)</span><span>-₹'+disc+'</span></div>':'')+'<div class="total-row grand-total"><span>Total</span><span>₹'+total+'</span></div><div class="footer"><p>Thank you for visiting Café Aroma! ☕</p></div></body></html>';
}

function printInvoice() {
  if (selectedInvoice === null) return;
  var orders = DB.get('orders', []);
  var w = window.open('','_blank');
  w.document.write(generateInvoiceHTML(orders[selectedInvoice]));
  w.document.close(); w.print();
}

function downloadInvoice() {
  if (selectedInvoice === null) return;
  var orders = DB.get('orders', []);
  var html = generateInvoiceHTML(orders[selectedInvoice]);
  var blob = new Blob([html], {type:'text/html'});
  var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = 'INV-' + orders[selectedInvoice].id + '.html'; a.click();
}

// ==================== CUSTOMERS ====================
function initCustomers() {
  renderCustomerGrid();
}

function renderCustomerGrid() {
  var customers = DB.get('customers', []);
  var grid = document.getElementById('customer-grid');
  if (!grid) return;
  var custInfo = document.getElementById('cust-info');
  if (custInfo) custInfo.textContent = customers.length + ' registered • Loyalty program active';

  // Update tier cards
  var tiers = {Platinum:0,Gold:0,Silver:0,Bronze:0};
  customers.forEach(c => { if (tiers[c.tier] !== undefined) tiers[c.tier]++; });
  var tierCounts = document.querySelectorAll('.tier-card .count');
  if (tierCounts[0]) tierCounts[0].textContent = tiers.Platinum;
  if (tierCounts[1]) tierCounts[1].textContent = tiers.Gold;
  if (tierCounts[2]) tierCounts[2].textContent = tiers.Silver;
  if (tierCounts[3]) tierCounts[3].textContent = tiers.Bronze;

  grid.innerHTML = customers.map(c => {
    var tierBadge = c.tier === 'Gold' ? 'badge-warning' : c.tier === 'Platinum' ? 'badge-primary' : c.tier === 'Silver' ? 'badge-muted' : 'badge-muted';
    return '<div class="glass-card customer-card">' +
      '<div class="top"><div class="avatar">' + c.avatar + '</div><div class="info"><div class="name-row"><span class="name">' + c.name + '</span><span class="badge ' + tierBadge + '">' + c.tier + '</span></div><p class="email">' + c.email + '</p></div></div>' +
      '<div class="stats"><div><p class="val">' + c.visits + '</p><p class="lbl">Visits</p></div><div><p class="val">⭐ ' + c.points + '</p><p class="lbl">Points</p></div><div><p class="val" style="font-size:14px;color:var(--muted-fg)">' + c.lastVisit + '</p><p class="lbl">Last Visit</p></div></div>' +
      '<button class="edit-membership-btn" onclick="editCustomer(\'' + c.id + '\')"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg> Edit Customer</button>' +
      '</div>';
  }).join('');
  grid.classList.add('stagger');
  grid.querySelectorAll(':scope > *').forEach(c => c.classList.add('animate-fadeInUp'));
}

function editCustomer(id) {
  var customers = DB.get('customers', []);
  var c = customers.find(x => x.id === id);
  if (!c) return;
  var tierOpts = ['Platinum','Gold','Silver','Bronze'].map(t => '<option value="' + t + '"' + (t === c.tier ? ' selected' : '') + '>' + t + '</option>').join('');
  showModal('Edit Customer',
    '<div class="form-group"><label>Name</label><input id="edit-name" value="' + c.name + '"></div>' +
    '<div class="form-group"><label>Email</label><input id="edit-email" value="' + c.email + '"></div>' +
    '<div class="form-group"><label>Phone</label><input id="edit-phone" value="' + c.phone + '"></div>' +
    '<div class="form-group"><label>Tier</label><select id="edit-tier">' + tierOpts + '</select></div>' +
    '<div class="form-group"><label>Points</label><input id="edit-points" type="number" value="' + c.points + '"></div>' +
    '<div class="form-group"><label>Visits</label><input id="edit-visits" type="number" value="' + c.visits + '"></div>',
    function() {
      var customers = DB.get('customers', []);
      customers = customers.map(x => x.id === id ? {...x,
        name: document.getElementById('edit-name').value,
        email: document.getElementById('edit-email').value,
        phone: document.getElementById('edit-phone').value,
        tier: document.getElementById('edit-tier').value,
        points: Number(document.getElementById('edit-points').value),
        visits: Number(document.getElementById('edit-visits').value),
        avatar: document.getElementById('edit-name').value.charAt(0).toUpperCase()
      } : x);
      DB.set('customers', customers);
      closeModal();
      renderCustomerGrid();
      showToast('Customer updated ✅');
    }
  );
}

function searchCustomers(q) {
  q = q.toLowerCase();
  document.querySelectorAll('.customer-card').forEach(c => {
    var name = c.querySelector('.name').textContent.toLowerCase();
    var email = c.querySelector('.email').textContent.toLowerCase();
    c.style.display = (name.includes(q) || email.includes(q)) ? '' : 'none';
  });
}

// ==================== STAFF ====================
function initStaff() {
  renderStaffGrid();
}

function renderStaffGrid() {
  var staff = DB.get('staff', []);
  var grid = document.getElementById('staff-grid');
  if (!grid) return;
  var staffInfo = document.getElementById('staff-info');
  var activeCount = staff.filter(s => s.active).length;
  if (staffInfo) staffInfo.textContent = staff.length + ' team members • ' + activeCount + ' currently on duty';

  // Update role summary
  var roles = {};
  staff.forEach(s => { roles[s.role] = (roles[s.role] || 0) + 1; });
  var roleSummary = document.getElementById('role-summary');
  if (roleSummary) {
    var roleEmoji = {Admin:'⭐',Manager:'👔',Waiter:'🍽️',Chef:'👨‍🍳',Barista:'☕'};
    roleSummary.innerHTML = Object.keys(roles).map(r =>
      '<div class="glass-card role-card"><span class="emoji">' + (roleEmoji[r]||'👤') + '</span><div><p class="name">' + r + '</p><p class="meta">' + roles[r] + ' members</p></div></div>'
    ).join('');
  }

  grid.innerHTML = staff.map(s => {
    var roleBadge = s.role === 'Admin' ? 'badge-primary' : s.role === 'Manager' ? 'badge-warning' : 'badge-muted';
    return '<div class="glass-card staff-card">' +
      '<div class="top"><div class="left"><div class="avatar-box cafe-gradient" style="font-size:24px">' + s.emoji + '</div><div><p class="name">' + s.name + '</p><span class="badge ' + roleBadge + '" style="margin-top:4px">' + s.role + '</span></div></div>' +
      '<button class="duty-toggle ' + (s.active ? 'active' : 'off') + '" onclick="toggleStaffDuty(\'' + s.id + '\',this)"><span class="dot ' + (s.active ? 'green' : 'gray') + '"></span><span>' + (s.active ? 'Active' : 'Off') + '</span></button></div>' +
      '<div class="duties-list">' + s.duties.map(d => '<span class="duty-tag">' + d + '</span>').join('') + '</div>' +
      '<div class="staff-contact"><div class="row"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><span>' + s.email + '</span></div><div class="row"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><span>' + s.phone + '</span></div></div>' +
      '<div class="staff-actions"><button class="edit" onclick="editStaff(\'' + s.id + '\')"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg> Edit</button><button class="remove" onclick="removeStaff(\'' + s.id + '\')"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg> Remove</button></div></div>';
  }).join('');
  grid.classList.add('stagger');
  grid.querySelectorAll(':scope > *').forEach(c => c.classList.add('animate-fadeInUp'));
}

function toggleStaffDuty(id, btn) {
  var staff = DB.get('staff', []);
  staff = staff.map(s => s.id === id ? {...s, active: !s.active} : s);
  DB.set('staff', staff);
  var s = staff.find(x => x.id === id);
  btn.className = 'duty-toggle ' + (s.active ? 'active' : 'off');
  btn.innerHTML = '<span class="dot ' + (s.active ? 'green' : 'gray') + '"></span><span>' + (s.active ? 'Active' : 'Off') + '</span>';
  var activeCount = staff.filter(x => x.active).length;
  var staffInfo = document.getElementById('staff-info');
  if (staffInfo) staffInfo.textContent = staff.length + ' team members • ' + activeCount + ' currently on duty';
}

function editStaff(id) {
  var staff = DB.get('staff', []);
  var s = staff.find(x => x.id === id);
  if (!s) return;
  var roleOpts = ['Admin','Manager','Waiter','Chef','Barista'].map(r => '<option value="' + r + '"' + (r === s.role ? ' selected' : '') + '>' + r + '</option>').join('');
  showModal('Edit Staff Member',
    '<div class="form-group"><label>Name</label><input id="edit-name" value="' + s.name + '"></div>' +
    '<div class="form-group"><label>Email</label><input id="edit-email" value="' + s.email + '"></div>' +
    '<div class="form-group"><label>Phone</label><input id="edit-phone" value="' + s.phone + '"></div>' +
    '<div class="form-group"><label>Role</label><select id="edit-role">' + roleOpts + '</select></div>' +
    '<div class="form-group"><label>Duties (comma-separated)</label><input id="edit-duties" value="' + s.duties.join(', ') + '"></div>' +
    '<div class="form-group"><label>Emoji</label><input id="edit-emoji" value="' + s.emoji + '"></div>',
    function() {
      var staff = DB.get('staff', []);
      staff = staff.map(x => x.id === id ? {...x,
        name: document.getElementById('edit-name').value,
        email: document.getElementById('edit-email').value,
        phone: document.getElementById('edit-phone').value,
        role: document.getElementById('edit-role').value,
        duties: document.getElementById('edit-duties').value.split(',').map(d => d.trim()).filter(d => d),
        emoji: document.getElementById('edit-emoji').value
      } : x);
      DB.set('staff', staff);
      closeModal();
      renderStaffGrid();
      showToast('Staff member updated ✅');
    }
  );
}

function addNewStaff() {
  var roleOpts = ['Admin','Manager','Waiter','Chef','Barista'].map(r => '<option value="' + r + '">' + r + '</option>').join('');
  showModal('Add New Staff Member',
    '<div class="form-group"><label>Name</label><input id="edit-name" placeholder="Full name"></div>' +
    '<div class="form-group"><label>Email</label><input id="edit-email" placeholder="email@cafearoma.com"></div>' +
    '<div class="form-group"><label>Phone</label><input id="edit-phone" placeholder="+91 ..."></div>' +
    '<div class="form-group"><label>Role</label><select id="edit-role">' + roleOpts + '</select></div>' +
    '<div class="form-group"><label>Duties (comma-separated)</label><input id="edit-duties" placeholder="Table service, Customer care"></div>' +
    '<div class="form-group"><label>Emoji</label><input id="edit-emoji" placeholder="👤"></div>',
    function() {
      var staff = DB.get('staff', []);
      var newStaff = {
        id: 's' + Date.now(),
        name: document.getElementById('edit-name').value || 'New Staff',
        email: document.getElementById('edit-email').value || '',
        phone: document.getElementById('edit-phone').value || '',
        role: document.getElementById('edit-role').value,
        duties: document.getElementById('edit-duties').value.split(',').map(d => d.trim()).filter(d => d),
        emoji: document.getElementById('edit-emoji').value || '👤',
        active: true
      };
      staff.push(newStaff);
      DB.set('staff', staff);
      closeModal();
      renderStaffGrid();
      showToast(newStaff.name + ' added to staff ✅');
      addNotification('Staff Update', newStaff.name + ' joined the team', '👤');
    }
  );
}

function removeStaff(id) {
  if (!confirm('Are you sure you want to remove this staff member?')) return;
  var staff = DB.get('staff', []);
  var removed = staff.find(s => s.id === id);
  staff = staff.filter(s => s.id !== id);
  DB.set('staff', staff);
  renderStaffGrid();
  showToast((removed ? removed.name : 'Staff member') + ' removed');
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
  renderNotifications();

  // Page-specific init
  var path = window.location.pathname;
  var page = path.split('/').pop() || 'index.html';
  if (page === 'index.html' || page === '') initDashboard();
  else if (page === 'menu.html') initMenu();
  else if (page === 'tables.html') initTables();
  else if (page === 'orders.html') initOrders();
  else if (page === 'billing.html') initBilling();
  else if (page === 'customers.html') initCustomers();
  else if (page === 'staff.html') initStaff();

  // Add stagger animation classes
  document.querySelectorAll('.stats-grid, .menu-grid, .tables-grid, .staff-grid, .customer-grid, .role-summary, .tier-cards, .summary-cards').forEach(function(grid) {
    grid.classList.add('stagger');
    grid.querySelectorAll(':scope > *').forEach(function(child) { child.classList.add('animate-fadeInUp'); });
  });
  document.querySelectorAll('h1').forEach(function(h) { h.classList.add('animate-slideInLeft'); });
});
