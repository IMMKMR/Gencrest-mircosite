/* =============================================
   NANOVATE NAYI SOCH — Farmer App Logic
   Mock Data | Routing | All Screen Logic
   ============================================= */

// ============ MOCK DATA ============

const PRODUCTS = [
  {
    id: 'euphoria',
    name: 'euPhoria',
    icon: '🌿',
    desc: 'Bio-stimulant for enhanced crop growth',
    color: 'euphoria',
    skus: [
      { id: 'eu-250', name: 'euPhoria 250ml', size: '250 ml', acreagePerUnit: 0.5, price: 450 },
      { id: 'eu-500', name: 'euPhoria 500ml', size: '500 ml', acreagePerUnit: 1.0, price: 820 },
      { id: 'eu-1000', name: 'euPhoria 1L', size: '1 Litre', acreagePerUnit: 2.0, price: 1500 }
    ]
  },
  {
    id: 'kronoshield',
    name: 'KronoShield',
    icon: '🛡️',
    desc: 'Advanced nano crop protection',
    color: 'kronoshield',
    skus: [
      { id: 'ks-100', name: 'KronoShield 100g', size: '100 g', acreagePerUnit: 0.5, price: 380 },
      { id: 'ks-250', name: 'KronoShield 250g', size: '250 g', acreagePerUnit: 1.0, price: 700 },
      { id: 'ks-500', name: 'KronoShield 500g', size: '500 g', acreagePerUnit: 2.0, price: 1300 }
    ]
  },
  {
    id: 'agrovita',
    name: 'AgroVita',
    icon: '🌾',
    desc: 'Nano-nutrient soil enhancer',
    color: 'agrovita',
    skus: [
      { id: 'av-500', name: 'AgroVita 500ml', size: '500 ml', acreagePerUnit: 1.0, price: 550 },
      { id: 'av-1000', name: 'AgroVita 1L', size: '1 Litre', acreagePerUnit: 2.0, price: 1000 },
      { id: 'av-5000', name: 'AgroVita 5L', size: '5 Litre', acreagePerUnit: 10.0, price: 4500 }
    ]
  }
];

const STATES_DATA = {
  'Maharashtra': {
    districts: {
      'Pune': {
        talukas: ['Haveli', 'Mulshi', 'Maval', 'Bhor', 'Velhe', 'Junnar', 'Ambegaon', 'Khed', 'Shirur', 'Daund', 'Baramati', 'Indapur', 'Purandar']
      },
      'Nashik': {
        talukas: ['Nashik', 'Igatpuri', 'Dindori', 'Peth', 'Trimbakeshwar', 'Kalwan', 'Deola', 'Surgana', 'Baglan', 'Malegaon', 'Nandgaon', 'Chandwad', 'Niphad', 'Sinnar', 'Yeola']
      },
      'Nagpur': {
        talukas: ['Nagpur Urban', 'Nagpur Rural', 'Hingna', 'Kamptee', 'Narkhed', 'Katol', 'Saoner', 'Kalmeshwar', 'Ramtek', 'Mouda', 'Parseoni', 'Umred', 'Kuhi', 'Bhiwapur']
      },
      'Kolhapur': {
        talukas: ['Karveer', 'Panhala', 'Shahuwadi', 'Kagal', 'Hatkanangle', 'Shirol', 'Radhanagari', 'Gaganbawda', 'Bhudargad', 'Gadhinglaj', 'Chandgad', 'Ajra']
      },
      'Satara': {
        talukas: ['Satara', 'Jaoli', 'Koregaon', 'Wai', 'Mahabaleshwar', 'Khandala', 'Phaltan', 'Man', 'Khatav', 'Patan', 'Karad']
      },
      'Ahmednagar': {
        talukas: ['Ahmednagar', 'Shevgaon', 'Pathardi', 'Parner', 'Sangamner', 'Kopargaon', 'Akole', 'Shrirampur', 'Nevasa', 'Rahata', 'Rahuri', 'Jamkhed', 'Karjat']
      }
    }
  },
  'Madhya Pradesh': {
    districts: {
      'Indore': { talukas: ['Indore', 'Depalpur', 'Mhow', 'Sanwer'] },
      'Bhopal': { talukas: ['Huzur', 'Berasia'] },
      'Jabalpur': { talukas: ['Jabalpur', 'Sihora', 'Patan', 'Kundam'] }
    }
  },
  'Karnataka': {
    districts: {
      'Bangalore Rural': { talukas: ['Devanahalli', 'Doddaballapur', 'Hosakote', 'Nelamangala'] },
      'Belgaum': { talukas: ['Belgaum', 'Athani', 'Bailhongal', 'Chikkodi', 'Gokak', 'Hukkeri', 'Khanapur', 'Ramdurg', 'Raybag', 'Savadatti'] }
    }
  },
  'Gujarat': {
    districts: {
      'Ahmedabad': { talukas: ['Ahmedabad', 'Daskroi', 'Dholka', 'Mandal', 'Sanand', 'Viramgam'] },
      'Rajkot': { talukas: ['Rajkot', 'Dhoraji', 'Gondal', 'Jasdan', 'Jetpur'] }
    }
  },
  'Rajasthan': {
    districts: {
      'Jaipur': { talukas: ['Jaipur', 'Amber', 'Sanganer', 'Chaksu', 'Bassi'] },
      'Udaipur': { talukas: ['Udaipur', 'Girwa', 'Vallabhnagar', 'Mavli'] }
    }
  }
};

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' }
];

