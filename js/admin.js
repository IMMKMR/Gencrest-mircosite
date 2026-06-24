/* =============================================
   NANOVATE NAYI SOCH — Admin Panel Logic
   Dashboard | Reports | CMS | CSV Export
   ============================================= */

// ============ MOCK DATA ============

const ADMIN_CREDENTIALS = { email: 'admin@nanovate.ag', password: 'admin123' };

const ADMIN_IDS = [
  { name: 'Vikram Sharma', email: 'vikram@nanovate.ag', role: 'Super Admin' },
  { name: 'Priya Deshmukh', email: 'priya@nanovate.ag', role: 'Admin' },
  { name: 'Amit Kulkarni', email: 'amit@nanovate.ag', role: 'Admin' },
  { name: 'Sneha Patil', email: 'sneha@nanovate.ag', role: 'Reviewer' },
  { name: 'Ravi Joshi', email: 'ravi@nanovate.ag', role: 'Reviewer' },
  { name: 'Meera Rao', email: 'meera@nanovate.ag', role: 'Reviewer' },
  { name: 'Suresh Gupta', email: 'suresh@nanovate.ag', role: 'Reviewer' },
  { name: 'Anita Bhosle', email: 'anita@nanovate.ag', role: 'Viewer' },
  { name: 'Deepak Pawar', email: 'deepak@nanovate.ag', role: 'Viewer' },
  { name: 'Kavita More', email: 'kavita@nanovate.ag', role: 'Viewer' }
];

const MOCK_FARMERS = [
  { id: 1, name: 'Rajesh Patil', mobile: '9876543210', village: 'Wadgaon', state: 'Maharashtra', district: 'Pune', taluka: 'Baramati', pincode: '413102' },
  { id: 2, name: 'Sunil Jadhav', mobile: '9823456789', village: 'Ozar', state: 'Maharashtra', district: 'Nashik', taluka: 'Niphad', pincode: '422207' },
  { id: 3, name: 'Ganesh Deshmukh', mobile: '9812345678', village: 'Kalmeshwar', state: 'Maharashtra', district: 'Nagpur', taluka: 'Kalmeshwar', pincode: '441501' },
  { id: 4, name: 'Prakash Shinde', mobile: '9834567890', village: 'Phaltan', state: 'Maharashtra', district: 'Satara', taluka: 'Phaltan', pincode: '415523' },
  { id: 5, name: 'Manoj Kadam', mobile: '9845678901', village: 'Sangamner', state: 'Maharashtra', district: 'Ahmednagar', taluka: 'Sangamner', pincode: '422605' },
  { id: 6, name: 'Ramesh Yadav', mobile: '9956781234', village: 'Depalpur', state: 'Madhya Pradesh', district: 'Indore', taluka: 'Depalpur', pincode: '453115' },
  { id: 7, name: 'Kishor Patel', mobile: '9967892345', village: 'Sanand', state: 'Gujarat', district: 'Ahmedabad', taluka: 'Sanand', pincode: '382110' }
];

const MOCK_COUPON_ENTRIES = [
  { farmer: MOCK_FARMERS[0], product: 'euPhoria', sku: 'euPhoria 500ml', qty: 3, acreage: 3.0, coupons: 1, date: '2026-06-20', status: 'Active' },
  { farmer: MOCK_FARMERS[0], product: 'KronoShield', sku: 'KronoShield 500g', qty: 2, acreage: 4.0, coupons: 2, date: '2026-06-18', status: 'Active' },
  { farmer: MOCK_FARMERS[1], product: 'euPhoria', sku: 'euPhoria 1L', qty: 1, acreage: 2.0, coupons: 1, date: '2026-06-19', status: 'Active' },
  { farmer: MOCK_FARMERS[1], product: 'AgroVita', sku: 'AgroVita 1L', qty: 3, acreage: 6.0, coupons: 3, date: '2026-06-17', status: 'Active' },
  { farmer: MOCK_FARMERS[2], product: 'KronoShield', sku: 'KronoShield 250g', qty: 5, acreage: 5.0, coupons: 2, date: '2026-06-16', status: 'Active' },
  { farmer: MOCK_FARMERS[2], product: 'euPhoria', sku: 'euPhoria 250ml', qty: 4, acreage: 2.0, coupons: 1, date: '2026-06-15', status: 'Redeemed' },
  { farmer: MOCK_FARMERS[3], product: 'AgroVita', sku: 'AgroVita 5L', qty: 1, acreage: 10.0, coupons: 5, date: '2026-06-14', status: 'Active' },
  { farmer: MOCK_FARMERS[4], product: 'euPhoria', sku: 'euPhoria 1L', qty: 2, acreage: 4.0, coupons: 2, date: '2026-06-13', status: 'Active' },
  { farmer: MOCK_FARMERS[4], product: 'KronoShield', sku: 'KronoShield 500g', qty: 1, acreage: 2.0, coupons: 1, date: '2026-06-12', status: 'Redeemed' },
  { farmer: MOCK_FARMERS[5], product: 'AgroVita', sku: 'AgroVita 1L', qty: 2, acreage: 4.0, coupons: 2, date: '2026-06-11', status: 'Active' },
  { farmer: MOCK_FARMERS[6], product: 'euPhoria', sku: 'euPhoria 500ml', qty: 4, acreage: 4.0, coupons: 2, date: '2026-06-10', status: 'Active' },
  { farmer: MOCK_FARMERS[6], product: 'KronoShield', sku: 'KronoShield 100g', qty: 6, acreage: 3.0, coupons: 1, date: '2026-06-09', status: 'Active' },
];

