// Kengaytirilgan va boyitilgan IT Atamalar bazasi
const terms = [
    { title: "API", definition: "Application Programming Interface — turli dasturiy ta'minotlar bir-biri bilan muloqot qilishini ta'minlovchi vosita." },
    { title: "DOM", definition: "Document Object Model — veb-sahifa elementlarini JavaScript orqali boshqarish uchun daraxtsimon interfeys." },
    { title: "HTML", definition: "HyperText Markup Language — veb-sahifaning asosiy skeleti va matnli tuzilmasini belgilovchi belgilash tili." },
    { title: "CSS", definition: "Cascading Style Sheets — veb-sahifaning ko'rinishi, rangi, shrifti va dizaynini bezatuvchi uslublar jadvali." },
    { title: "JavaScript", definition: "Veb-sahifalarga jonlilik, interaktivlik va murakkab mantiqiy funksiyalar qo'shuvchi dasturlash tili." },
    { title: "TypeScript", definition: "JavaScript tiliga tiplar (static typing) tizimini qo'shuvchi va yirik loyihalarda xatolarni kamaytiruvchi kengaytma." },
    { title: "Responsive Design", definition: "Veb-saytning barcha qurilmalar (telefon, planshet, kompyuter) ekraniga moslashuvchan dizayni." },
    { title: "Frontend", definition: "Foydalanuvchi ko'radigan va o'zaro aloqaga kirishadigan veb-saytning tashqi, vizual qismi." },
    { title: "Backend", definition: "Server, ma'lumotlar bazasi va biznes-mantiqni boshqaruvchi veb-saytning ichki qismi." },
    { title: "Full-Stack", definition: "Ham frontend, ham backend qismlarini birdek yoza oladigan dasturchi yoki loyiha yo'nalishi." },
    { title: "Single Page Application (SPA)", definition: "Barcha sahifalari bir martada yuklanadigan va kontent yangilanganda sahifani qayta yuklamaydigan veb-ilova (masalan: React ilovalari)." },
    { title: "Algorithm", definition: "Berilgan masalani hal qilish uchun bajariladigan aniq va mantiqiy qadamlar ketma-ketligi." },
    { title: "Variable (O'zgaruvchi)", definition: "Xotirada ma'lumot saqlash uchun ajratilgan va nomi bor maxsus joy." },
    { title: "Function (Funksiya)", definition: "Muayyan vazifani bajarish uchun mo'ljallangan va qayta ishlatilishi mumkin bo'lgan kod bloki." },
    { title: "Array (Massiv)", definition: "Bir nechta qiymat yoki ma'lumotlarni tartiblangan ro'yxat ko'rinishida saqlovchi struktura." },
    { title: "Object (Ob'ekt)", definition: "Kalit va qiymat (key-value) juftliklaridan tashkil topgan murakkab ma'lumot strukturasi." },
    { title: "Loop (Tskil / Takrorlanish)", definition: "Shart bajarilguncha ma'lum kod blokini qayta-qayta ishga tushiruvchi buyruq (for, while)." },
    { title: "OOP", definition: "Object-Oriented Programming — kodni ob'ektlar va sinflar (class) atrofida guruhlab yozish metodologiyasi." },
    { title: "Git", definition: "Kodlar tarixini saqlash va jamoa bo'lib ishlash uchun mo'ljallangan versiyalarni boshqarish tizimi." },
    { title: "GitHub", definition: "Git repozitoriyalarini bulutda saqlash va jamoaviy ishlash imkonini beruvchi eng ommabop platforma." },
    { title: "Commit", definition: "Git tizimida koddagi o'zgarishlarni ma'lum bir vaqt nuqtasida saqlab qo'yish amali." },
    { title: "Branch (Shox)", definition: "Asosiy kodga ta'sir qilmagan holda yangi funksionallik ustida alohida ishlash uchun ajratilgan versiya liniyasi." },
    { title: "CLI", definition: "Command Line Interface — matnli buyruqlar yordamida kompyuter yoki dasturlarni boshqarish konsoli." },
    { title: "NPM", definition: "Node Package Manager — JavaScript uchun mo'ljallangan tayyor kutubxonalar va paketlar menejeri." },
    { title: "Database (Ma'lumotlar bazasi)", definition: "Ma'lumotlarni tartibli saqlash, o'qish va o'zgartirish uchun mo'ljallangan tizim." },
    { title: "SQL", definition: "Relatsion (jadvalli) ma'lumotlar bazalari bilan ishlash uchun mo'ljallangan so'rov tili (MySQL, PostgreSQL)." },
    { title: "NoSQL", definition: "Jadvallarsiz, hujjat yoki kalit-qiymat shaklida ma'lumot saqlaydigan baza turi (masalan: MongoDB)." },
    { title: "JSON", definition: "JavaScript Object Notation — ma'lumotlarni yengil formatda saqlash va serverlar o'rtasida almashish standarti." },
    { title: "REST API", definition: "HTTP so'rovlari (GET, POST, PUT, DELETE) orqali ma'lumot almashishni tartibga soluvchi me'moriy uslub." },
    { title: "AJAX / Fetch API", definition: "Sahifani qayta yuklamagan holda serverdan ma'lumot olish yoki yuborish texnologiyasi." },
    { title: "Bug", definition: "Dastur kodidagi xatolik yoki kutilmagan ishlamay qolish holati." },
    { title: "Debugging", definition: "Dasturdagi xatoliklar (bug'larni) topish va ularni bartaraf etish jarayoni." },
    { title: "Local Storage", definition: "Ma'lumotlarni foydalanuvchi brauzerida vaqt cheklovisiz saqlab qolish imkoniyati." },
    { title: "Cookie", definition: "Foydalanuvchi va seans haqidagi kichik ma'lumotlarni brauzerda vaqtincha saqlash fayli." },
    { title: "Framework", definition: "Dasturlashni tezlashtirish va tartibga solish uchun mo'ljallangan tayyor karkas va kutubxonalar to'plami (React, Vue, Django)." },
    { title: "Docker", definition: "Dastur va uning barcha bog'liqliklarini alohida konteynerda izolyatsiyalangan holda ishga tushirish quroli." },
    { title: "Deployment", definition: "Yozilgan dastur yoki saytni foydalanuvchilar kirishi uchun serverga joylash jarayoni." },
    { title: "CI/CD", definition: "Continuous Integration / Continuous Deployment — kodni avtomatik testlash va serverga uzluksiz joylab borish amaliyoti." },
    { title: "SSL / HTTPS", definition: "Veb-sayt va foydalanuvchi o'rtasidagi ma'lumotlar almashinuvini shifrlab, xavfsizlikni ta'minlovchi protokol." }
];

