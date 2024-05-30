
// Navbar
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


// Navbar Scroll
var navbar = document.getElementById("navbar");

// تعريف الحد الأدنى للتمرير لإظهار الهيدر
var scrollThreshold = 36;

// وظيفة لتحريك الهيدر عند التمرير
function moveHeaderOnScroll() {
    // الحصول على قيمة التمرير الرأسية للصفحة
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // فحص ما إذا كانت قيمة التمرير تجاوزت الحد الأدنى
    if (scrollPosition > scrollThreshold) {
        // إضافة الكلاس hidden للهيدر لإخفائه
        navbar.classList.add("hidden");
        // تلوين الروابط باللون الأسود
        var navLinks = document.querySelectorAll('.nav .nav-links a');
        navLinks.forEach(function(link) {
            link.style.color = '#000000'; // لون أسود
            // link.style.color = '#a3a3a3'; // لون رمادي
        });
        // تحديد الروابط الإضافية التي تحتاج لتغيير اللون في المكان الجديد
        var login = document.querySelectorAll('.nav a.login');
        login.forEach(function(link) {
            link.style.color = '#000000'; // لون اسود للروابط في المكان الآخر
        });

    } else {
        // إزالة الكلاس hidden للهيدر لإظهاره
        navbar.classList.remove("hidden");
        // تلوين الروابط باللون الأحمر
        var navLinks = document.querySelectorAll('.nav .nav-links a');
        navLinks.forEach(function(link) {
            link.style.color = '#a3a3a3'; 
        });
                // تحديد الروابط الإضافية التي تحتاج لتغيير اللون في المكان الجديد
                var login = document.querySelectorAll('.nav a.login');
                login.forEach(function(link) {
                    link.style.color = '#000000'; // 
                });
    }
}

// استدعاء الدالة عند تمرير الصفحة
window.addEventListener('scroll', moveHeaderOnScroll);




// Sliders
$(document).ready(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000, // زمن التأخير بين الصور بالمللي ثانية
    autoplaySpeed: 5000000, // زمن التأخير بين الصور بالمللي ثانية
    speed: 600, // سرعة التحول بالمللي ثانية
    slidesToShow: 1, // عدد الصور المعروضة في كل مرة
    slidesToScroll: 1, // عدد الصور التي يتم التحرك إليها في كل مرة
    pauseOnHover: false, // توقف التشغيل التلقائي عند تحويل المؤشر فوق الصورة
    dots: true, // إظهار النقاط التي تمثل الصور في الأسفل
    arrows: true, // إظهار الأسهم للتنقل بين الصور
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>'
  });

  $('.slider-two').slick({
    autoplay: true,
    autoplaySpeed: 5000, // زمن التأخير بين الصور بالمللي ثانية
    speed: 600, // سرعة التحول بالمللي ثانية
    slidesToShow: 1, // عدد الصور المعروضة في كل مرة
    slidesToScroll: 1, // عدد الصور التي يتم التحرك إليها في كل مرة
    pauseOnHover: false, // توقف التشغيل التلقائي عند تحويل المؤشر فوق الصورة
    dots: true, // إظهار النقاط التي تمثل الصور في الأسفل
    arrows: true, // إظهار الأسهم للتنقل بين الصور
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>'
  });

  $('.slider-three').slick({
    autoplay: true,
    autoplaySpeed: 5000, // زمن التأخير بين الصور بالمللي ثانية
    speed: 600, // سرعة التحول بالمللي ثانية
    slidesToShow: 1, // عدد الصور المعروضة في كل مرة
    slidesToScroll: 1, // عدد الصور التي يتم التحرك إليها في كل مرة
    pauseOnHover: false, // توقف التشغيل التلقائي عند تحويل المؤشر فوق الصورة
    dots: true, // إظهار النقاط التي تمثل الصور في الأسفل
    arrows: true, // إظهار الأسهم للتنقل بين الصور
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>'
  });
  
  $('.slider-four').slick({
    slidesToShow: 1, // عدد الصور المعروضة في كل مرة
    slidesToScroll: 1, // عدد الصور التي يتم التحرك إليها في كل مرة
    dots: true, // إظهار النقاط التي تمثل الصور في الأسفل
    arrows: true, // إظهار الأسهم للتنقل بين الصور
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>'
  });

// Responsive
$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.multiple-items').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 600, 
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

});



// // اختيار الهيدر
// var navbar = document.getElementsByClassName(".nav");

// // تعريف الحد الأدنى للتمرير لإظهار الهيدر
// var scrollThreshold = 36;

// // وظيفة لتحريك الهيدر عند التمرير
// function moveHeaderOnScroll() {
//     // الحصول على قيمة التمرير الرأسية للصفحة
//     var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//     // فحص ما إذا كانت قيمة التمرير تجاوزت الحد الأدنى
//     if (scrollPosition > scrollThreshold) {
//         // تغيير موقع الهيدر بمقدار 36 بكسل لأعلى
//         navbar.style.top = "-36px";
//     } else {
//         // استعادة موقع الهيدر الأصلي
//         navbar.style.top = "0";
//     }
// }

// // إضافة مستمع لحدث التمرير
// window.addEventListener("scroll", moveHeaderOnScroll);



// var navbar = document.getElementById("navbar");

// // تعريف الحد الأدنى للتمرير لإظهار الهيدر
// var scrollThreshold = 36;

// // وظيفة لتحريك الهيدر عند التمرير
// function moveHeaderOnScroll() {
//     // الحصول على قيمة التمرير الرأسية للصفحة
//     var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

//     // فحص ما إذا كانت قيمة التمرير تجاوزت الحد الأدنى
//     if (scrollPosition > scrollThreshold) {
//         // إضافة الكلاس hidden للهيدر لإخفائه
//         navbar.classList.add("hidden");
//     } else {
//         // إزالة الكلاس hidden للهيدر لإظهاره
//         navbar.classList.remove("hidden");
//     }
// }