const MOCK_CONTEST_ENTRIES_ADMIN = [
  { farmer: MOCK_FARMERS[0], title: 'Drip Irrigation with Recycled Materials', category: 'Water Conservation', desc: 'Built a drip irrigation system using recycled plastic bottles to water my tomato farm efficiently.', status: 'winner', award: 'Gold', date: '2026-06-12' },
  { farmer: MOCK_FARMERS[1], title: 'Solar-Powered Pest Trap', category: 'Pest Management', desc: 'Created a solar-powered light trap that attracts and catches harmful insects without chemicals.', status: 'selected', award: null, date: '2026-06-15' },
  { farmer: MOCK_FARMERS[2], title: 'Organic Mulching Technique', category: 'Soil Health', desc: 'Using sugarcane bagasse as mulch to retain soil moisture and add organic matter.', status: 'review', award: null, date: '2026-06-19' },
  { farmer: MOCK_FARMERS[3], title: 'Rainwater Harvesting for Fields', category: 'Water Conservation', desc: 'Built a rainwater collection system using farm pond to store monsoon water for dry season.', status: 'submitted', award: null, date: '2026-06-20' },
  { farmer: MOCK_FARMERS[4], title: 'Vermicompost Production Unit', category: 'Soil Health', desc: 'Setup a vermicompost unit to produce organic fertilizer from farm waste.', status: 'review', award: null, date: '2026-06-18' },
  { farmer: MOCK_FARMERS[5], title: 'Manual Seed Planter Innovation', category: 'Farm Mechanization', desc: 'Designed a manual seed planter that ensures equal spacing and depth for uniform germination.', status: 'submitted', award: null, date: '2026-06-21' },
  { farmer: MOCK_FARMERS[6], title: 'Natural Pesticide from Neem', category: 'Organic Farming', desc: 'Preparing neem-based natural pesticide to control pests without harmful chemicals.', status: 'selected', award: null, date: '2026-06-14' },
  { farmer: MOCK_FARMERS[0], title: 'Micro-Sprinkler Water Saving', category: 'Water Conservation', desc: 'Implemented micro-sprinkler system reducing water usage by 40% compared to flood irrigation.', status: 'submitted', award: null, date: '2026-06-22' }
];


// ============ ADMIN STATE ============

let adminState = {
  currentPage: 'dashboard',
  filters: {
    state: '',
    product: '',
    status: '',
    category: '',
    search: ''
  }
};


// ============ AUTH ============

function adminLogin() {
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;
  const errorEl = document.getElementById('login-error');

  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    document.getElementById('admin-login-page').classList.remove('active');
    document.getElementById('admin-layout').classList.add('active');
    showAdminPage('dashboard');
  } else {
    errorEl.style.display = 'block';
    errorEl.textContent = 'Invalid credentials. Try admin@nanovate.ag / admin123';
  }
}

function adminLogout() {
  document.getElementById('admin-layout').classList.remove('active');
  document.getElementById('admin-login-page').classList.add('active');
  document.getElementById('admin-email').value = '';
  document.getElementById('admin-password').value = '';
  document.getElementById('login-error').style.display = 'none';
}


// ============ NAVIGATION ============

