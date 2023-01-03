//-----------------LOCALSTORAGE ALANI------------------------

localStorage.setItem('myCat','Keddy') //localstorage alanına veri ekledim.
localStorage.getItem('myCat') // veriyi okuyorum.
localStorage.removeItem('myCat') // veriyi siliyorum.
//localStorage.clear()// tüm verileri siler.

//----------------------------------------------------------


//-----------------LOCALSTORAGE ALANINA FARKLI TÜRDE VERİLER EKLEME------------------------
 let user = {userName: "betulozgen", isActive: true}
 console.log(user)

 //localStorage.setItem('userInfo',user)

 //bu şekilde user'ın içerisinde birden fazla bilgi barındırdığında getItem dediğimiz zaman göremiyoruz. Görebilmemiz için JSON.stringify() lullanıyorum.
 localStorage.setItem('userInfo',JSON.stringify(user))
 let userInfo = localStorage.getItem('userInfo') //bilgiyi al
 userInfo = JSON.parse(userInfo) //bilgilere ulaşabiliyoruz
 console.log(userInfo)
//-----------------------------------------------------------------------


/*
//-------------DENEME--------------------------------
 let guest = {userName: "deneme" , isActive: true}
 //localStorage alanına nasıl kaydetmeliyiz?
 localStorage.setItem('guestInfo', JSON.stringify(guest)) //Stringe çevirdik.
 let guestInfo = localStorage.getItem('guestInfo') //bilgileri aldık. Bilgilere string şeklinde olduğu için tek tek ulaşamıyorum
 guestInfo = JSON.parse(guestInfo) // bilgilere ulaşabiliyorum.



 //localStorage alanına kaydedilen veriye nasıl erişiriz?
 let data = JSON.parse(localStorage.getItem('userName'))

 */



