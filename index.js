// 1. Tugma bosilganda rangni o'zgartirish
// Vazifa: HTML sahifasida bir nechta matn yozilgan bo‘lsin. "Matn rangini o'zgartirish" tugmasi bosilganda, barcha matnning rangi tasodifiy rangga o‘zgartirilsin.
// Ko‘rsatma:
// getElementById yoki querySelectorAll yordamida matnni olish.
// Tugma bosilganda rangni o‘zgartirish uchun style.colordan foydalanish.
// Rangni tasodifiy olish uchun Math.random()ni ishlatish.



const text = document.getElementById('tex')
const btn = document.getElementById('btn')

btn && btn.addEventListener('click',function() {
text.style.color = 'blue'
text.style.backgroundColor = '#0ff'
})




    
// 2. Inputdagi qiymatni clipboardga nusxalash
// Vazifa: Foydalanuvchi input maydoniga matn yozadi. "Nusxa olish" tugmasi bosilganda, inputdagi qiymat clipboardga nusxalanadi va sahifada xabar ("Matn nusxalandi!") chiqariladi.
// Ko‘rsatma:
// querySelector orqali input va tugmani olish.
// Tugma bosilganda navigator.clipboard.writeText yordamida clipboardga yozib olish.
// Xabar chiqarish uchun DOM element yaratish va qo‘shish.


const inputt = document.querySelector('#textInput');
const btn2 = document.querySelector('#copyButton');
const divdagiXabar = document.querySelector('#message');

btn2.addEventListener('click', () => {
  const text = inputt.value; 
  if (text.trim() !== '') {
    navigator.clipboard.writeText(text)
      .then(() => {
        divdagiXabar.textContent = 'Matn nusxalandi!';
        divdagiXabar.style.color = 'blue';
       divdagiXabar.style.backgroundColor = 'orange'
       
      })
      
  }
});



// 4. Elementni yashirish va ko‘rsatish
// Vazifa: Sahifada bir nechta paragraflar bo‘lsin. "Yashirish" tugmasi bosilganda, barcha paragraflar yashiriladi. "Ko‘rsatish" tugmasi bosilganda, ular qayta ko‘rinadigan bo‘lsin.
// Ko‘rsatma:
// querySelectorAll yordamida barcha paragraflarni olish.
// style.displayni "none" yoki "block" qilib o‘zgartirish.
// Turli tugmalar uchun alohida click hodisalarini ishlatish.


const textHiddin = document.getElementById('hiddin')
const btn11 = document.getElementById('clic')

btn11 && btn11.addEventListener('click',function() {
    textHiddin.style.display = 'none'

})



// 5. Tugma bosilganda fon rangini o'zgartirish
// Vazifa: Sahifada bir nechta tugma joylashtirilgan bo‘lsin. Har bir tugma bosilganda butun sahifaning fon rangi o‘zgaradi. Tugmalar har xil ranglar uchun javob beradi (masalan: qizil, yashil, ko‘k).
// Ko‘rsatma:
// querySelectorAll orqali barcha tugmalarni olish.
// Tugmalarga click hodisasini ulash.
// Tugma bosilganda document.body.style.backgroundColor orqali rangni o‘zgartirish.



const bacraund = document.getElementById('body')
const fonn = document.getElementById('fon')

fonn && fonn.addEventListener('click',function(){
    bacraund.style.backgroundColor = 'blue'
})



// 6. Belgilangan matnni kattalashtirish
// Vazifa: Sahifada matnlar yozilgan bo‘lsin. Foydalanuvchi matn ustiga bosganda uning shrift o‘lchami kattalashadi.
// Ko‘rsatma:
// querySelectorAll orqali barcha matnlarni olish.
// Har bir elementga click hodisasini ulash.
// style.fontSizeni o‘zgartirib, matnni kattalashtirish.

const get = document.getElementById('doc')
 get && get.addEventListener('click',function(){
    get.style.fontSize = '100px'
    get.style.fontWeight = '100px'
    get.style.lineHeight = '100px'

 })


