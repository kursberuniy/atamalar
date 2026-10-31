// Kategoriyalarga moslashtirilgan, buyruq va havolalar bilan boyitilgan to'liq IT Atamalar bazasi
const terms = [
    { 
        title: "API", 
        category: "backend", 
        definition: "Application Programming Interface — turli dasturiy ta'minotlar bir-biri bilan muloqot qilishini ta'minlovchi vosita.",
        command: "fetch('https://api.example.com/data')\n  .then(response => response.json());",
        link: "https://developer.mozilla.org/en-US/docs/Web/API"
    },
    { 
        title: "DOM", 
        category: "frontend", 
        definition: "Document Object Model — veb-sahifa elementlarini JavaScript orqali boshqarish uchun daraxtsimon interfeys.",
        command: "const element = document.getElementById('myId');\nelement.style.color = 'blue';",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
    },
    { 
        title: "HTML", 
        category: "frontend", 
        definition: "HyperText Markup Language — veb-sahifaning asosiy skeleti va matnli tuzilmasini belgilovchi belgilash tili.",
        command: "<!DOCTYPE html>\n<html>\n  <head><title>Sahifa</title></head>\n  <body><h1>Salom</h1></body>\n</html>",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    { 
        title: "CSS", 
        category: "frontend", 
        definition: "Cascading Style Sheets — veb-sahifaning ko'rinishi, rangi, shrifti va dizaynini bezatuvchi uslublar jadvali.",
        command: "body {\n  background-color: #f4f7f6;\n  color: #333;\n}",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    { 
        title: "JavaScript", 
        category: "frontend", 
        definition: "Veb-sahifalarga jonlilik, interaktivlik va murakkab mantiqiy funksiyalar qo'shuvchi dasturlash tili.",
        command: "const greet = (name) => `Salom, ${name}!`;\nconsole.log(greet('Dasturchi'));",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    { 
        title: "TypeScript", 
        category: "frontend", 
        definition: "JavaScript tiliga tiplar (static typing) tizimini qo'shuvchi va yirik loyihalarda xatolarni kamaytiruvchi kengaytma.",
        command: "let username: string = 'Ali';\nfunction sum(a: number, b: number): number { return a + b; }",
        link: "https://www.typescriptlang.org/docs/"
    },
    { 
        title: "Responsive Design", 
        category: "frontend", 
        definition: "Veb-saytning barcha qurilmalar (telefon, planshet, kompyuter) ekraniga moslashuvchan dizayni.",
        command: "@media (max-width: 768px) {\n  .container { padding: 10px; }\n}",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
    },
    { 
        title: "Frontend", 
        category: "frontend", 
        definition: "Foydalanuvchi ko'radigan va o'zaro aloqaga kirishadigan veb-saytning tashqi, vizual qismi.",
        command: "npx create-react-app my-app\nnpm run start",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer"
    },
    { 
        title: "Backend", 
        category: "backend", 
        definition: "Server, ma'lumotlar bazasi va biznes-mantiqni boshqaruvchi veb-saytning ichki qismi.",
        command: "const express = require('express');\nconst app = express();\napp.listen(3000);",
        link: "https://nodejs.org/en/docs/"
    },
    { 
        title: "Full-Stack", 
        category: "backend", 
        definition: "Ham frontend, ham backend qismlarini birdek yoza oladigan dasturchi yoki loyiha yo'nalishi.",
        command: "// Frontend + Backend integratsiyasi\nnpm run dev",
        link: "https://roadmap.sh/full-stack"
    },
    { 
        title: "Single Page Application (SPA)", 
        category: "frontend", 
        definition: "Barcha sahifalari bir martada yuklanadigan va kontent yangilanganda sahifani qayta yuklamaydigan veb-ilova (masalan: React ilovalari).",
        command: "import { BrowserRouter, Routes, Route } from 'react-router-dom';",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/SPA"
    },
    { 
        title: "Algorithm", 
        category: "general", 
        definition: "Berilgan masalani hal qilish uchun bajariladigan aniq va mantiqiy qadamlar ketma-ketligi.",
        command: "function findMax(arr) {\n  return Math.max(...arr);\n}",
        link: "https://en.wikipedia.org/wiki/Algorithm"
    },
    { 
        title: "Variable (O'zgaruvchi)", 
        category: "general", 
        definition: "Xotirada ma'lumot saqlash uchun ajratilgan va nomi bor maxsus joy.",
        command: "let score = 100;\nconst appName = 'IT Dictionary';",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables"
    },
    { 
        title: "Function (Funksiya)", 
        category: "general", 
        definition: "Muayyan vazifani bajarish uchun mo'ljallangan va qayta ishlatilishi mumkin bo'lgan kod bloki.",
        command: "function calculateTax(amount) {\n  return amount * 0.12;\n}",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
    },
    { 
        title: "Array (Massiv)", 
        category: "general", 
        definition: "Bir nechta qiymat yoki ma'lumotlarni tartiblangan ro'yxat ko'rinishida saqlovchi struktura.",
        command: "const languages = ['HTML', 'CSS', 'JavaScript'];\nlanguages.push('Python');",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
    },
    { 
        title: "Object (Ob'ekt)", 
        category: "general", 
        definition: "Kalit va qiymat (key-value) juftliklaridan tashkil topgan murakkab ma'lumot strukturasi.",
        command: "const user = {\n  name: 'Bekzod',\n  role: 'Frontend Developer'\n};",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
    },
    { 
        title: "Loop (Tskil / Takrorlanish)", 
        category: "general", 
        definition: "Shart bajarilguncha ma'lum kod blokini qayta-qayta ishga tushiruvchi buyruq (for, while).",
        command: "for (let i = 1; i <= 5; i++) {\n  console.log(`Qadam: ${i}`);\n}",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration"
    },
    { 
        title: "OOP", 
        category: "general", 
        definition: "Object-Oriented Programming — kodni ob'ektlar va sinflar (class) atrofida guruhlab yozish metodologiyasi.",
        command: "class Car {\n  constructor(brand) { this.brand = brand; }\n}",
        link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming"
    },
    { 
        title: "Git", 
        category: "git", 
        definition: "Kodlar tarixini saqlash va jamoa bo'lib ishlash uchun mo'ljallangan versiyalarni boshqarish tizimi.",
        command: "git init\ngit status\ngit log --oneline",
        link: "https://git-scm.com/doc"
    },
    { 
        title: "GitHub", 
        category: "git", 
        definition: "Git repozitoriyalarini bulutda saqlash va jamoaviy ishlash imkonini beruvchi eng ommabop platforma.",
        command: "git remote add origin <repository-url>\ngit push -u origin main",
        link: "https://github.com"
    },
    { 
        title: "Commit", 
        category: "git", 
        definition: "Git tizimida koddagi o'zgarishlarni ma'lum bir vaqt nuqtasida saqlab qo'yish amali.",
        command: "git add .\ngit commit -m 'feat: add flashcard feature'",
        link: "https://git-scm.com/docs/git-commit"
    },
    { 
        title: "Branch (Shox)", 
        category: "git", 
        definition: "Asosiy kodga ta'sir qilmagan holda yangi funksionallik ustida alohida ishlash uchun ajratilgan versiya liniyasi.",
        command: "git checkout -b feature/dark-mode\ngit branch",
        link: "https://git-scm.com/docs/git-branch"
    },
    { 
        title: "CLI", 
        category: "git", 
        definition: "Command Line Interface — matnli buyruqlar yordamida kompyuter yoki dasturlarni boshqarish konsoli.",
        command: "cd folder_name\nmkdir new_folder\nls -la",
        link: "https://en.wikipedia.org/wiki/Command-line_interface"
    },
    { 
        title: "NPM", 
        category: "git", 
        definition: "Node Package Manager — JavaScript uchun mo'ljallangan tayyor kutubxonalar va paketlar menejeri.",
        command: "npm init -y\nnpm install axios",
        link: "https://www.npmjs.com"
    },
    { 
        title: "Database (Ma'lumotlar bazasi)", 
        category: "database", 
        definition: "Ma'lumotlarni tartibli saqlash, o'qish va o'zgartirish uchun mo'ljallangan tizim.",
        command: "CREATE DATABASE it_dictionary;\nSHOW DATABASES;",
        link: "https://www.postgresql.org/docs/"
    },
    { 
        title: "SQL", 
        category: "database", 
        definition: "Relatsion (jadvalli) ma'lumotlar bazalari bilan ishlash uchun mo'ljallangan so'rov tili (MySQL, PostgreSQL).",
        command: "SELECT * FROM users WHERE age > 18 ORDER BY name DESC;",
        link: "https://www.w3schools.com/sql/"
    },
    { 
        title: "NoSQL", 
        category: "database", 
        definition: "Jadvallarsiz, hujjat yoki kalit-qiymat shaklida ma'lumot saqlaydigan baza turi (masalan: MongoDB).",
        command: "db.users.insertOne({ name: 'Ali', role: 'admin' });",
        link: "https://www.mongodb.com/docs/"
    },
    { 
        title: "JSON", 
        category: "backend", 
        definition: "JavaScript Object Notation — ma'lumotlarni yengil formatda saqlash va serverlar o'rtasida almashish standarti.",
        command: "const jsonStr = JSON.stringify({ id: 1 });\nconst obj = JSON.parse(jsonStr);",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON"
    },
    { 
        title: "REST API", 
        category: "backend", 
        definition: "HTTP so'rovlari (GET, POST, PUT, DELETE) orqali ma'lumot almashishni tartibga soluvchi me'moriy uslub.",
        command: "app.get('/api/items', (req, res) => {\n  res.json(items);\n});",
        link: "https://restfulapi.net/"
    },
    { 
        title: "AJAX / Fetch API", 
        category: "frontend", 
        definition: "Sahifani qayta yuklamagan holda serverdan ma'lumot olish yoki yuborish texnologiyasi.",
        command: "async function getData() {\n  const res = await fetch('/api');\n  const data = await res.json();\n}",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
    },
    { 
        title: "Bug", 
        category: "general", 
        definition: "Dastur kodidagi xatolik yoki kutilmagan ishlamay qolish holati.",
        command: "console.error('Uncaught ReferenceError: x is not defined');",
        link: "https://en.wikipedia.org/wiki/Software_bug"
    },
    { 
        title: "Debugging", 
        category: "general", 
        definition: "Dasturdagi xatoliklar (bug'larni) topish va ularni bartaraf etish jarayoni.",
        command: "debugger;\nconsole.log('Qiymat:', variable);",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger"
    },
    { 
        title: "Local Storage", 
        category: "frontend", 
        definition: "Ma'lumotlarni foydalanuvchi brauzerida vaqt cheklovisiz saqlab qolish imkoniyati.",
        command: "localStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');",
        link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
    },
    { 
        title: "Cookie", 
        category: "backend", 
        definition: "Foydalanuvchi va seans haqidagi kichik ma'lumotlarni brauzerda vaqtincha saqlash fayli.",
        command: "document.cookie = 'user=JohnDoe; max-age=3600; path=/';",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"
    },
    { 
        title: "Framework", 
        category: "general", 
        definition: "Dasturlashni tezlashtirish va tartibga solish uchun mo'ljallangan tayyor karkas va kutubxonalar to'plami (React, Vue, Django).",
        command: "npx create-vite@latest my-vue-app -- --template vue\ncd my-vue-app",
        link: "https://react.dev/"
    },
    { 
        title: "Docker", 
        category: "backend", 
        definition: "Dastur va uning barcha bog'liqliklarini alohida konteynerda izolyatsiyalangan holda ishga tushirish quroli.",
        command: "docker build -t my-app .\ndocker run -d -p 8080:80 my-app",
        link: "https://docs.docker.com"
    },
    { 
        title: "Deployment", 
        category: "backend", 
        definition: "Yozilgan dastur yoki saytni foydalanuvchilar kirishi uchun serverga joylash jarayoni.",
        command: "npm run build\nvercel --prod",
        link: "https://vercel.com/docs"
    },
    { 
        title: "CI/CD", 
        category: "backend", 
        definition: "Continuous Integration / Continuous Deployment — kodni avtomatik testlash va serverga uzluksiz joylab borish amaliyoti.",
        command: "git push origin main # GitHub Actions orqali avtomatik ishga tushadi",
        link: "https://github.com/features/actions"
    },
    { 
        title: "SSL / HTTPS", 
        category: "backend", 
        definition: "Veb-sayt va foydalanuvchi o'rtasidagi ma'lumotlar almashinuvini shifrlab, xavfsizlikni ta'minlovchi protokol.",
        command: "sudo certbot --nginx -d example.com",
        link: "https://developer.mozilla.org/en-US/docs/Web/Security"
    }
];

const termsContainer = document.getElementById('termsContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modeToggleBtn = document.getElementById('modeToggleBtn');

let currentCategory = 'all';
let isFlashcardMode = false;

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
    
    filterAndDisplay();
});

// Atamentalarni ekranga chiqarish funksiyasi
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
                    });
                } else {
                    card.classList.add('flipped');
                }
                e.stopPropagation();
            });

        } else {
            // --- ODDIY REJIM (Accordion bilan) ---
            card.classList.add('term-card');
            
            // Qo'shimcha kod va link mavjudligiga qarab tugma hosil qilish
            const hasExtra = item.command || item.link;
            const extraBtnHTML = hasExtra 
                ? `<button class="expand-btn">💻 Buyruqlar va havolalar 👇</button>` 
                : '';

            const commandBlock = item.command 
                ? `<div class="code-block"><pre><code>${item.command}</code></pre></div>` 
                : '';

            const linkBlock = item.link 
                ? `<a href="${item.link}" target="_blank" class="doc-link">🌐 Rasmiy hujjatlar (Docs) 🔗</a>` 
                : '';

            card.innerHTML = `
                <div class="card-main">
                    <h3>${item.title}</h3>
                    <p>${item.definition}</p>
                    <span class="copy-hint">📋 Nusxalash uchun bosing</span>
                </div>
                ${extraBtnHTML}
                <div class="card-details">
                    ${commandBlock}
                    ${linkBlock}
                </div>
            `;
            
            const cardMain = card.querySelector('.card-main');
            const expandBtn = card.querySelector('.expand-btn');
            const cardDetails = card.querySelector('.card-details');

            // Asosiy kartaga bosilganda atamani nusxalash
            cardMain.addEventListener('click', () => {
                const textToCopy = `${item.title}: ${item.definition}`;
                
                navigator.clipboard.writeText(textToCopy).then(() => {
                    card.classList.add('copied');
                    const hint = card.querySelector('.copy-hint');
                    hint.textContent = '✅ Nusxalandi!';
                    
                    setTimeout(() => {
                        card.classList.remove('copied');
                        hint.textContent = '📋 Nusxalash uchun bosing';
                    }, 1500);
                });
            });

            // Buyruqlar tugmasi bosilganda pastga yoyilish (Accordion)
            if (expandBtn) {
                expandBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Kartochka nusxalanib ketmasligi uchun
                    
                    const isOpen = cardDetails.classList.contains('open');
                    
                    if (isOpen) {
                        cardDetails.classList.remove('open');
                        expandBtn.textContent = '💻 Buyruqlar va havolalar 👇';
                        expandBtn.classList.remove('active');
                    } else {
                        cardDetails.classList.add('open');
                        expandBtn.textContent = '🔼 Yopish';
                        expandBtn.classList.add('active');
                    }
                });
            }
        }
        
        termsContainer.appendChild(card);
    });
}

// Filtrlash va qidiruv mantiqi
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

searchInput.addEventListener('input', filterAndDisplay);

filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        currentCategory = e.target.getAttribute('data-category');
        filterAndDisplay();
    });
});
