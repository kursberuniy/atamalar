// Kategoriyalarga moslashtirilgan to'liq IT Atamalar bazasi
const terms = [
    { title: "API", category: "backend", definition: "Application Programming Interface — turli dasturiy ta'minotlar bir-biri bilan muloqot qilishini ta'minlovchi vosita." },
    { title: "DOM", category: "frontend", definition: "Document Object Model — veb-sahifa elementlarini JavaScript orqali boshqarish uchun daraxtsimon interfeys." },
    { title: "HTML", category: "frontend", definition: "HyperText Markup Language — veb-sahifaning asosiy skeleti va matnli tuzilmasini belgilovchi belgilash tili." },
    { title: "CSS", category: "frontend", definition: "Cascading Style Sheets — veb-sahifaning ko'rinishi, rangi, shrifti va dizaynini bezatuvchi uslublar jadvali." },
    { title: "JavaScript", category: "frontend", definition: "Veb-sahifalarga jonlilik, interaktivlik va murakkab mantiqiy funksiyalar qo'shuvchi dasturlash tili." },
    { title: "TypeScript", category: "frontend", definition: "JavaScript tiliga tiplar (static typing) tizimini qo'shuvchi va yirik loyihalarda xatolarni kamaytiruvchi kengaytma." },
    { title: "Responsive Design", category: "frontend", definition: "Veb-saytning barcha qurilmalar (telefon, planshet, kompyuter) ekraniga moslashuvchan dizayni." },
    { title: "Frontend", category: "frontend", definition: "Foydalanuvchi ko'radigan va o'zaro aloqaga kirishadigan veb-saytning tashqi, vizual qismi." },
    { title: "Backend", category: "backend", definition: "Server, ma'lumotlar bazasi va biznes-mantiqni boshqaruvchi veb-saytning ichki qismi." },
    { title: "Full-Stack", category: "backend", definition: "Ham frontend, ham backend qismlarini birdek yoza oladigan dasturchi yoki loyiha yo'nalishi." },
    { title: "Single Page Application (SPA)", category: "frontend", definition: "Barcha sahifalari bir martada yuklanadigan va kontent yangilanganda sahifani qayta yuklamaydigan veb-ilova (masalan: React ilovalari)." },
    { title: "Algorithm", category: "general", definition: "Berilgan masalani hal qilish uchun bajariladigan aniq va mantiqiy qadamlar ketma-ketligi." },
    { title: "Variable (O'zgaruvchi)", category: "general", definition: "Xotirada ma'lumot saqlash uchun ajratilgan va nomi bor maxsus joy." },
    { title: "Function (Funksiya)", category: "general", definition: "Muayyan vazifani bajarish uchun mo'ljallangan va qayta ishlatilishi mumkin bo'lgan kod bloki." },
    { title: "Array (Massiv)", category: "general", definition: "Bir nechta qiymat yoki ma'lumotlarni tartiblangan ro'yxat ko'rinishida saqlovchi struktura." },
    { title: "Object (Ob'ekt)", category: "general", definition: "Kalit va qiymat (key-value) juftliklaridan tashkil topgan murakkab ma'lumot strukturasi." },
    { title: "Loop (Tskil / Takrorlanish)", category: "general", definition: "Shart bajarilguncha ma'lum kod blokini qayta-qayta ishga tushiruvchi buyruq (for, while)." },
    { title: "OOP", category: "general", definition: "Object-Oriented Programming — kodni ob'ektlar va sinflar (class) atrofida guruhlab yozish metodologiyasi." },
    { title: "Git", category: "git", definition: "Kodlar tarixini saqlash va jamoa bo'lib ishlash uchun mo'ljallangan versiyalarni boshqarish tizimi." },
    { title: "GitHub", category: "git", definition: "Git repozitoriyalarini bulutda saqlash va jamoaviy ishlash imkonini beruvchi eng ommabop platforma." },
    { title: "Commit", category: "git", definition: "Git tizimida koddagi o'zgarishlarni ma'lum bir vaqt nuqtasida saqlab qo'yish amali." },
    { title: "Branch (Shox)", category: "git", definition: "Asosiy kodga ta'sir qilmagan holda yangi funksionallik ustida alohida ishlash uchun ajratilgan versiya liniyasi." },
    { title: "CLI", category: "git", definition: "Command Line Interface — matnli buyruqlar yordamida kompyuter yoki dasturlarni boshqarish konsoli." },
    { title: "NPM", category: "git", definition: "Node Package Manager — JavaScript uchun mo'ljallangan tayyor kutubxonalar va paketlar menejeri." },
    { title: "Database (Ma'lumotlar bazasi)", category: "database", definition: "Ma'lumotlarni tartibli saqlash, o'qish va o'zgartirish uchun mo'ljallangan tizim." },
    { title: "SQL", category: "database", definition: "Relatsion (jadvalli) ma'lumotlar bazalari bilan ishlash uchun mo'ljallangan so'rov tili (MySQL, PostgreSQL)." },
    { title: "NoSQL", category: "database", definition: "Jadvallarsiz, hujjat yoki kalit-qiymat shaklida ma'lumot saqlaydigan baza turi (masalan: MongoDB)." },
    { title: "JSON", category: "backend", definition: "JavaScript Object Notation — ma'lumotlarni yengil formatda saqlash va serverlar o'rtasida almashish standarti." },
    { title: "REST API", category: "backend", definition: "HTTP so'rovlari (GET, POST, PUT, DELETE) orqali ma'lumot almashishni tartibga soluvchi me'moriy uslub." },
    { title: "AJAX / Fetch API", category: "frontend", definition: "Sahifani qayta yuklamagan holda serverdan ma'lumot olish yoki yuborish texnologiyasi." },
    { title: "Bug", category: "general", definition: "Dastur kodidagi xatolik yoki kutilmagan ishlamay qolish holati." },
    { title: "Debugging", category: "general", definition: "Dasturdagi xatoliklar (bug'larni) topish va ularni bartaraf etish jarayoni." },
    { title: "Local Storage", category: "frontend", definition: "Ma'lumotlarni foydalanuvchi brauzerida vaqt cheklovisiz saqlab qolish imkoniyati." },
    { title: "Cookie", category: "backend", definition: "Foydalanuvchi va seans haqidagi kichik ma'lumotlarni brauzerda vaqtincha saqlash fayli." },
    { title: "Framework", category: "general", definition: "Dasturlashni tezlashtirish va tartibga solish uchun mo'ljallangan tayyor karkas va kutubxonalar to'plami (React, Vue, Django)." },
    { title: "Docker", category: "backend", definition: "Dastur va uning barcha bog'liqliklarini alohida konteynerda izolyatsiyalangan holda ishga tushirish quroli." },
    { title: "Deployment", category: "backend", definition: "Yozilgan dastur yoki saytni foydalanuvchilar kirishi uchun serverga joylash jarayoni." },
    { title: "CI/CD", category: "backend", definition: "Continuous Integration / Continuous Deployment — kodni avtomatik testlash va serverga uzluksiz joylab borish amaliyoti." },
    { title: "SSL / HTTPS", category: "backend", definition: "Veb-sayt va foydalanuvchi o'rtasidagi ma'lumotlar almashinuvini shifrlab, xavfsizlikni ta'minlovchi protokol." }
];