function showAdminPage(pageId) {
  adminState.currentPage = pageId;
  document.querySelectorAll('.admin-page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${pageId}`).classList.add('active');

  document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
  document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

  const titles = {
    dashboard: 'Dashboard',
    'coupon-reports': 'Coupon Reports',
    'contest-reports': 'Contest Reports',
    cms: 'Contest Adjudication (CMS)',
    settings: 'Admin Settings'
  };
  document.getElementById('admin-page-title').textContent = titles[pageId] || 'Dashboard';

  // Render page content
  switch (pageId) {
    case 'dashboard': renderDashboard(); break;
    case 'coupon-reports': renderCouponReports(); break;
    case 'contest-reports': renderContestReports(); break;
    case 'cms': renderCMS(); break;
    case 'settings': renderSettings(); break;
  }
}


// ============ DASHBOARD ============

function renderDashboard() {
  // KPIs
  const totalFarmers = MOCK_FARMERS.length;
  const totalBills = MOCK_COUPON_ENTRIES.length;
  const totalCoupons = MOCK_COUPON_ENTRIES.reduce((s, e) => s + e.coupons, 0);
  const totalContestEntries = MOCK_CONTEST_ENTRIES_ADMIN.length;
  const totalAcreage = MOCK_COUPON_ENTRIES.reduce((s, e) => s + e.acreage, 0);

  document.getElementById('kpi-registrations').textContent = totalFarmers;
  document.getElementById('kpi-bills').textContent = totalBills;
  document.getElementById('kpi-coupons').textContent = totalCoupons;
  document.getElementById('kpi-contest').textContent = totalContestEntries;
  document.getElementById('kpi-acreage').textContent = totalAcreage.toFixed(0);

  // Bar chart - Registrations by State
  renderBarChart('chart-state', getStateData(), 'green');
  // Bar chart - Coupons by Product
  renderBarChart('chart-product', getProductData(), 'multi');
  // Donut chart - Contest by Category
  renderDonutChart('chart-category', getCategoryData());
  // Bar chart - Contest by Status
  renderBarChart('chart-contest-status', getContestStatusData(), 'multi');
}

function getStateData() {
  const counts = {};
  MOCK_FARMERS.forEach(f => {
    counts[f.state] = (counts[f.state] || 0) + 1;
  });
  return Object.entries(counts).map(([label, value]) => ({ label: label.substring(0, 6), value, fullLabel: label }));
}

function getProductData() {
  const counts = {};
  MOCK_COUPON_ENTRIES.forEach(e => {
    counts[e.product] = (counts[e.product] || 0) + e.coupons;
  });
  const colors = { 'euPhoria': 'green', 'KronoShield': 'blue', 'AgroVita': 'orange' };
  return Object.entries(counts).map(([label, value]) => ({ label: label.substring(0, 8), value, color: colors[label] || 'green', fullLabel: label }));
}

function getCategoryData() {
  const counts = {};
  MOCK_CONTEST_ENTRIES_ADMIN.forEach(e => {
    counts[e.category] = (counts[e.category] || 0) + 1;
  });
  const colors = ['#4ADE80', '#38BDF8', '#FF8C38', '#A78BFA', '#F87171', '#FBBF24'];
  return Object.entries(counts).map(([label, value], i) => ({ label, value, color: colors[i % colors.length] }));
}

function getContestStatusData() {
  const counts = {};
  MOCK_CONTEST_ENTRIES_ADMIN.forEach(e => {
    counts[e.status] = (counts[e.status] || 0) + 1;
  });
  const colors = { submitted: 'blue', review: 'orange', selected: 'green', winner: 'purple' };
  const labels = { submitted: 'Submitted', review: 'Review', selected: 'Selected', winner: 'Winner' };
  return Object.entries(counts).map(([key, value]) => ({ label: labels[key] || key, value, color: colors[key] || 'green' }));
}

function renderBarChart(containerId, data, colorMode) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const maxVal = Math.max(...data.map(d => d.value), 1);

  container.innerHTML = '';
  data.forEach(item => {
    const pct = (item.value / maxVal) * 100;
    const barColor = colorMode === 'multi' ? (item.color || 'green') : colorMode;
    const group = document.createElement('div');
    group.className = 'bar-group';
    group.innerHTML = `
      <div class="bar-value">${item.value}</div>
      <div class="bar ${barColor}" style="height: ${Math.max(pct, 8)}%;" title="${item.fullLabel || item.label}: ${item.value}"></div>
      <div class="bar-label">${item.label}</div>
    `;
    container.appendChild(group);
  });
}