// UI Label translations (Expanded for full app prototype)
const TRANSLATIONS = {
  en: { 
    register: 'Register', login: 'Login', welcome: 'Welcome back', submit: 'Submit', 
    name: 'Full Name', mobile: 'Mobile Number', village: 'Village', state: 'State', 
    district: 'District', taluka: 'Taluka', pincode: 'Pin Code', home: 'Home', 
    bills: 'Bills', coupons: 'Coupons', contest: 'Contest', profile: 'Profile',
    otp_title: 'OTP Verification', otp_sub: "We've sent a code to", verify_login: 'Verify & Login', resend: 'Resend OTP',
    products: 'Products', offerings: 'Our Offerings, Sustainably Shaped', quick_access: 'Quick Access', quick_actions: 'Quick Actions',
    my_coupons: 'My Coupons', nayi_soch: 'NAYI SOCH Contest',
    submit_bill: 'Submit Bill', select_sku: 'Select SKU', qty: 'Quantity Purchased', upload_bill: 'Upload Bill Photo', upload_sku: 'Upload SKU Photo',
    total_coupons: 'Total Coupons', active: 'Active',
    contest_title: 'Agricultural Innovation Contest', about: 'About', enter_contest: 'Enter Contest', my_entries: 'My Entries',
    personal_details: 'Personal Details', activity: 'Activity', logout: 'Logout', acres: 'Acres',
    gencrest_init: 'A Gencrest Initiative', nano_tech: 'Nano-Technology for Agriculture',
    verify_otp: 'Verify OTP', bill_desc: 'Select your SKU, enter quantity and upload your bill photo.',
    contest_desc: 'Showcase your farming innovation and win exciting prizes!', submit_entry: 'Submit Entry →',
    upload_video: 'Upload Video', innovation_title: 'Innovation Title', category: 'Category', short_desc: 'Short Description',
    euphoria_name: 'euPhoria', euphoria_desc: 'Bio-stimulant for enhanced crop growth',
    kronoshield_name: 'KronoShield', kronoshield_desc: 'Advanced nano crop protection',
    agrovita_name: 'AgroVita', agrovita_desc: 'Nano-nutrient soil enhancer',
    my_coupons_desc: 'View all your earned coupons', contest_entries_desc: 'View your contest submissions',
    covers: 'Covers', select_a_sku: 'Select a SKU to calculate',
    redeemed: 'Redeemed', submitted: 'Submitted', under_review: 'Under Review', selected: 'Selected', winner: 'Winner',
    no_entries: 'No entries yet', no_entries_desc: 'Submit your first agri-innovation video to participate in the contest!'
  },
  hi: { 
    register: 'रजिस्टर', login: 'लॉगिन', welcome: 'वापसी पर स्वागत', submit: 'जमा करें', 
    name: 'पूरा नाम', mobile: 'मोबाइल नंबर', village: 'गांव', state: 'राज्य', 
    district: 'जिला', taluka: 'तालुका', pincode: 'पिन कोड', home: 'होम', 
    bills: 'बिल', coupons: 'कूपन', contest: 'प्रतियोगिता', profile: 'प्रोफ़ाइल',
    otp_title: 'ओटीपी सत्यापन', otp_sub: 'हमने एक कोड भेजा है', verify_login: 'सत्यापित करें और लॉगिन करें', resend: 'ओटीपी पुनः भेजें',
    products: 'उत्पाद', offerings: 'हमारी पेशकश', quick_access: 'त्वरित पहुंच', quick_actions: 'त्वरित कार्य',
    my_coupons: 'मेरे कूपन', nayi_soch: 'नई सोच प्रतियोगिता',
    submit_bill: 'बिल जमा करें', select_sku: 'SKU चुनें', qty: 'खरीदी गई मात्रा', upload_bill: 'बिल फोटो अपलोड करें', upload_sku: 'SKU फोटो अपलोड करें',
    total_coupons: 'कुल कूपन', active: 'सक्रिय',
    contest_title: 'कृषि नवाचार प्रतियोगिता', about: 'के बारे में', enter_contest: 'प्रतियोगिता में भाग लें', my_entries: 'मेरी प्रविष्टियां',
    personal_details: 'व्यक्तिगत विवरण', activity: 'गतिविधि', logout: 'लॉग आउट', acres: 'एकड़',
    gencrest_init: 'एक जेनक्रेस्ट पहल', nano_tech: 'कृषि के लिए नैनो-प्रौद्योगिकी',
    verify_otp: 'ओटीपी जांचें', bill_desc: 'अपना SKU चुनें, मात्रा दर्ज करें और बिल फोटो अपलोड करें।',
    contest_desc: 'अपने कृषि नवाचार का प्रदर्शन करें और रोमांचक पुरस्कार जीतें!', submit_entry: 'प्रविष्टि जमा करें →',
    upload_video: 'वीडियो अपलोड करें', innovation_title: 'नवाचार शीर्षक', category: 'श्रेणी', short_desc: 'संक्षिप्त विवरण',
    euphoria_name: 'यूफोरिया', euphoria_desc: 'उन्नत फसल वृद्धि के लिए बायो-स्टिमुलेंट',
    kronoshield_name: 'क्रोनोशील्ड', kronoshield_desc: 'उन्नत नैनो फसल संरक्षण',
    agrovita_name: 'एग्रोविटा', agrovita_desc: 'नैनो-पोषक तत्व मिट्टी वर्धक',
    my_coupons_desc: 'अपने सभी अर्जित कूपन देखें', contest_entries_desc: 'अपनी प्रतियोगिता प्रविष्टियां देखें',
    covers: 'कवर करता है', select_a_sku: 'गणना करने के लिए एक SKU चुनें',
    redeemed: 'भुनाया गया', submitted: 'जमा किया गया', under_review: 'समीक्षाधीन', selected: 'चयनित', winner: 'विजेता',
    no_entries: 'अभी तक कोई प्रविष्टि नहीं', no_entries_desc: 'प्रतियोगिता में भाग लेने के लिए अपना पहला कृषि-नवाचार वीडियो जमा करें!'
  },
  mr: { 
    register: 'नोंदणी', login: 'लॉगिन', welcome: 'पुन्हा स्वागत', submit: 'सबमिट करा', 
    name: 'पूर्ण नाव', mobile: 'मोबाईल नंबर', village: 'गाव', state: 'राज्य', 
    district: 'जिल्हा', taluka: 'तालुका', pincode: 'पिन कोड', home: 'मुख्य', 
    bills: 'बिले', coupons: 'कूपन', contest: 'स्पर्धा', profile: 'प्रोफाइल',
    otp_title: 'OTP पडताळणी', otp_sub: 'आम्ही कोड पाठवला आहे', verify_login: 'पडताळणी आणि लॉगिन', resend: 'OTP पुन्हा पाठवा',
    products: 'उत्पादने', offerings: 'आमची उत्पादने', quick_access: 'त्वरित प्रवेश', quick_actions: 'त्वरित कृती',
    my_coupons: 'माझे कूपन', nayi_soch: 'नवी सोच स्पर्धा',
    submit_bill: 'बिल सबमिट करा', select_sku: 'SKU निवडा', qty: 'खरेदी केलेली मात्रा', upload_bill: 'बिल फोटो अपलोड करा', upload_sku: 'SKU फोटो अपलोड करा',
    total_coupons: 'एकूण कूपन', active: 'सक्रिय',
    contest_title: 'कृषी नवोपक्रम स्पर्धा', about: 'विषयी', enter_contest: 'स्पर्धेत भाग घ्या', my_entries: 'माझ्या नोंदी',
    personal_details: 'वैयक्तिक तपशील', activity: 'क्रियाकलाप', logout: 'लॉगआउट', acres: 'एकर',
    gencrest_init: 'एक जेनक्रेस्ट उपक्रम', nano_tech: 'शेतीसाठी नॅनो-तंत्रज्ञान',
    verify_otp: 'OTP तपासा', bill_desc: 'तुमचा SKU निवडा, मात्रा प्रविष्ट करा आणि बिल फोटो अपलोड करा.',
    contest_desc: 'तुमच्या कृषी नवोपक्रमाचे प्रदर्शन करा आणि आकर्षक बक्षिसे जिंका!', submit_entry: 'नोंद सबमिट करा →',
    upload_video: 'व्हिडिओ अपलोड करा', innovation_title: 'नवोपक्रम शीर्षक', category: 'श्रेणी', short_desc: 'संक्षिप्त वर्णन',
    euphoria_name: 'युफोरिया', euphoria_desc: 'उत्तम पीक वाढीसाठी बायो-स्टिम्युलंट',
    kronoshield_name: 'क्रोनोशील्ड', kronoshield_desc: 'प्रगत नॅनो पीक संरक्षण',
    agrovita_name: 'अॅग्रोव्हिटा', agrovita_desc: 'नॅनो-पोषक तत्त्वे माती सुधारक',
    my_coupons_desc: 'तुमचे सर्व मिळवलेले कूपन पहा', contest_entries_desc: 'तुमचे स्पर्धेतील सहभाग पहा',
    covers: 'कव्हर करते', select_a_sku: 'गणना करण्यासाठी एक SKU निवडा',
    redeemed: 'रिडीम केले', submitted: 'सबमिट केले', under_review: 'पुनरावलोकनाखाली', selected: 'निवडले', winner: 'विजेता',
    no_entries: 'अद्याप कोणत्याही नोंदी नाहीत', no_entries_desc: 'स्पर्धेत भाग घेण्यासाठी तुमचा पहिला कृषी-नवोपक्रम व्हिडिओ सबमिट करा!'
  },
  gu: { 
    register: 'નોંધણી', login: 'લૉગિન', welcome: 'ફરી સ્વાગત', submit: 'સબમિટ', 
    name: 'પૂરું નામ', mobile: 'મોબાઇલ નંબર', village: 'ગામ', state: 'રાજ્ય', 
    district: 'જિલ્લો', taluka: 'તાલુકો', pincode: 'પિન કોડ', home: 'હોમ', 
    bills: 'બિલ', coupons: 'કૂપન', contest: 'સ્પર્ધા', profile: 'પ્રોફાઈલ',
    otp_title: 'OTP ચકાસણી', otp_sub: 'અમે કોડ મોકલ્યો છે', verify_login: 'ચકાસો અને લોગિન કરો', resend: 'OTP ફરીથી મોકલો',
    products: 'ઉત્પાદનો', offerings: 'અમારી ઑફર', quick_access: 'ઝડપી ઍક્સેસ', quick_actions: 'ઝડપી ક્રિયાઓ',
    my_coupons: 'મારા કૂપન્સ', nayi_soch: 'નવી સોચ સ્પર્ધા',
    submit_bill: 'બિલ સબમિટ કરો', select_sku: 'SKU પસંદ કરો', qty: 'ખરીદેલી માત્રા', upload_bill: 'બિલ ફોટો અપલોડ કરો', upload_sku: 'SKU ફોટો અપલોડ કરો',
    total_coupons: 'કુલ કૂપન્સ', active: 'સક્રિય',
    contest_title: 'કૃષિ ઇનોવેશન સ્પર્ધા', about: 'વિશે', enter_contest: 'સ્પર્ધામાં ભાગ લો', my_entries: 'મારી એન્ટ્રીઓ',
    personal_details: 'વ્યક્તિગત વિગતો', activity: 'પ્રવૃત્તિ', logout: 'લોગઆઉટ', acres: 'એકર',
    gencrest_init: 'એક જેનક્રેસ્ટ પહેલ', nano_tech: 'કૃષિ માટે નેનો-ટેકનોલોજી',
    verify_otp: 'OTP ચકાસો', bill_desc: 'તમારું SKU પસંદ કરો, માત્રા દાખલ કરો અને બિલ ફોટો અપલોડ કરો.',
    contest_desc: 'તમારા કૃષિ ઇનોવેશનનું પ્રદર્શન કરો અને આકર્ષક ઇનામો જીતો!', submit_entry: 'એન્ટ્રી સબમિટ કરો →',
    upload_video: 'વિડિઓ અપલોડ કરો', innovation_title: 'ઇનોવેશન શીર્ષક', category: 'શ્રેણી', short_desc: 'ટૂંકું વર્ણન',
    euphoria_name: 'યુફોરિયા', euphoria_desc: 'ઉન્નત પાક વૃદ્ધિ માટે બાયો-સ્ટીમ્યુલન્ટ',
    kronoshield_name: 'ક્રોનોશિલ્ડ', kronoshield_desc: 'અદ્યતન નેનો પાક સંરક્ષણ',
    agrovita_name: 'એગ્રોવિટા', agrovita_desc: 'નેનો-પોષક તત્ત્વો માટી વધારનાર',
    my_coupons_desc: 'તમારા તમામ કમાયેલ કૂપન્સ જુઓ', contest_entries_desc: 'તમારી સ્પર્ધા એન્ટ્રીઓ જુઓ',
    covers: 'આવરી લે છે', select_a_sku: 'ગણતરી કરવા માટે એક SKU પસંદ કરો',
    redeemed: 'રિડીમ કર્યું', submitted: 'સબમિટ કર્યું', under_review: 'સમીક્ષા હેઠળ', selected: 'પસંદ કરેલ', winner: 'વિજેતા',
    no_entries: 'હજુ સુધી કોઈ એન્ટ્રી નથી', no_entries_desc: 'સ્પર્ધામાં ભાગ લેવા માટે તમારો પહેલો કૃષિ-ઇનોવેશન વિડિઓ સબમિટ કરો!'
  }
};

