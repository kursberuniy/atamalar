// Dastlabki atamalar bazasi
const terms = [
    { title: "API", definition: "Application Programming Interface — turli dasturiy ta'minotlar bir-biri bilan muloqot qilishini ta'minlovchi vosita." },
    { title: "DOM", definition: "Document Object Model — veb-sahifa elementlarini JavaScript orqali boshqarish uchun daraxtsimon interfeys." },
    { title: "Git", definition: "Kodlar tarixini saqlash va jamoa bo'lib ishlash uchun mo'ljallangan versiyalarni boshqarish tizimi." },
    { title: "Responsive Design", definition: "Veb-saytning barcha qurilmalar (telefon, planshet, kompyuter) ekraniga moslashuvchan dizayni." },
    { title: "Frontend", definition: "Foydalanuvchi ko'radigan va o'zaro aloqaga kirishadigan veb-saytning tashqi qismi." },
    { title: "Backend", definition: "Server, ma'lumotlar bazasi va biznes-mantiqni boshqaruvchi veb-saytning ichki qismi." }
];

const termsContainer = document.getElementById('termsContainer');
const searchInput = document.getElementById('searchInput');

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

// Boshlang'ich yuklash
displayTerms(terms);

// Qidiruv funksiyasini ulash
searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();
    
    const filteredTerms = terms.filter(item => 
        item.title.toLowerCase().includes(searchText) || 
        item.definition.toLowerCase().includes(searchText)
    );
    
    displayTerms(filteredTerms);
});
