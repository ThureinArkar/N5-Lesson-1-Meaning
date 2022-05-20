const display=document.querySelector("p"),
display1 = document.getElementById("text1"),
display2 = document.getElementById("text2"),
display3 = document.getElementById("text3"),
display4 = document.getElementById("text4"),
 button=document.querySelector("button"),
 copyBtn=document.querySelector("span.far"),
 copyActive=document.querySelector("span.fas");
//let chars ='あいうえお';
let chars = [
  
  {
    text1:`ကျွန်ုပ်၊ကျွန်တော်/ကျွန်မ`,
  },
  {
    text1:`သင်၊ခင်ဗျား၊ရှင်`,
  },
  {
    text1:`ဟိုလူ`,
  },
  {
    text1:`(ဟိုပုဂ္ဂိုလ်)`,
  },
  {
    text1:`ဦး၊ဒေါ် (ယဉ်ကျေးမှုကိုဖော်ပြသောအား
      ဖြင့်အမည်များ၏နောက်တွင်ထည့်၍သုံးသော
      နောက်ဆက်)`,
  },
  {
    text1:`မောင်၊မ(ကလေးအမည်များ
      ၏နောက်တွင်ထည့်၍သုံးသောနောက်ဆက်)`,
  },
  {
    text1:`လူမျိုး (လူမျိုးဟူသောအဓိပ္ပာယ်ဆောင်သည့်
      နောက်ဆက်)`,
  },
  {
    text1:`ဆရာ/ဆရာမ (မိမိ၏အလုပ်အကိုင်ကိုရည်ညွှန်း
      သောအခါမျိုးတွင်မသုံးပါ။)`,
  },
  {
    text1:`ကျောင်းဆရာ၊နည်းပြဆရာ`,
  },
  {
    text1:`ကျောင်းသား/ကျောင်းသူ`,
  },
  {
    text1:`ကုမ္ပဏီဝန်ထမ်း`,
  },
  {
    text1:`ကုမ္ပဏီဝန်ထမ်း (ကုမ္ပဏီအမည်နှင့်တွဲ၍သုံးလေ့
      ရှိသည်။`,
  },
  {
    text1:`ဘဏ်ဝန်ထမ်း`,
  },
  {
    text1:`ဆရာဝန်`,
  },
  {
    text1:`သုတေသနပညာရှင်`,
  },
  {
    text1:`တက္ကသိုလ်`,
  },
  {
    text1:`ဆေးရုံ၊ဆေးခန်း`,
  },
  {
    text1:`ဘယ်သူ`,
  },
  {
    text1:`(ဘယ်ပုဂ္ဂိုလ်)`,
  },
  {
    text1:`-နှစ်(အသက်ကိုဆိုလိုသည်)`,
  },
  {
    text1:`ဘယ်နှနှစ်`,
  },
  {
    text1:`အသက်ဘယ်လောက်`,
  },
  {
    text1:`ဟုတ်ကဲ့`,
  },
  {
    text1:`ဟင့်အင်း`,
  },
  {
    text1:`တွေ့ရတာဝမ်းသာပါတယ်။ (မိမိကိုယ်ကိုမိတ်ဆက်
      ရာတွင်ပထမဆုံးအနေဖြင့်ပြောသောစကား)`,
  },
  {
    text1:`ကမှလာပါတယ်။`,
  },
  {
    text1:`[ကျေးဇူးပြု၍ ရင်းရင်းနှီးနှီးဆက်ဆံပါလို့ တောင်း
      ဆိုပါရစေ။/ ရင်းရင်းနှီးနှီးရှိချင်ပါတယ်။(မိမိကိုယ်ကိုမိတ်ဆက်ရာတွင်မိတ်ဆက်စကား၏
      အဆုံး၌ပြောသောစကား)`,
  },
  {
    text1:`တစ်ဆိတ်လောက် (တစ်ဖက်လူ၏အမည်၊ လိပ်စာ
      စသည့်ကိုယ်ရေးကိုယ်တာနှင့်သက်ဆိုင်သော
      အကြောင်းအရာတို့ကိုမေးမြန်းသောအခါတွင်
      သုံးသည်။)`,
  },
  {
    text1:`နာမည်ဘယ်လိုခေါ်ပါသလဲ။`,
  },
  {
    text1:`ဒီဘက်ကပါ။`,
  },
  {
    text1:`အမေရိက`,
  },
  {
    text1:`အင်္ဂလန်`,
  },
  {
    text1:`အိန္ဒိယ`,
  },
  {
    text1:`အင်ဒိုနီးရှား`,
  },
  {
    text1:`ကိုရီးယား`,
  },
  {
    text1:`ထိုင်း/ယိုးဒယား`,
  },
  {
    text1:`တရုတ်`,
  },
  {
    text1:`ဂျာမနီ`,
  },
  {
    text1:`ဂျပန်`,
  },
  {
    text1:`ဘရာဇီး`,
  },
];



















button.addEventListener('click', () => {
let randomPhrase=Math.floor(Math.random() * chars.length);
display.innerHTML = chars[randomPhrase].text1;
});

snowFall.snow(document.querySelector('.snow'), {
	minSize: 6,
	maxSize: 10,
	round: true,
	flakeCount: 30,
	flakeColor: 'white'
});





//  button.onclick=()=>{

// let randomPhrase=Math.floor(Math.random() * chars.length);
// display.value = chars[randomPhrase].text;
// display1.value = chars[randomPhrase].author;
// display2.value = chars[randomPhrase].text1;
// display3.value = chars[randomPhrase].text2;
// let randomPhrase1 =Math.floor(Math.random() * chars1.length);
// display1.value = chars1[randomPhrase].author;
   //
   // let i,
   // randomPassword="";
   // copyBtn.style.display = "block";
   // copyActive.style.display = "none";
   // for ( i = 0; i < 1; i++) {
   //   randomPassword = randomPassword + chars.charAt(
   //     Math.floor(Math.random() * chars.length)
   //   );
   // }

//  }