// Fallback logic for other languages
['ta','te','kn','bn','pa'].forEach(lang => {
  TRANSLATIONS[lang] = TRANSLATIONS.en;
});

// Mock registered farmer
let currentUser = null;
let currentLang = 'en';

// Mock bills data
const MOCK_BILLS = [
  { id: 1, product: 'euphoria', sku: 'eu-500', qty: 3, acreage: 3.0, coupons: 1, date: '2026-06-20', billImg: true, skuImg: true },
  { id: 2, product: 'kronoshield', sku: 'ks-500', qty: 2, acreage: 4.0, coupons: 2, date: '2026-06-18', billImg: true, skuImg: true },
  { id: 3, product: 'agrovita', sku: 'av-1000', qty: 1, acreage: 2.0, coupons: 1, date: '2026-06-15', billImg: true, skuImg: true },
  { id: 4, product: 'euphoria', sku: 'eu-1000', qty: 2, acreage: 4.0, coupons: 2, date: '2026-06-10', billImg: true, skuImg: true },
];

// Mock coupons data
const MOCK_COUPONS = [
  { code: 'NNS-EU-78A3K2', product: 'euPhoria', acreage: 2, date: '2026-06-20', status: 'active' },
  { code: 'NNS-KS-94B1M7', product: 'KronoShield', acreage: 2, date: '2026-06-18', status: 'active' },
  { code: 'NNS-KS-94B1M8', product: 'KronoShield', acreage: 2, date: '2026-06-18', status: 'redeemed' },
  { code: 'NNS-AV-51C9P4', product: 'AgroVita', acreage: 2, date: '2026-06-15', status: 'active' },
  { code: 'NNS-EU-62D4Q1', product: 'euPhoria', acreage: 2, date: '2026-06-10', status: 'active' },
  { code: 'NNS-EU-62D4Q2', product: 'euPhoria', acreage: 2, date: '2026-06-10', status: 'redeemed' },
];

