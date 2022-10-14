const { Telegraf } = require('telegraf');
//const fs = require('fs');
const axios = require('axios');

const token = "5608259919:AAFz_rxDKi9DkhbH4_IXKa6sgDFUN6IjHds";
const bot = new Telegraf(token);

let dalbayob = 0, timer_1, timer_2;

bot.help((ctx) => {
    if(ctx.update.message.chat.type === 'private'){
        ctx.reply("Далбайоби не пишіть в лс!");
        dalbayob++;
        console.log(dalbayob);
    }else{
        ctx.reply("/bustle команда щоб почати суєту\n/bustle2 команда щоб почати суєту2.0")
    }
});

bot.on('message', (ctx) => {
    if(ctx.update.message.chat.type === 'private'){
        ctx.reply("Далбайоби не пишіть в лс!");
        dalbayob++;
        console.log(dalbayob);
    }else{
        if(ctx.update.message.text === "/bustle" || ctx.update.message.text === "/bustle@sphincter_mBot"){
            ctx.reply("@sphincter_m\n@Grishcheniuk\n@vikeyti\n@rmnsky_k\n@VIPFootballist\n@Aizen_101solo\n@toolie_r\n@postoyuchkaaa\n@lubluanimeq\n@wusurs\n@hellned\n@qewbhg\n@Sashka_denysiuk\n@Jsjrkkk\n@DARK_13DEMON");
        }else if(ctx.update.message.text === "/bustle2" || ctx.update.message.text === "/bustle2@sphincter_mBot"){
            timer_1 = setInterval(() => {
                ctx.reply("Суєта");
            }, 5000);
        }else if(ctx.update.message.text === "/bustle3" || ctx.update.message.text === "/bustle3@sphincter_mBot"){
            timer_2 = setInterval(() => {
                //\n@🤍
                ctx.reply("@sphincter_m\n@Grishcheniuk\n@vikeyti\n@rmnsky_k\n@VIPFootballist\n@Aizen_101solo\n@toolie_r\n@postoyuchkaaa\n@lubluanimeq\n@wusurs\n@hellned\n@qewbhg\n@Sashka_denysiuk\n@Jsjrkkk\n@DARK_13DEMON");
            }, 5000);
        }else if(ctx.update.message.text === "/deleteTimers" || ctx.update.message.text === "/deleteTimers@sphincter_mBot"){
            clearInterval(timer_1);
            clearInterval(timer_2);
        }else{
            console.log(ctx.update.message);
        }
    }
});

bot.launch()