//  7. Ko‘zgu (mirror) effekti
//  Vazifa: Sahifada bir input maydoni va bir matn ko‘rsatiladigan bo‘sh joy bo‘lsin. Foydalanuvchi inputga nimadir yozganda, yozilgan matn real vaqt rejimida bo‘sh joyga ko‘chib ko‘rsatiladi.
//  Ko‘rsatma:
//  Input maydonini querySelector orqali olish.
//  input hodisasini ulash.
//  textContent yoki innerText yordamida inputdagi qiymatni boshqa elementga yozib borish.


const yozu = document.querySelector('#bbb');
const mirrorText = document.querySelector('#mirror');

yozu.addEventListener('input', function() {
  mirrorText.textContent = yozu.value;
});




// 8. Parolni ko‘rsatish/yashirish
// Vazifa: Foydalanuvchiga parol maydoni va "Ko‘rsatish/Yashirish" tugmasi ko‘rsatiladi. Tugma bosilganda parol ko‘rinadigan yoki yashirin holatga o‘tadi.
// Ko‘rsatma:
// querySelector orqali input va tugmani olish.
// Tugma bosilganda inputning type xususiyatini text yoki passwordga o‘zgartirish.



const paril = document.querySelector('#pass');
const tugma = document.querySelector('#togg');

 tugma && tugma.addEventListener('click', function() {
  if (paril.type === 'password') {

    paril.type = 'text';
    tugma.textContent = 'Yashirish';
  } else {

    paril.type = 'password';
    tugma.textContent = 'Ko‘rsatish';
  }
});





// 10. Tasodifiy rasm ko'rsatish
// Vazifa: Sahifada "Tasodifiy rasm ko‘rsatish" tugmasi bo‘lsin. Tugma bosilganda tasodifiy rasm (oldindan berilgan URL ro‘yxatidan) sahifada ko‘rsatiladi.
// Ko‘rsatma:
// Rasm URL’larini massivda saqlash.
// Math.random yordamida tasodifiy rasmni tanlash.
// Rasm elementini yaratish yoki mavjud elementga src o‘zgartirish orqali tasvirni yangilash.


const imags = [
    'https://via.placeholder.com/300/FF0000/FFFFFF?text=Rasm+1',
    'https://via.placeholder.com/300/00FF00/FFFFFF?text=Rasm+2',
    'https://via.placeholder.com/300/0000FF/FFFFFF?text=Rasm+3',
    'https://via.placeholder.com/300/FFFF00/FFFFFF?text=Rasm+4',
    'https://via.placeholder.com/300/FF00FF/FFFFFF?text=Rasm+5'
  ];
  
  const randomImage = document.querySelector('#Image');
  const showImageBtn = document.querySelector('#showBtn');
  
  function sum() {
    const random = Math.floor(Math.random() * imags.length);
  
    randomImage.src = imags[random];
  }
  
  showImageBtn.addEventListener('click', sum);
  


//   11. Paragraflarni yashirish va ko‘rsatish
// Vazifa: Sahifada bir nechta paragraflar bo‘lsin. Har bir paragraf yonida "Yashirish" tugmasi bo‘lsin. Tugma bosilganda faqat o‘sha paragraf yashiriladi.
// Ko‘rsatma:
// querySelectorAll orqali barcha paragraflarni olish.
// Har bir paragraf uchun "Yashirish" tugmasi yaratib, ulash.
// Tugma bosilganda tegishli paragrafni style.display = "none" qilish.



const teex = document.getElementById('paragrf')
const yashirish = document.getElementById('hiddn')

yashirish && yashirish.addEventListener('click',function() {
    teex.style.display = 'none'

})



// 12. Matnni almashtirish
// Vazifa: Sahifada bir nechta paragraflar yozilgan bo‘lsin. Foydalanuvchi har bir paragrafga bosganda, o‘sha matn "Salom, dunyo!" ga almashtiriladi.
// Ko‘rsatma:
// querySelectorAll orqali barcha paragraflarni olish.
// Har biriga click hodisasini ulash.
// innerTextni o‘zgartirib, yangi matnni ko‘rsatish.



const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => {
    paragraph.innerText = 'Salom, dunyo!';
  });
});