// Mock contest entries
const MOCK_CONTEST_ENTRIES = [
  { id: 1, title: 'Drip Irrigation with Recycled Materials', category: 'Water Conservation', desc: 'Built a drip irrigation system using recycled plastic bottles to water my tomato farm efficiently.', status: 'winner', award: 'Gold', date: '2026-06-12' },
  { id: 2, title: 'Solar-Powered Pest Trap', category: 'Pest Management', desc: 'Created a solar-powered light trap that attracts and catches harmful insects without chemicals.', status: 'selected', award: null, date: '2026-06-15' },
  { id: 3, title: 'Organic Mulching Technique', category: 'Soil Health', desc: 'Using sugarcane bagasse as mulch to retain soil moisture and add organic matter.', status: 'review', award: null, date: '2026-06-19' },
];

const CONTEST_CATEGORIES = [
  'Water Conservation',
  'Pest Management',
  'Soil Health',
  'Crop Innovation',
  'Farm Mechanization',
  'Organic Farming',
  'Post-Harvest Technology',
  'Other'
];


// ============ APP STATE ============

let appState = {
  currentScreen: 'splash',
  selectedProduct: null,
  selectedSku: null,
  billQty: 1,
  billUploaded: false,
  skuUploaded: false,
  contestTab: 'info',
  videoUploaded: false
};


