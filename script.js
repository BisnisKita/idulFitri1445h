function sayGreeting() {
  var ilang = document.getElementById("klik");

  yourName = prompt("Masukan Nama Anda !");
  if (yourName == "" || !yourName) alert("Silakan isi Nama anda terlebih dahulu");
  else document.getElementById("tes").innerText = "Selamat Idul Fitri Kak " + yourName + "😇 dan Minal Aidzin wal Faizin Mohon Maaf Lahir dan Batin 🖕🙏";
  cek.removeChild(ilang);
  body.removeChild(document.getElementById("img"));
}

$("#klik").click(() => {
  $("img").css("display", "none");
});
$("#klik").click(() => {
  $(".wrapper").css("display", "flex");
});
$("#klik").click(() => {
  $(".image").css("display", "block");
});
$("#klik").click(() => {
  $(".a").css("display", "block");
});

//Testimonial Data
const testimonials = [
  {
    testimonial: '"Maaf kalau aku punya salah, karena kalau punya kamu kan nggak mungkin"',
    wa: "",
  },
  {
    testimonial: '"Semoga di hari yang spesial ini mata kita tidak terbutakan oleh hawa nafsu dan baju shimmer"',
    wa: "",
  },
  {
    testimonial: '"Maaf kalau ada salah kata, perbuatan, atau salah menaruh rasa"',
    wa: "",
  },
  {
    testimonial: '"Ingat kita harus saling memaafkan karena kalau saling mencintai aku yakin kamu nggak mau"',
    wa: "",
  },
  {
    testimonial: '"Mohon maaf lahir dan batin, apabila ada salah dimaafkan, apabila ada utang segera di ikhlaskan"',
    wa: "",
  },
  {
    testimonial: '"Mohon maaf lahir batin, apabila salah tolong dimaafkan dan apabila sayang tolong diungkapkan"',
    wa: "",
  },
  {
    testimonial: "Mau Lanjut Klik Aja! wkwk",
    wa: ' "<img src="image/whatsapp.png" alt="">"',
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <a href="https://wa.me/6285758492957?text=Assalamu%27Alaikum%20ehem%20ehem%20,,CEK,,CEK,,">${testimonials[i].wa}</a>
  `;
};
window.onload = displayTestimonial;
