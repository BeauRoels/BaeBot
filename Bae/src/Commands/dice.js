/**
 * AUTHOR           : Light
 * PROJECT          : Cara
 * UPDATED DATE     : 04/07/21
 * 
 * MODULE           : Dice
 * DESCRIPTION      : Roll a dice of any size 
 */

// -> EXPORT <- 
module.exports = {
    name: 'dice',
    aliases: ['d', 'roll', 'die', 'dice'],
    usage: '[Number]',
    description: 'Roll a dice. If no argument is provided, defaults to 20 sided die',
    execute(message, args, client, cara_object, analytic_object) {
        //Default D20 value
        let d20 = Math.floor(Math.random() * 20 + 1)
        //Special random value(based on argument)
        let x_sided_die = Math.floor(Math.random() * args[0] + 1)

        //Decide which value to use based in if there was an integer argument
        //? TEST ? TRUE VALUE : FALSE VALUE
        let dice = args.length ? x_sided_die : d20;
        
        message.channel.send("Roll: " + dice);
        analytic_object.syncCommandUseLog(message.author.id, message.author.username, this.name);
    },
}