// ============ NAVIGATION ============

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(screenId);
  if (screen) {
    screen.classList.add('active');
    appState.currentScreen = screenId;
  }
  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMap = { 'screen-home': 'nav-home', 'screen-bill': 'nav-bills', 'screen-coupons': 'nav-coupons', 'screen-contest': 'nav-contest', 'screen-profile': 'nav-profile' };
  if (navMap[screenId]) {
    const navEl = document.getElementById(navMap[screenId]);
    if (navEl) navEl.classList.add('active');
  }
  // Scroll to top
  document.querySelector('.mobile-container').scrollTop = 0;
}


// ============ LANGUAGE ============

function t(key) {
  const translations = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return translations[key] || TRANSLATIONS.en[key] || key;
}

function setLanguage(langCode) {
  currentLang = langCode;
  
  // Update static HTML elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Re-render dynamic content if on specific screens
  if (appState.currentScreen === 'screen-coupons') renderCoupons();
  if (appState.currentScreen === 'screen-contest' && appState.contestTab === 'entries') renderContestEntries();
  if (appState.currentScreen === 'screen-bill') selectProduct(appState.selectedProduct);
}


// ============ REGISTRATION ============

function populateStates() {
  const stateSelect = document.getElementById('reg-state');
  stateSelect.innerHTML = '<option value="">Select State</option>';
  Object.keys(STATES_DATA).forEach(state => {
    stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
  });
}

