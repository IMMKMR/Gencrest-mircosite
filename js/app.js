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
  ta: { 
    register: 'பதிவு செய்', login: 'உள்நுழை', welcome: 'மீண்டும் வருக', submit: 'சமர்ப்பி', 
    name: 'முழு பெயர்', mobile: 'மொபைல் எண்', village: 'கிராமம்', state: 'மாநிலம்', 
    district: 'மாவட்டம்', taluka: 'வட்டம்', pincode: 'பின்கோடு', home: 'முகப்பு', 
    bills: 'பில்கள்', coupons: 'கூப்பன்கள்', contest: 'போட்டி', profile: 'சுயவிவரம்',
    otp_title: 'OTP சரிபார்ப்பு', otp_sub: 'நாங்கள் ஒரு குறியீட்டை அனுப்பியுள்ளோம்', verify_login: 'சரிபார்த்து உள்நுழையவும்', resend: 'OTP மீண்டும் அனுப்பு',
    products: 'தயாரிப்புகள்', offerings: 'எங்கள் சலுகைகள்', quick_access: 'விரைவான அணுகல்', quick_actions: 'விரைவான செயல்கள்',
    my_coupons: 'என் கூப்பன்கள்', nayi_soch: 'நயீ சோச் போட்டி',
    submit_bill: 'பில்லை சமர்ப்பி', select_sku: 'SKU தேர்ந்தெடுக்கவும்', qty: 'வாங்கிய அளவு', upload_bill: 'பில் புகைப்படம் பதிவேற்றவும்', upload_sku: 'SKU புகைப்படம் பதிவேற்றவும்',
    total_coupons: 'மொத்த கூப்பன்கள்', active: 'செயலில்',
    contest_title: 'வேளாண் புத்தாக்கப் போட்டி', about: 'பற்றி', enter_contest: 'போட்டியில் பங்கேற்கவும்', my_entries: 'என் உள்ளீடுகள்',
    personal_details: 'தனிப்பட்ட விவரங்கள்', activity: 'செயல்பாடு', logout: 'வெளியேறு', acres: 'ஏக்கர்',
    gencrest_init: 'ஒரு ஜென்க்ரெஸ்ட் முயற்சி', nano_tech: 'வேளாண்மைக்கான நானோ தொழில்நுட்பம்',
    verify_otp: 'OTP சரிபார்க்கவும்', bill_desc: 'உங்கள் SKU ஐத் தேர்ந்தெடுக்கவும், அளவை உள்ளிட்டு உங்கள் பில் புகைப்படத்தைப் பதிவேற்றவும்.',
    contest_desc: 'உங்கள் விவசாய கண்டுபிடிப்புகளை வெளிப்படுத்தி அற்புதமான பரிசுகளை வெல்லுங்கள்!', submit_entry: 'உள்ளீட்டை சமர்ப்பி →',
    upload_video: 'வீடியோ பதிவேற்றவும்', innovation_title: 'கண்டுபிடிப்பு தலைப்பு', category: 'வகை', short_desc: 'குறுகிய விளக்கம்',
    euphoria_name: 'யூபோரியா (euPhoria)', euphoria_desc: 'மேம்பட்ட பயிர் வளர்ச்சிக்கான பயோ-ஸ்டிமுலண்ட்',
    kronoshield_name: 'க்ரோனோஷீல்ட் (KronoShield)', kronoshield_desc: 'மேம்பட்ட நானோ பயிர் பாதுகாப்பு',
    agrovita_name: 'அக்ரோவிடா (AgroVita)', agrovita_desc: 'நானோ-ஊட்டச்சத்து மண் மேம்படுத்தி',
    my_coupons_desc: 'நீங்கள் சம்பாதித்த அனைத்து கூப்பன்களையும் காண்க', contest_entries_desc: 'உங்கள் போட்டி உள்ளீடுகளைக் காண்க',
    covers: 'உள்ளடக்கியது', select_a_sku: 'கணக்கிட ஒரு SKU ஐத் தேர்ந்தெடுக்கவும்',
    redeemed: 'பயன்படுத்தப்பட்டது', submitted: 'சமர்ப்பிக்கப்பட்டது', under_review: 'மதிப்பாய்வில் உள்ளது', selected: 'தேர்ந்தெடுக்கப்பட்டது', winner: 'வெற்றியாளர்',
    no_entries: 'இதுவரை உள்ளீடுகள் இல்லை', no_entries_desc: 'போட்டியில் பங்கேற்க உங்கள் முதல் வேளாண்-கண்டுபிடிப்பு வீடியோவை சமர்ப்பிக்கவும்!'
  },
  te: { 
    register: 'నమోదు చేయండి', login: 'లాగిన్', welcome: 'తిరిగి స్వాగతం', submit: 'సమర్పించండి', 
    name: 'పూర్తి పేరు', mobile: 'మొబైల్ నంబర్', village: 'గ్రామం', state: 'రాష్ట్రం', 
    district: 'జిల్లా', taluka: 'తాలూకా', pincode: 'పిన్ కోడ్', home: 'హోమ్', 
    bills: 'బిల్లులు', coupons: 'కూపన్లు', contest: 'పోటీ', profile: 'ప్రొఫైల్',
    otp_title: 'OTP ధృవీకరణ', otp_sub: 'మేము కోడ్‌ను పంపాము', verify_login: 'ధృవీకరించి లాగిన్ చేయండి', resend: 'OTPని మళ్లీ పంపండి',
    products: 'ఉత్పత్తులు', offerings: 'మా ఉత్పత్తులు', quick_access: 'త్వరిత యాక్సెస్', quick_actions: 'త్వరిత చర్యలు',
    my_coupons: 'నా కూపన్లు', nayi_soch: 'నయీ సోచ్ పోటీ',
    submit_bill: 'బిల్లు సమర్పించండి', select_sku: 'SKU ఎంచుకోండి', qty: 'కొనుగోలు చేసిన పరిమాణం', upload_bill: 'బిల్ ఫోటోను అప్‌లోడ్ చేయండి', upload_sku: 'SKU ఫోటోను అప్‌లోడ్ చేయండి',
    total_coupons: 'మొత్తం కూపన్లు', active: 'క్రియాశీలం',
    contest_title: 'వ్యవసాయ ఆవిష్కరణల పోటీ', about: 'గురించి', enter_contest: 'పోటీలో పాల్గొనండి', my_entries: 'నా ఎంట్రీలు',
    personal_details: 'వ్యక్తిగత వివరాలు', activity: 'కార్యకలాపం', logout: 'లాగ్అవుట్', acres: 'ఎకరాలు',
    gencrest_init: 'ఒక జెన్‌క్రెస్ట్ చొరవ', nano_tech: 'వ్యవసాయం కోసం నానో-టెక్నాలజీ',
    verify_otp: 'OTP ధృవీకరించండి', bill_desc: 'మీ SKUని ఎంచుకోండి, పరిమాణాన్ని నమోదు చేయండి మరియు మీ బిల్లు ఫోటోను అప్‌లోడ్ చేయండి.',
    contest_desc: 'మీ వ్యవసాయ ఆవిష్కరణను ప్రదర్శించండి మరియు అద్భుతమైన బహుమతులు గెలుచుకోండి!', submit_entry: 'ఎంట్రీని సమర్పించండి →',
    upload_video: 'వీడియోను అప్‌లోడ్ చేయండి', innovation_title: 'ఆవిష్కరణ శీర్షిక', category: 'వర్గం', short_desc: 'చిన్న వివరణ',
    euphoria_name: 'యూఫోరియా (euPhoria)', euphoria_desc: 'మెరుగైన పంట వృద్ధి కోసం బయో-స్టిమ్యులెంట్',
    kronoshield_name: 'క్రోనోషీల్ಡ್ (KronoShield)', kronoshield_desc: 'అధునాతన నానో పంట రక్షణ',
    agrovita_name: 'ఆగ్రోవిటా (AgroVita)', agrovita_desc: 'నానో-న్యూట్రియెంట్ నేల పెంపుదల',
    my_coupons_desc: 'మీరు సంపాదించిన అన్ని కూపన్‌లను వీక్షించండి', contest_entries_desc: 'మీ పోటీ సమర్పణలను వీక్షించండి',
    covers: 'కవర్ చేస్తుంది', select_a_sku: 'లెక్కించడానికి SKU ఎంచుకోండి',
    redeemed: 'ఉపయోగించబడింది', submitted: 'సమర్పించబడింది', under_review: 'సమీక్షలో ఉంది', selected: 'ఎంపిక చేయబడింది', winner: 'విజేత',
    no_entries: 'ఇంకా ఎంట్రీలు లేవు', no_entries_desc: 'పోటీలో పాల్గొనడానికి మీ మొదటి వ్యవసాయ-ఆవిష్కరణ వీడియోను సమర్పించండి!'
  },
  kn: { 
    register: 'ನೋಂದಾಯಿಸಿ', login: 'ಲಾಗಿನ್', welcome: 'ಮರಳಿ ಸ್ವಾಗತ', submit: 'ಸಲ್ಲಿಸಿ', 
    name: 'ಪೂರ್ಣ ಹೆಸರು', mobile: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ', village: 'ಗ್ರಾಮ', state: 'ರಾಜ್ಯ', 
    district: 'ಜಿಲ್ಲೆ', taluka: 'ತಾಲೂಕು', pincode: 'ಪಿನ್ ಕೋಡ್', home: 'ಮುಖಪುಟ', 
    bills: 'ಬಿಲ್‌ಗಳು', coupons: 'ಕೂಪನ್‌ಗಳು', contest: 'ಸ್ಪರ್ಧೆ', profile: 'ಪ್ರೊಫೈಲ್',
    otp_title: 'OTP ಪರಿಶೀಲನೆ', otp_sub: 'ನಾವು ಕೋಡ್ ಕಳುಹಿಸಿದ್ದೇವೆ', verify_login: 'ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಲಾಗಿನ್ ಮಾಡಿ', resend: 'OTP ಮರುಕಳುಹಿಸಿ',
    products: 'ಉತ್ಪನ್ನಗಳು', offerings: 'ನಮ್ಮ ಕೊಡುಗೆಗಳು', quick_access: 'ತ್ವರಿತ ಪ್ರವೇಶ', quick_actions: 'ತ್ವರಿತ ಕ್ರಿಯೆಗಳು',
    my_coupons: 'ನನ್ನ ಕೂಪನ್‌ಗಳು', nayi_soch: 'ನಯೀ ಸೋಚ್ ಸ್ಪರ್ಧೆ',
    submit_bill: 'ಬಿಲ್ ಸಲ್ಲಿಸಿ', select_sku: 'SKU ಆಯ್ಕೆಮಾಡಿ', qty: 'ಖರೀದಿಸಿದ ಪ್ರಮಾಣ', upload_bill: 'ಬಿಲ್ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ', upload_sku: 'SKU ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    total_coupons: 'ಒಟ್ಟು ಕೂಪನ್‌ಗಳು', active: 'ಸಕ್ರಿಯ',
    contest_title: 'ಕೃಷಿ ನಾವೀನ್ಯತೆ ಸ್ಪರ್ಧೆ', about: 'ಬಗ್ಗೆ', enter_contest: 'ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ', my_entries: 'ನನ್ನ ನಮೂದುಗಳು',
    personal_details: 'ವೈಯಕ್ತಿಕ ವಿವರಗಳು', activity: 'ಚಟುವಟಿಕೆ', logout: 'ಲಾಗೌಟ್', acres: 'ಎಕರೆಗಳು',
    gencrest_init: 'ಒಂದು ಜೆನ್‌ಕ್ರೆಸ್ಟ್ ಉಪಕ್ರಮ', nano_tech: 'ಕೃಷಿಗಾಗಿ ನ್ಯಾನೊ-ತಂತ್ರಜ್ಞಾನ',
    verify_otp: 'OTP ಪರಿಶೀಲಿಸಿ', bill_desc: 'ನಿಮ್ಮ SKU ಆಯ್ಕೆಮಾಡಿ, ಪ್ರಮಾಣವನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಬಿಲ್ ಫೋಟೋವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ.',
    contest_desc: 'ನಿಮ್ಮ ಕೃಷಿ ನಾವೀನ್ಯತೆಯನ್ನು ಪ್ರದರ್ಶಿಸಿ ಮತ್ತು ಅತ್ಯಾಕರ್ಷಕ ಬಹುಮಾನಗಳನ್ನು ಗೆದ್ದಿರಿ!', submit_entry: 'ನಮೂದನ್ನು ಸಲ್ಲಿಸಿ →',
    upload_video: 'ವೀಡಿಯೊ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ', innovation_title: 'ನಾವೀನ್ಯತೆ ಶೀರ್ಷಿಕೆ', category: 'ವರ್ಗ', short_desc: 'ಸಣ್ಣ ವಿವರಣೆ',
    euphoria_name: 'ಯೂಫೋರಿಯಾ (euPhoria)', euphoria_desc: 'ವರ್ಧಿತ ಬೆಳೆ ಬೆಳವಣಿಗೆಗೆ ಬಯೋ-ಸ್ಟಿಮ್ಯುಲಂಟ್',
    kronoshield_name: 'ಕ್ರೊನೊಶೀಲ್ಡ್ (KronoShield)', kronoshield_desc: 'ಸುಧಾರಿತ ನ್ಯಾನೊ ಬೆಳೆ ರಕ್ಷಣೆ',
    agrovita_name: 'ಅಗ್ರೋವಿಟಾ (AgroVita)', agrovita_desc: 'ನ್ಯಾನೊ-ಪೋಷಕಾಂಶ ಮಣ್ಣು ವರ್ಧಕ',
    my_coupons_desc: 'ನೀವು ಗಳಿಸಿದ ಎಲ್ಲಾ ಕೂಪನ್‌ಗಳನ್ನು ವೀಕ್ಷಿಸಿ', contest_entries_desc: 'ನಿಮ್ಮ ಸ್ಪರ್ಧೆಯ ಸಲ್ಲಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    covers: 'ಒಳಗೊಳ್ಳುತ್ತದೆ', select_a_sku: 'ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು SKU ಆಯ್ಕೆಮಾಡಿ',
    redeemed: 'ರಿಡೀಮ್ ಮಾಡಲಾಗಿದೆ', submitted: 'ಸಲ್ಲಿಸಲಾಗಿದೆ', under_review: 'ಪರಿಶೀಲನೆಯಲ್ಲಿದೆ', selected: 'ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ', winner: 'ವಿಜೇತ',
    no_entries: 'ಇನ್ನೂ ಯಾವುದೇ ನಮೂದುಗಳಿಲ್ಲ', no_entries_desc: 'ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಭಾಗವಹಿಸಲು ನಿಮ್ಮ ಮೊದಲ ಕೃಷಿ-ನಾವೀನ್ಯತೆ ವೀಡಿಯೊವನ್ನು ಸಲ್ಲಿಸಿ!'
  },
  bn: { 
    register: 'নিবন্ধন করুন', login: 'লগইন', welcome: 'ফিরে আসার জন্য স্বাগতম', submit: 'জমা দিন', 
    name: 'পুরো নাম', mobile: 'মোবাইল নম্বর', village: 'গ্রাম', state: 'রাজ্য', 
    district: 'জেলা', taluka: 'তালুকা', pincode: 'পিন কোড', home: 'হোম', 
    bills: 'বিল', coupons: 'কুপন', contest: 'প্রতিযোগিতা', profile: 'প্রোফাইল',
    otp_title: 'OTP যাচাইকরণ', otp_sub: 'আমরা একটি কোড পাঠিয়েছি', verify_login: 'যাচাই করুন এবং লগইন করুন', resend: 'OTP পুনরায় পাঠান',
    products: 'পণ্য', offerings: 'আমাদের অফার', quick_access: 'দ্রুত অ্যাক্সেস', quick_actions: 'দ্রুত পদক্ষেপ',
    my_coupons: 'আমার কুপন', nayi_soch: 'নয়ী সোচ প্রতিযোগিতা',
    submit_bill: 'বিল জমা দিন', select_sku: 'SKU নির্বাচন করুন', qty: 'ক্রয়কৃত পরিমাণ', upload_bill: 'বিলের ছবি আপলোড করুন', upload_sku: 'SKU এর ছবি আপলোড করুন',
    total_coupons: 'মোট কুপন', active: 'সক্রিয়',
    contest_title: 'কৃষি উদ্ভাবন প্রতিযোগিতা', about: 'সম্পর্কে', enter_contest: 'প্রতিযোগিতায় অংশ নিন', my_entries: 'আমার এন্ট্রি',
    personal_details: 'ব্যক্তিগত বিবরণ', activity: 'কার্যকলাপ', logout: 'লগআউট', acres: 'একর',
    gencrest_init: 'একটি জেনক্রেস্ট উদ্যোগ', nano_tech: 'কৃষির জন্য ন্যানো-প্রযুক্তি',
    verify_otp: 'OTP যাচাই করুন', bill_desc: 'আপনার SKU নির্বাচন করুন, পরিমাণ লিখুন এবং আপনার বিলের ছবি আপলোড করুন।',
    contest_desc: 'আপনার কৃষি উদ্ভাবন প্রদর্শন করুন এবং উত্তেজনাপূর্ণ পুরস্কার জিতুন!', submit_entry: 'এন্ট্রি জমা দিন →',
    upload_video: 'ভিডিও আপলোড করুন', innovation_title: 'উদ্ভাবনের শিরোনাম', category: 'বিভাগ', short_desc: 'সংক্ষিপ্ত বিবরণ',
    euphoria_name: 'ইউফোরিয়া (euPhoria)', euphoria_desc: 'উন্নত ফসল বৃদ্ধির জন্য বায়ো-স্টিমুল্যান্ট',
    kronoshield_name: 'ক্রোনোশিল্ড (KronoShield)', kronoshield_desc: 'উন্নত ন্যানো ফসল সুরক্ষা',
    agrovita_name: 'অ্যাগ্রোভিটা (AgroVita)', agrovita_desc: 'ন্যানো-পুষ্টি মাটি বর্ধক',
    my_coupons_desc: 'আপনার অর্জিত সমস্ত কুপন দেখুন', contest_entries_desc: 'আপনার প্রতিযোগিতার জমা দেখুন',
    covers: 'কভার করে', select_a_sku: 'হিসাব করার জন্য একটি SKU নির্বাচন করুন',
    redeemed: 'রিডিম করা হয়েছে', submitted: 'জমা দেওয়া হয়েছে', under_review: 'পর্যালোচনাধীন', selected: 'নির্বাচিত', winner: 'বিজয়ী',
    no_entries: 'এখনও কোন এন্ট্রি নেই', no_entries_desc: 'প্রতিযোগিতায় অংশ নিতে আপনার প্রথম কৃষি-উদ্ভাবন ভিডিও জমা দিন!'
  },
  pa: { 
    register: 'ਰਜਿਸਟਰ ਕਰੋ', login: 'ਲੌਗਇਨ', welcome: 'ਵਾਪਸੀ ਤੇ ਸਵਾਗਤ ਹੈ', submit: 'ਜਮ੍ਹਾਂ ਕਰੋ', 
    name: 'ਪੂਰਾ ਨਾਮ', mobile: 'ਮੋਬਾਈਲ ਨੰਬਰ', village: 'ਪਿੰਡ', state: 'ਰਾਜ', 
    district: 'ਜ਼ਿਲ੍ਹਾ', taluka: 'ਤਾਲੁਕਾ', pincode: 'ਪਿੰਨ ਕੋਡ', home: 'ਹੋਮ', 
    bills: 'ਬਿੱਲ', coupons: 'ਕੂਪਨ', contest: 'ਮੁਕਾਬਲਾ', profile: 'ਪ੍ਰੋਫਾਈਲ',
    otp_title: 'OTP ਤਸਦੀਕ', otp_sub: 'ਅਸੀਂ ਇੱਕ ਕੋਡ ਭੇਜਿਆ ਹੈ', verify_login: 'ਤਸਦੀਕ ਕਰੋ ਅਤੇ ਲੌਗਇਨ ਕਰੋ', resend: 'OTP ਦੁਬਾਰਾ ਭੇਜੋ',
    products: 'ਉਤਪਾਦ', offerings: 'ਸਾਡੀਆਂ ਪੇਸ਼ਕਸ਼ਾਂ', quick_access: 'ਤੁਰੰਤ ਪਹੁੰਚ', quick_actions: 'ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ',
    my_coupons: 'ਮੇਰੇ ਕੂਪਨ', nayi_soch: 'ਨਵੀਂ ਸੋਚ ਮੁਕਾਬਲਾ',
    submit_bill: 'ਬਿੱਲ ਜਮ੍ਹਾਂ ਕਰੋ', select_sku: 'SKU ਚੁਣੋ', qty: 'ਖਰੀਦੀ ਗਈ ਮਾਤਰਾ', upload_bill: 'ਬਿੱਲ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ', upload_sku: 'SKU ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ',
    total_coupons: 'ਕੁੱਲ ਕੂਪਨ', active: 'ਸਰਗਰਮ',
    contest_title: 'ਖੇਤੀਬਾੜੀ ਨਵੀਨਤਾ ਮੁਕਾਬਲਾ', about: 'ਬਾਰੇ', enter_contest: 'ਮੁਕਾਬਲੇ ਵਿੱਚ ਭਾਗ ਲਓ', my_entries: 'ਮੇਰੀਆਂ ਐਂਟਰੀਆਂ',
    personal_details: 'ਨਿੱਜੀ ਵੇਰਵੇ', activity: 'ਗਤੀਵਿਧੀ', logout: 'ਲੌਗਆਉਟ', acres: 'ਏਕੜ',
    gencrest_init: 'ਇੱਕ ਜੇਨਕ੍ਰੈਸਟ ਪਹਿਲਕਦਮੀ', nano_tech: 'ਖੇਤੀਬਾੜੀ ਲਈ ਨੈਨੋ-ਤਕਨਾਲੋਜੀ',
    verify_otp: 'OTP ਤਸਦੀਕ ਕਰੋ', bill_desc: 'ਆਪਣਾ SKU ਚੁਣੋ, ਮਾਤਰਾ ਦਾਖਲ ਕਰੋ ਅਤੇ ਆਪਣੇ ਬਿੱਲ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ।',
    contest_desc: 'ਆਪਣੀ ਖੇਤੀ ਨਵੀਨਤਾ ਦਾ ਪ੍ਰਦਰਸ਼ਨ ਕਰੋ ਅਤੇ ਦਿਲਚਸਪ ਇਨਾਮ ਜਿੱਤੋ!', submit_entry: 'ਐਂਟਰੀ ਜਮ੍ਹਾਂ ਕਰੋ →',
    upload_video: 'ਵੀਡੀਓ ਅਪਲੋਡ ਕਰੋ', innovation_title: 'ਨਵੀਨਤਾ ਦਾ ਸਿਰਲੇਖ', category: 'ਸ਼੍ਰੇਣੀ', short_desc: 'ਛੋਟਾ ਵੇਰਵਾ',
    euphoria_name: 'ਯੂਫੋਰੀਆ (euPhoria)', euphoria_desc: 'ਵਧੀਆ ਫਸਲ ਦੇ ਵਾਧੇ ਲਈ ਬਾਇਓ-ਸਟੀਮੂਲੈਂਟ',
    kronoshield_name: 'ਕ੍ਰੋਨੋਸ਼ੀਲਡ (KronoShield)', kronoshield_desc: 'ਉੱਨਤ ਨੈਨੋ ਫਸਲ ਸੁਰੱਖਿਆ',
    agrovita_name: 'ਐਗਰੋਵਿਟਾ (AgroVita)', agrovita_desc: 'ਨੈਨੋ-ਪੋਸ਼ਟਿਕ ਮਿੱਟੀ ਵਧਾਉਣ ਵਾਲਾ',
    my_coupons_desc: 'ਆਪਣੇ ਸਾਰੇ ਕਮਾਏ ਕੂਪਨ ਦੇਖੋ', contest_entries_desc: 'ਆਪਣੀਆਂ ਮੁਕਾਬਲੇ ਦੀਆਂ ਐਂਟਰੀਆਂ ਦੇਖੋ',
    covers: 'ਕਵਰ ਕਰਦਾ ਹੈ', select_a_sku: 'ਗਣਨਾ ਕਰਨ ਲਈ ਇੱਕ SKU ਚੁਣੋ',
    redeemed: 'ਰੀਡੀਮ ਕੀਤਾ', submitted: 'ਜਮ੍ਹਾਂ ਕੀਤਾ ਗਿਆ', under_review: 'ਸਮੀਖਿਆ ਅਧੀਨ', selected: 'ਚੁਣਿਆ ਗਿਆ', winner: 'ਜੇਤੂ',
    no_entries: 'ਅਜੇ ਕੋਈ ਐਂਟਰੀ ਨਹੀਂ', no_entries_desc: 'ਮੁਕਾਬਲੇ ਵਿੱਚ ਭਾਗ ਲੈਣ ਲਈ ਆਪਣਾ ਪਹਿਲਾ ਖੇਤੀ-ਨਵੀਨਤਾ ਵੀਡੀਓ ਜਮ੍ਹਾਂ ਕਰੋ!'
  }
};

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