const termsContainer = document.getElementById('termsContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modeToggleBtn = document.getElementById('modeToggleBtn');

let currentCategory = 'all'; // Boshlang'ich kategoriya
let isFlashcardMode = false; // Boshlanishiga oddiy rejim

// Rejimni o'zgartirish tugmasi hodisasi
modeToggleBtn.addEventListener('click', () => {
    isFlashcardMode = !isFlashcardMode;
    
    if (isFlashcardMode) {
        modeToggleBtn.textContent = "📋 Oddiy Rejimga Qaytish";
        modeToggleBtn.style.backgroundColor = "#2980b9";
    } else {
        modeToggleBtn.textContent = "🔄 Flashcard Rejimiga O'tish";
        modeToggleBtn.style.backgroundColor = "#27ae60";
    }
    
    filterAndDisplay(); // Ro'yxatni yangi rejimda qaytadan chizish
});

// Atamentalarni ekranga chiqarish funksiyasi (Flashcard yoki Oddiy rejim)
function displayTerms(items) {
    termsContainer.innerHTML = '';
    
    if (items.length === 0) {
        termsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d;">Hech qanday atama topilmadi...</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div');
        
        if (isFlashcardMode) {
            // --- FLASHCARD REJIMI ---
            card.classList.add('term-card', 'flashcard');
            
            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <h3>${item.title}</h3>
                        <span class="card-hint">🔄 O'girish uchun bosing</span>
                    </div>
                    <div class="card-back">
                        <p><strong>${item.title}:</strong> ${item.definition}</p>
                        <span class="copy-action">📋 Nusxalash uchun bosing</span>
                    </div>
                </div>
            `;
            
            const cardBack = card.querySelector('.card-back');
            const copyAction = card.querySelector('.copy-action');

            // Kartochkaga bosganda o'girish yoki nusxalash
            card.addEventListener('click', (e) => {
                if (card.classList.contains('flipped')) {
                    const textToCopy = `${item.title}: ${item.definition}`;
                    
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        cardBack.classList.add('copied-back');
                        copyAction.textContent = '✅ Nusxalandi!';
                        
                        setTimeout(() => {
                            cardBack.classList.remove('copied-back');
                            copyAction.textContent = '📋 Nusxalash uchun bosing';
                        }, 1500);
                    }).catch(err => {
                        console.error('Nusxalashda xatolik:', err);
                    });
                } else {
                    card.classList.add('flipped');
                }
                
                e.stopPropagation();
            });

        } else {
            // --- ODDIY REJIM ---
            card.classList.add('term-card');
            
            card.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.definition}</p>
                <span class="copy-hint">📋 Nusxalash uchun bosing</span>
            `;
            
            card.addEventListener('click', () => {
                const textToCopy = `${item.title}: ${item.definition}`;
                
                navigator.clipboard.writeText(textToCopy).then(() => {
                    card.classList.add('copied');
                    const hint = card.querySelector('.copy-hint');
                    hint.textContent = '✅ Nusxalandi!';
                    
                    setTimeout(() => {
                        card.classList.remove('copied');
                        hint.textContent = '📋 Nusxalash uchun bosing';
                    }, 1500);
                }).catch(err => {
                    console.error('Nusxalashda xatolik:', err);
                });
            });
        }
        
        termsContainer.appendChild(card);
    });
}

// Filtrlash va qidiruvni birgalikda boshqarish funksiyasi
function filterAndDisplay() {
    const searchText = searchInput.value.toLowerCase();
    
    const filtered = terms.filter(item => {
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesSearch = item.title.toLowerCase().includes(searchText) || 
                              item.definition.toLowerCase().includes(searchText);
                              
        return matchesCategory && matchesSearch;
    });
    
    displayTerms(filtered);
}

// Boshlang'ich yuklash
filterAndDisplay();

// Qidiruv inputiga hodisa qo'shish
searchInput.addEventListener('input', filterAndDisplay);

// Kategoriya tugmalariga hodisa qo'shish
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentCategory = e.target.getAttribute('data-category');
        filterAndDisplay();
    });
});