function onStateChange() {
  const state = document.getElementById('reg-state').value;
  const districtSelect = document.getElementById('reg-district');
  const talukaSelect = document.getElementById('reg-taluka');
  districtSelect.innerHTML = '<option value="">Select District</option>';
  talukaSelect.innerHTML = '<option value="">Select Taluka</option>';
  if (state && STATES_DATA[state]) {
    Object.keys(STATES_DATA[state].districts).forEach(d => {
      districtSelect.innerHTML += `<option value="${d}">${d}</option>`;
    });
  }
}

function onDistrictChange() {
  const state = document.getElementById('reg-state').value;
  const district = document.getElementById('reg-district').value;
  const talukaSelect = document.getElementById('reg-taluka');
  talukaSelect.innerHTML = '<option value="">Select Taluka</option>';
  if (state && district && STATES_DATA[state] && STATES_DATA[state].districts[district]) {
    STATES_DATA[state].districts[district].talukas.forEach(t => {
      talukaSelect.innerHTML += `<option value="${t}">${t}</option>`;
    });
  }
}

function handleRegistration(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value;
  const mobile = document.getElementById('reg-mobile').value;
  const village = document.getElementById('reg-village').value;
  const state = document.getElementById('reg-state').value;
  const district = document.getElementById('reg-district').value;
  const taluka = document.getElementById('reg-taluka').value;
  const pincode = document.getElementById('reg-pincode').value;

  if (!name || !mobile || !village || !state || !district || !taluka || !pincode) {
    showToast('Please fill all fields', 'error');
    return;
  }
  if (mobile.length !== 10) {
    showToast('Enter valid 10-digit mobile number', 'error');
    return;
  }

  currentUser = { name, mobile, village, state, district, taluka, pincode };
  showToast('Registration successful!', 'success');
  setTimeout(() => {
    showScreen('screen-otp');
    document.getElementById('otp-phone-display').textContent = '+91 ' + mobile;
    // Auto-fill OTP for demo
    document.querySelectorAll('.otp-input').forEach((inp, i) => {
      setTimeout(() => { inp.value = (i + 1).toString(); }, 300 + i * 150);
    });
  }, 500);
}


// ============ OTP ============

function handleOtpInput(e, index) {
  const inputs = document.querySelectorAll('.otp-input');
  if (e.target.value && index < inputs.length - 1) {
    inputs[index + 1].focus();
  }
  if (e.key === 'Backspace' && !e.target.value && index > 0) {
    inputs[index - 1].focus();
  }
}

function verifyOtp() {
  const inputs = document.querySelectorAll('.otp-input');
  const otp = Array.from(inputs).map(i => i.value).join('');
  if (otp.length === 4) {
    if (!currentUser) {
      currentUser = {
        name: 'Rajesh Patil',
        mobile: '9876543210',
        village: 'Wadgaon',
        state: 'Maharashtra',
        district: 'Pune',
        taluka: 'Baramati',
        pincode: '413102'
      };
    }
    showToast('Login successful!', 'success');
    setTimeout(() => {
      setupDashboard();
      showScreen('screen-home');
    }, 500);
  } else {
    showToast('Enter 4-digit OTP', 'error');
  }
}

function goToLogin() {
  showScreen('screen-otp');
  document.getElementById('otp-phone-display').textContent = '+91 9876543210';
  setTimeout(() => {
    document.querySelectorAll('.otp-input').forEach((inp, i) => {
      setTimeout(() => { inp.value = (i + 1).toString(); }, 300 + i * 150);
    });
  }, 200);
}


// ============ DASHBOARD ============

function setupDashboard() {
  if (!currentUser) return;
  document.getElementById('home-user-name').textContent = currentUser.name;
  const totalAcreage = MOCK_BILLS.reduce((sum, b) => sum + b.acreage, 0);
  document.getElementById('stat-coupons').textContent = MOCK_COUPONS.length;
  document.getElementById('stat-acreage').textContent = totalAcreage.toFixed(1);
  document.getElementById('stat-bills').textContent = MOCK_BILLS.length;
}


// ============ BILL ENTRY ============