function renderDonutChart(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const total = data.reduce((s, d) => s + d.value, 0);
  let cumulativePercent = 0;
  const gradientParts = [];

  data.forEach(item => {
    const pct = (item.value / total) * 100;
    gradientParts.push(`${item.color} ${cumulativePercent}% ${cumulativePercent + pct}%`);
    cumulativePercent += pct;
  });

  container.innerHTML = `
    <div class="donut-container">
      <div class="donut-chart" style="background: conic-gradient(${gradientParts.join(', ')});">
        <div class="donut-center">
          <div class="donut-center-value">${total}</div>
          <div class="donut-center-label">Total</div>
        </div>
      </div>
      <div class="donut-legend">
        ${data.map(d => `
          <div class="donut-legend-item">
            <span class="donut-legend-color" style="background:${d.color}"></span>
            <span>${d.label}</span>
            <span class="donut-legend-value">${d.value}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}


// ============ COUPON REPORTS ============

function renderCouponReports() {
  let data = [...MOCK_COUPON_ENTRIES];

  // Apply filters
  const stateFilter = document.getElementById('filter-coupon-state')?.value;
  const productFilter = document.getElementById('filter-coupon-product')?.value;

  if (stateFilter) data = data.filter(e => e.farmer.state === stateFilter);
  if (productFilter) data = data.filter(e => e.product === productFilter);

  const tbody = document.getElementById('coupon-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  data.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.farmer.name}</td>
      <td>${entry.farmer.mobile}</td>
      <td>${entry.farmer.state}</td>
      <td>${entry.farmer.district}</td>
      <td>${entry.product}</td>
      <td>${entry.sku}</td>
      <td>${entry.qty}</td>
      <td>${entry.acreage}</td>
      <td>${entry.coupons}</td>
      <td>${formatAdminDate(entry.date)}</td>
      <td><span class="table-badge ${entry.status.toLowerCase()}">${entry.status}</span></td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('coupon-table-count').textContent = `Showing ${data.length} of ${MOCK_COUPON_ENTRIES.length} entries`;
}

function filterCouponReports() {
  renderCouponReports();
}


// ============ CONTEST REPORTS ============

function renderContestReports() {
  let data = [...MOCK_CONTEST_ENTRIES_ADMIN];

  const stateFilter = document.getElementById('filter-contest-state')?.value;
  const categoryFilter = document.getElementById('filter-contest-category')?.value;
  const statusFilter = document.getElementById('filter-contest-status')?.value;

  if (stateFilter) data = data.filter(e => e.farmer.state === stateFilter);
  if (categoryFilter) data = data.filter(e => e.category === categoryFilter);
  if (statusFilter) data = data.filter(e => e.status === statusFilter);

  const tbody = document.getElementById('contest-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  const statusLabels = { submitted: 'Submitted', review: 'Under Review', selected: 'Selected', winner: 'Winner' };

  data.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.farmer.name}</td>
      <td>${entry.farmer.mobile}</td>
      <td>${entry.farmer.state}</td>
      <td>${entry.title}</td>
      <td>${entry.category}</td>
      <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;">${entry.desc}</td>
      <td><a href="#" style="color:#38BDF8;">View</a></td>
      <td><span class="table-badge ${entry.status}">${statusLabels[entry.status]}</span></td>
      <td>${entry.award || '—'}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById('contest-table-count').textContent = `Showing ${data.length} of ${MOCK_CONTEST_ENTRIES_ADMIN.length} entries`;
}

function filterContestReports() {
  renderContestReports();
}


// ============ CMS ADJUDICATION ============

function renderCMS() {
  const grid = document.getElementById('cms-grid');
  if (!grid) return;
  grid.innerHTML = '';

  MOCK_CONTEST_ENTRIES_ADMIN.forEach((entry, index) => {
    const card = document.createElement('div');
    card.className = 'cms-card';

    const statusOptions = ['Not Reviewed', 'Shortlisted', 'Selected for Award'];
    const awardOptions = ['', 'Gold', 'Silver', 'Bronze'];
    const currentStatus = entry.status === 'winner' ? 'Selected for Award' : (entry.status === 'selected' ? 'Shortlisted' : (entry.status === 'review' ? 'Not Reviewed' : 'Not Reviewed'));
    const currentAward = entry.award || '';

    card.innerHTML = `
      <div class="cms-card-video">
        <div class="play-btn">▶</div>
      </div>
      <div class="cms-card-body">
        <div class="cms-card-header">
          <div>
            <div class="cms-farmer-name">${entry.farmer.name}</div>
            <div class="cms-farmer-location">${entry.farmer.village}, ${entry.farmer.district}, ${entry.farmer.state}</div>
          </div>
          <span class="cms-card-category">${entry.category}</span>
        </div>
        <div class="cms-entry-title">${entry.title}</div>
        <div class="cms-entry-desc">${entry.desc}</div>
        <div class="cms-actions">
          <select class="cms-select" id="cms-status-${index}" onchange="toggleAwardDropdown(${index})">
            ${statusOptions.map(s => `<option value="${s}" ${s === currentStatus ? 'selected' : ''}>${s}</option>`).join('')}
          </select>
          <select class="cms-select" id="cms-award-${index}" style="display:${currentStatus === 'Selected for Award' ? 'block' : 'none'}">
            ${awardOptions.map(a => `<option value="${a}" ${a === currentAward ? 'selected' : ''}>${a || 'Select Award'}</option>`).join('')}
          </select>
          <button class="cms-save-btn" onclick="saveCMSEntry(${index})">Save</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function toggleAwardDropdown(index) {
  const statusSelect = document.getElementById(`cms-status-${index}`);
  const awardSelect = document.getElementById(`cms-award-${index}`);
  awardSelect.style.display = statusSelect.value === 'Selected for Award' ? 'block' : 'none';
}

function saveCMSEntry(index) {
  const statusSelect = document.getElementById(`cms-status-${index}`);
  const awardSelect = document.getElementById(`cms-award-${index}`);
  const btn = statusSelect.closest('.cms-actions').querySelector('.cms-save-btn');

  const statusMap = { 'Not Reviewed': 'review', 'Shortlisted': 'selected', 'Selected for Award': 'winner' };
  MOCK_CONTEST_ENTRIES_ADMIN[index].status = statusMap[statusSelect.value] || 'submitted';
  MOCK_CONTEST_ENTRIES_ADMIN[index].award = awardSelect.value || null;

  btn.textContent = '✓ Saved';
  btn.classList.add('saved');
  showAdminToast('Entry updated successfully');
  setTimeout(() => {
    btn.textContent = 'Save';
    btn.classList.remove('saved');
  }, 2000);
}


// ============ SETTINGS ============

function renderSettings() {
  const list = document.getElementById('admin-id-list');
  if (!list) return;
  list.innerHTML = '';

  ADMIN_IDS.forEach(admin => {
    const initials = admin.name.split(' ').map(n => n[0]).join('');
    const item = document.createElement('div');
    item.className = 'admin-id-item';
    item.innerHTML = `
      <div class="admin-id-avatar">${initials}</div>
      <span class="admin-id-email">${admin.email}</span>
      <span class="admin-id-role">${admin.role}</span>
    `;
    list.appendChild(item);
  });
}


// ============ CSV EXPORT ============

function downloadCouponCSV() {
  const headers = ['Farmer Name', 'Mobile', 'State', 'District', 'Product', 'SKU', 'Qty', 'Acreage', 'Coupons', 'Date', 'Status'];
  const rows = MOCK_COUPON_ENTRIES.map(e => [
    e.farmer.name, e.farmer.mobile, e.farmer.state, e.farmer.district,
    e.product, e.sku, e.qty, e.acreage, e.coupons, e.date, e.status
  ]);
  downloadCSV('coupon_report.csv', headers, rows);
  showAdminToast('Coupon report downloaded');
}

function downloadContestCSV() {
  const headers = ['Farmer Name', 'Mobile', 'State', 'Title', 'Category', 'Description', 'Status', 'Award', 'Date'];
  const statusLabels = { submitted: 'Submitted', review: 'Under Review', selected: 'Selected', winner: 'Winner' };
  const rows = MOCK_CONTEST_ENTRIES_ADMIN.map(e => [
    e.farmer.name, e.farmer.mobile, e.farmer.state, e.title, e.category,
    `"${e.desc}"`, statusLabels[e.status], e.award || '-', e.date
  ]);
  downloadCSV('contest_report.csv', headers, rows);
  showAdminToast('Contest report downloaded');
}

function downloadCSV(filename, headers, rows) {
  let csv = headers.join(',') + '\n';
  rows.forEach(row => {
    csv += row.join(',') + '\n';
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}


// ============ UTILITIES ============

function formatAdminDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function showAdminToast(message) {
  const toast = document.getElementById('admin-toast');
  if (!toast) return;
  toast.querySelector('.admin-toast-text').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}


// ============ INIT ============

document.addEventListener('DOMContentLoaded', () => {
  // Show login page
  document.getElementById('admin-login-page').classList.add('active');

  // Handle enter key on login
  document.getElementById('admin-password')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adminLogin();
  });
});