const termsContainer = document.getElementById('termsContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentCategory = 'all'; // Boshlang'ich kategoriya

// Atamentalarni ekranga chiqarish funksiyasi
function displayTerms(items) {
    termsContainer.innerHTML = '';
    
    if (items.length === 0) {
        termsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d;">Hech qanday atama topilmadi...</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('term-card');
        
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.definition}</p>
        `;
        
        termsContainer.appendChild(card);
    });
}

// Filtrlash va qidiruvni birgalikda boshqarish funksiyasi
function filterAndDisplay() {
    const searchText = searchInput.value.toLowerCase();
    
    const filtered = terms.filter(item => {
        // Kategoriya mos kelishini tekshirish
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        
        // Qidiruv matni mos kelishini tekshirish
        const matchesSearch = item.title.toLowerCase().includes(searchText) || 
                              item.definition.toLowerCase().includes(searchText);
                              
        return matchesCategory && matchesSearch;
    });
    
    displayTerms(filtered);
}

// Boshlang'ich yuklash
displayTerms(terms);

// Qidiruv inputiga hodisa qo'shish
searchInput.addEventListener('input', filterAndDisplay);

// Kategoriya tugmalariga hodisa qo'shish
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Faol klassni o'zgartirish
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        // Joriy kategoriyani yangilash va filtrlash
        currentCategory = e.target.getAttribute('data-category');
        filterAndDisplay();
    });
});