function selectProduct(productId) {
  appState.selectedProduct = productId;
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  document.getElementById('bill-product-name').textContent = product.name;
  document.getElementById('bill-product-icon').textContent = product.icon;

  // Populate SKUs
  const skuContainer = document.getElementById('sku-selector');
  skuContainer.innerHTML = '';
  product.skus.forEach(sku => {
    const div = document.createElement('div');
    div.className = 'sku-option';
    div.onclick = () => selectSku(sku.id);
    div.id = `sku-${sku.id}`;
    div.innerHTML = `
      <div class="sku-radio"></div>
      <div>
        <div class="sku-name">${sku.name}</div>
        <div class="sku-detail">${sku.size} · ${t('covers')} ${sku.acreagePerUnit} ${t('acres').toLowerCase()} · ₹${sku.price}</div>
      </div>
    `;
    skuContainer.appendChild(div);
  });

  appState.selectedSku = null;
  appState.billQty = 1;
  document.getElementById('bill-qty').value = 1;
  updateAcreageDisplay();
  showScreen('screen-bill');
}

function selectSku(skuId) {
  appState.selectedSku = skuId;
  document.querySelectorAll('.sku-option').forEach(el => el.classList.remove('selected'));
  document.getElementById(`sku-${skuId}`).classList.add('selected');
  updateAcreageDisplay();
}

function updateBillQty(val) {
  appState.billQty = Math.max(1, parseInt(val) || 1);
  document.getElementById('bill-qty').value = appState.billQty;
  updateAcreageDisplay();
}

function updateAcreageDisplay() {
  const product = PRODUCTS.find(p => p.id === appState.selectedProduct);
  if (!product || !appState.selectedSku) {
    document.getElementById('acreage-value').textContent = '0';
    document.getElementById('coupon-info').textContent = t('select_a_sku');
    return;
  }
  const sku = product.skus.find(s => s.id === appState.selectedSku);
  if (!sku) return;
  const totalAcreage = sku.acreagePerUnit * appState.billQty;
  const coupons = Math.floor(totalAcreage / 2);
  document.getElementById('acreage-value').textContent = totalAcreage.toFixed(1);
  document.getElementById('coupon-info').textContent = `🎟️ ${coupons} coupon${coupons !== 1 ? 's' : ''} will be generated (1 per 2 acres)`;
}

function handleBillUpload() {
  appState.billUploaded = true;
  const area = document.getElementById('bill-upload-area');
  area.classList.add('has-file');
  area.innerHTML = `
    <div class="upload-icon">✅</div>
    <div class="upload-text">bill_photo.jpg</div>
    <div class="upload-hint">Tap to change</div>
  `;
}

function handleSkuUpload() {
  appState.skuUploaded = true;
  const area = document.getElementById('sku-upload-area');
  area.classList.add('has-file');
  area.innerHTML = `
    <div class="upload-icon">✅</div>
    <div class="upload-text">sku_photo.jpg</div>
    <div class="upload-hint">Tap to change</div>
  `;
}

function submitBill() {
  if (!appState.selectedSku) {
    showToast('Please select a SKU', 'error');
    return;
  }
  if (!appState.billUploaded) {
    showToast('Please upload bill photo', 'error');
    return;
  }

  const product = PRODUCTS.find(p => p.id === appState.selectedProduct);
  const sku = product.skus.find(s => s.id === appState.selectedSku);
  const totalAcreage = sku.acreagePerUnit * appState.billQty;
  const coupons = Math.floor(totalAcreage / 2);

  // Show success overlay
  document.getElementById('success-acreage').textContent = totalAcreage.toFixed(1);
  document.getElementById('success-coupons').textContent = coupons;
  document.getElementById('success-overlay').classList.add('show');

  // Reset
  appState.billUploaded = false;
  appState.skuUploaded = false;
}

function closeSuccessOverlay() {
  document.getElementById('success-overlay').classList.remove('show');
  showScreen('screen-coupons');
  renderCoupons();
}


// ============ COUPONS ============

function renderCoupons() {
  const list = document.getElementById('coupon-list');
  list.innerHTML = '';
  const activeCoupons = MOCK_COUPONS.filter(c => c.status === 'active').length;
  document.getElementById('coupons-count').textContent = MOCK_COUPONS.length;
  document.getElementById('coupons-active-count').textContent = `${activeCoupons} Active`;

  MOCK_COUPONS.forEach(coupon => {
    const card = document.createElement('div');
    card.className = 'coupon-card';
    card.innerHTML = `
      <div class="coupon-left">
        <div class="coupon-code">${coupon.code}</div>
        <div class="coupon-product">${coupon.product}</div>
        <div class="coupon-details">${formatDate(coupon.date)}</div>
      </div>
      <div class="coupon-right">
        <div class="coupon-acreage">${coupon.acreage}</div>
        <div class="coupon-acreage-label">${t('acres')}</div>
        <span class="coupon-status ${coupon.status}">${coupon.status === 'active' ? '● ' + t('active') : '○ ' + t('redeemed')}</span>
      </div>
    `;
    list.appendChild(card);
  });
}


