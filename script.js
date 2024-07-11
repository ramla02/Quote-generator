function generate(){
    var quotes = {
        "- G.K. Nielson" : '"Successful people are not gifted; they just work hard, then succeed on purpose."',
        "- Dan Waldschmidt" : '"The only thing standing between you and outrageous success is continuous progress."',
        "- Robert Collier" : '"Success is the sum of small efforts, repeated day in and day out."',
        "- Thomas Edison" : '"The most certain way to succeed is always to try just one more time."',
        "- Dean Crawford" : '"Talent is nothing without persistence."',
        "-  Richie Norton" : '"Sometimes blessings come in ugly wrapping paper."',
        "- Kathleen Winsor" : '"The only genius that’s worth anything is the genius for hard work."',
        "- Margaret Mead" : '"I learned the value of hard work by working hard."',
        "- Sam Altman" : '"Everyone is looking for the hack, the secret to success without hard work."',
        "- Ken Griffey Jr." : '"Hard work doesn’t start during the game. Hard work starts the night before."',
        "- Heather Bresch" : '"There is simply no substitute for hard work when it comes to achieving success."',
        "- James A. Garfield" : '"If the power to do hard work is not a skill, it’s the best possible substitute for it."',
        "- Paul Dano" : '"The only constant I can find is hard work."',
        "- Zach LaVine" : '"I’ve always been taught that hard work doesn’t fail."'
    }
    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}