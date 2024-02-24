function userConnectMeTgBot() {
    let form = document.querySelector("form")

    let bot = {
        TOKEN: "6718547391:AAEF_67eMIx3zTktxSVD-KUIwazDOd8ZMyc",
        chatID: "5126880787"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();

        let msg = document.querySelector("#msg");
        let username = document.querySelector("#name");
        let email = document.querySelector("#email");
        let phone = document.querySelector("#phone");
        let subject = document.querySelector("#subject");
        let information = `3-portfolio saytdan xabar keldi!!! Ism: ${username.value} |    Email: ${email.value} |  Telefon raqam: ${phone.value} |  Kasbi: ${subject.value} ||   Xabar qoldirdi: ${msg.value}`
        let list = [username,email,phone,subject,msg]
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${information}`, {
            method: "GET"
        })
            .then(success => {
            alert("Xabar yuborildi! \nElektron pochtangizga izoh qoldiriladi, salomat bo'ling!")
            }, error => {
                alert("Xabar yuborilmadi!")
                console.log(error);
            })
    
    
        

    })
}
userConnectMeTgBot()