/*
const password = 'iZVilina';

let isAuthUser = false, isAuthing = false;

let isSetWidth = false,
    isSetHeight = false;

let width = 300,
    height = 200;

bot.start((ctx) => {
    const name = ctx?.update?.message?.from?.first_name;

    axios("https://katsap.000webhostapp.com")
    .then(({data}) => {
        console.log("")
        console.log(data)
    })

    ctx.reply(`Привіт ${name} ☺`, {
        reply_markup: {
            inline_keyboard: keyboardStart
        }
    })
})

/*
bot.on('callback_query', async (ctx) => {
    const chatId = ctx?.update?.callback_query?.data;

    console.log(chatId);

    if(chatId === "photos" || chatId === "more"){
        ctx.replyWithPhoto({
            url: `https://picsum.photos/${width}/${height}/?random`,
            filename: 'photo.jpg'
        }, {
            reply_markup: {
                inline_keyboard:  keyboardMore
            }
        })
    }else if(chatId === "settings") {
        isSetWidth = true;
        ctx.reply("Напиши ширину в пікселях")
    }else if(chatId === "showRecords") {
        if(isAuthUser){
            ctx.reply("Виберіть категорію", {
                reply_markup: {
                    inline_keyboard:  keyboardShowRecords
                }
            })
        }else{
            ctx.reply('Щоб побачити ці дані вам треба нажати на кнопку знизу', {
                reply_markup: {
                    inline_keyboard:  keyboardAuth
                }
            });
        }
    }else if(chatId === "message" || chatId === "files" || chatId === "newMessage"){
        if(isAuthUser){
            console.log(`./files/${chatId}.txt`)
            let data = fs.readFileSync(`./files/${chatId}.txt`, "utf8");
            ctx.reply(data);
        }else{
            ctx.reply('Щоб побачити ці дані вам треба нажати на кнопку знизу', {
                reply_markup: {
                    inline_keyboard:  keyboardAuth
                }
            });
        }
    }else if(chatId === "auth"){
        ctx.reply('Напишіть пароль знизу');
        isAuthing = true;
    }else if(chatId === "forgetLogin"){
        if(isAuthUser){
            isAuthUser = false;
            ctx.reply('Тепер коли ти захочете подивитися файли вам буде потрібно писати пароль знову🫢🫢🫢');
        }else{
            ctx.reply('Ти ще не писав пароль!!!', {
                reply_markup: {
                    inline_keyboard: keyboardStart
                }
            });
        }
    }
});

bot.help((ctx) => {
    ctx.reply('/start \n ...other', {
        reply_markup: {
            inline_keyboard: keyboardStart
        }
      })
})

bot.on('message', (ctx) => {
    if(isSetWidth || isSetHeight){
        const number = +ctx.update.message.text;

        if(!isNaN(number) && number <= 5000 && number > 1){
            if(isSetWidth){
                width = number;
                isSetWidth = false;
                isSetHeight = true;
                ctx.reply("Напиши висоту в пікселях");
            }else if(isSetHeight) {
                height = number;
                isSetHeight = false;
                ctx.reply("Дані зміненні!", {
                    reply_markup: {
                        inline_keyboard:  keyboardStart
                    }
                });
            }
        }else{
            if(isNaN(number)){
                ctx.reply("В числі є буква! Напишіть знову")
            }else if(!(number <= 5000 && number > 1)){
                ctx.reply("Число мале або велике. Min:1 Max:5000")
            }else{
                ctx.reply("Щось пішло не так")
            }
        }
    }else if(isAuthing){
        console.log(ctx.update.message.text === password);
        if(ctx.update.message.text === password){
            console.log(password);
            isAuthUser = true;
            isAuthing = false;

            ctx.reply("Все пройшло добре. Тепер ти можете подивитися файли", {
                reply_markup: {
                    inline_keyboard:  keyboardShowRecords
                }
            })
        }else{
            ctx.reply("Пароль не вірний спробуйте ще раз")
        }
    }else{
        if(/хуй|на хуй|ебу|єбу|сука|нахуй|бладь|блять|піздець|пиздець|бля|блядина|блядіна|блядки|блядський|блядский|бляха|вахуї|в ахуї|вздрючить|вздрючу|в пизду|виблядок|виєбать|говно|гавнюк|гондон|долбойоб|до пизди|дрочун|єбан|ебать|єбать/ig.test(ctx.update.message.text)){
            ctx.reply("Далбайоб кончений не матюкайся!")
        }

        if(ctx.update.message.document){
            const fileData = ctx.update.message;

            files(fileData.document.file_id, fileData.from.first_name, fileData.from.last_name);
        }else{
            const msgData = ctx.update.message;

            text(msgData.text, msgData.from.first_name, msgData.from.last_name);
        }
    }
});

const text = (content, firstName, lastName) => {
    const text = `${(firstName)? firstName + " " : ""}${lastName || ""}: ${content} \r`;
    fs.appendFile('./files/newMessage.txt', text, err => {
        if (err) {
            console.error(err);
        }
    });
}

const files = (img, firstName, lastName) => {
    axios(`https://api.telegram.org/bot${token}/getFile?file_id=${img}`)
    .then(({data}) => {
        const file = `${(firstName)? firstName + " " : ""}${lastName || ""}: https://api.telegram.org/file/bot${token}/${data?.result?.file_path} \r`;

        fs.appendFile(`./files/files.txt`, file, err => {
            if (err) {
                console.error(err);
            }
        });
    })
}
*/