// ============ CONTEST ============

function showContestTab(tab) {
  appState.contestTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

  document.getElementById('contest-info-content').style.display = tab === 'info' ? 'block' : 'none';
  document.getElementById('contest-form-content').style.display = tab === 'form' ? 'block' : 'none';
  document.getElementById('contest-entries-content').style.display = tab === 'entries' ? 'block' : 'none';

  if (tab === 'entries') renderContestEntries();
}

function renderContestEntries() {
  const list = document.getElementById('contest-entries-list');
  list.innerHTML = '';

  if (MOCK_CONTEST_ENTRIES.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎬</div>
        <h3>${t('no_entries')}</h3>
        <p>${t('no_entries_desc')}</p>
      </div>
    `;
    return;
  }

  MOCK_CONTEST_ENTRIES.forEach(entry => {
    const statusLabels = { submitted: t('submitted'), review: t('under_review'), selected: t('selected'), winner: '🏆 ' + t('winner') };
    const card = document.createElement('div');
    card.className = 'entry-card';
    card.innerHTML = `
      <div class="entry-card-header">
        <div class="entry-thumbnail">🎥</div>
        <div class="entry-info">
          <h4>${entry.title}</h4>
          <p>${entry.category} · ${formatDate(entry.date)}</p>
        </div>
        <span class="entry-status ${entry.status}">${statusLabels[entry.status] || entry.status}</span>
      </div>
    `;
    list.appendChild(card);
  });
}

function handleVideoUpload() {
  appState.videoUploaded = true;
  const area = document.getElementById('video-upload-area');
  area.classList.add('uploaded');
  area.innerHTML = `
    <div class="video-preview">
      <span>▶️</span>
    </div>
  `;
}

function submitContest() {
  const title = document.getElementById('contest-title').value;
  const category = document.getElementById('contest-category').value;
  const desc = document.getElementById('contest-desc').value;

  if (!title || !category || !desc) {
    showToast('Please fill all fields', 'error');
    return;
  }
  if (!appState.videoUploaded) {
    showToast('Please upload your video', 'error');
    return;
  }

  MOCK_CONTEST_ENTRIES.push({
    id: MOCK_CONTEST_ENTRIES.length + 1,
    title,
    category,
    desc,
    status: 'submitted',
    award: null,
    date: new Date().toISOString().split('T')[0]
  });

  showToast('Entry submitted successfully! 🎉', 'success');
  // Reset form
  document.getElementById('contest-title').value = '';
  document.getElementById('contest-category').value = '';
  document.getElementById('contest-desc').value = '';
  appState.videoUploaded = false;
  document.getElementById('video-upload-area').classList.remove('uploaded');
  document.getElementById('video-upload-area').innerHTML = `
    <div class="upload-icon">🎥</div>
    <div class="upload-text">Upload Video</div>
    <div class="upload-hint">Record live or upload from device (max 100MB)</div>
  `;

  setTimeout(() => showContestTab('entries'), 800);
}


// ============ PROFILE ============

function renderProfile() {
  if (!currentUser) return;
  document.getElementById('profile-name').textContent = currentUser.name;
  document.getElementById('profile-phone').textContent = '+91 ' + currentUser.mobile;
  document.getElementById('profile-detail-village').textContent = currentUser.village;
  document.getElementById('profile-detail-state').textContent = currentUser.state;
  document.getElementById('profile-detail-district').textContent = currentUser.district;
  document.getElementById('profile-detail-taluka').textContent = currentUser.taluka;
  document.getElementById('profile-detail-pincode').textContent = currentUser.pincode;
}

function logout() {
  currentUser = null;
  showScreen('screen-splash');
}


// ============ UTILITIES ============

function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.className = `toast ${type}`;
  toast.querySelector('.toast-icon').textContent = icons[type] || 'ℹ️';
  toast.querySelector('.toast-text').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function populateContestCategories() {
  const select = document.getElementById('contest-category');
  if (!select) return;
  select.innerHTML = '<option value="">Select Category</option>';
  CONTEST_CATEGORIES.forEach(cat => {
    select.innerHTML += `<option value="${cat}">${cat}</option>`;
  });
}


// ============ INIT ============

document.addEventListener('DOMContentLoaded', () => {
  populateStates();
  populateContestCategories();
  showScreen('screen-splash');
});
