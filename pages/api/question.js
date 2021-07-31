const questions = [
  "60s, 70s, 80s, 90s: Which decade do you love the most and why?",
  "Are you a cat or dog person or neither? Why?",
  "Are you a cat person or a dog person?",
  "Are you a good dancer?",
  "Are you a morning person or a night person?",
  "Are you a traveler or a homebody?",
  "Are you an early bird or night owl?",
  "Are you more productive at night or in the morning? Do you think it's possible to change and get used to another schedule?",
  "Are you sunrise, daylight, twilight, or nighttime? Why?",
  "As a child, what did you want to be when you grew up?",
  "Be honest, how often do you work from bed?",
  "Besides insects and spiders, what animals annoy you the most?",
  "Besides war and diplomacy, what would be the best way for countries to settle disputes?",
  "Best book you've ever read?",
  "Best professional development book you've ever read?",
  "Cats or dogs?",
  "Coffee or tea?",
  "Do you collect anything?",
  "Do you have a dedicated office space at home?",
  "Do you have a favorite plant?",
  "Do you love working from home or would you rather be in the office? Is there a balance of both that you like best?",
  "Do you prefer pens or pencils? Why?",
  "Do you think you could live without your smartphone (or other technology item) for 24 hours?",
  "Do you think you have a pretty good work-life balance? Why or why not?",
  "Do you think you rely too heavily on your phone? Why or why not?",
  "Does your current car have a name? What is it?",
  "Has there ever been a time when something so amazing or unexpected happened that it literally left you speechless for a time?",
  "Have you ever been told you look like someone famous, who was it?",
  "Have you ever completed anything on your bucket list?",
  "Have you ever met your idol or someone you revere greatly?",
  "How could carousels be spiced up so they are more exciting?",
  "How did you get that scar of yours?",
  "How did you spend the money from your very first job?",
  "How do you feel about clowns?",
  "How do you like your eggs?",
  "How do you stay productive and motivated working virtually?",
  "How do you think you will be/act when you are old?",
  "How do you usually get your news?",
  "How good are you at drawing?",
  "How handy are you when it comes to fixing things?",
  "How into self-improvement are you?",
  "How into tech are you? Why?",
  "How many cups of coffee, tea, or beverage-of-choice do you have each morning?",
  "How often do you dance?",
  "How well do you know your neighbors?",
  "How would you spend a million dollars? How about a billion?",
  "How would your friends describe you?",
  "If a movie was made of your life what genre would it be, who would play you?",
  "If a new volcano formed and the government had an online contest to see what it would be named, what name would you submit?",
  "If aliens landed on earth tomorrow and offered to take you home with them, would you go?",
  "If extraterrestrials landed on earth and offered to take you with them, would you go?",
  "If someone came up to you and said ''Hey, do that thing you do!'', what thing would pop into your head first?",
  "If the universe is just a simulation, what update or patch does it need?",
  "If you could add a word to the dictionary what would you add and what would it mean?",
  "If you could add anyone to Mount Rushmore who would it be; why?",
  "If you could be an animal, what animal would you be and why?",
  "If you could be any animal in the world, what animal would you choose to be?",
  "If you could be any sports personality who would it be and why?",
  "If you could be any supernatural creature, what would you be and why?",
  "If you could be guaranteed one thing in life (besides money), what would it be?",
  "If you could be immortal, what age would you choose to stop aging at and why?",
  "If you could be in any movie, what would it be and what character would you play?",
  "If you could be on a reality TV show, which one would you choose and why?",
  "If you could bring back any fashion trend what would it be?",
  "If you could change one thing about yourself what would you choose?",
  "If you could change places with anyone in the world, who would it be and why?",
  "If you could choose any historical figure to be your imaginary friend, who would it be and why?",
  "If you could choose any person from history to be your imaginary friend, who would it be and why?",
  "If you could choose any two famous people to have dinner with who would they be?",
  "If you could choose your age forever, what age would you choose and why?",
  "If you could choose your dreams, what would you prefer to dream about?",
  "If you could commit any crime and get away with it what would you choose and why?",
  "If you could do anything in the world as your career, what would you do?",
  "If you could eliminate one thing from your daily routine, what would it be and why?",
  "If you could go to Mars, would you? Why or why not?",
  "If you could hang out with any cartoon character, who would you choose and why?",
  "If you could have someone follow you around all the time, like a personal assistant, what would you have them do?",
  "If you could have the power of teleportation right now, where would you go and why?",
  "If you could instantly become an expert in something, what would it be?",
  "If you could kill any fashion trend forever what would it be?",
  "If you could learn one new personal skill, what would it be?",
  "If you could learn one new professional skill, what would it be?",
  "If you could live anywhere in the world for a year, where would it be?",
  "If you could live anywhere on this planet, where would you choose to live?",
  "If you could live in any country, where would you live?",
  "If you could magically become fluent in any language, what would it be?",
  "If you could meet any historical figure, who would you choose and why?",
  "If you could meet any living person for dinner, who would you pick and why?",
  "If you could pick up a new skill in an instant what would it be?",
  "If you could rename yourself, what name would you pick?",
  "If you could see one movie again for the first time, what would it be and why?",
  "If you could start a charity, what would it be for?",
  "If you could write a book that was guaranteed to be a best seller, what would you write?",
  "If you could write a book, what genre would you write it in? Mystery? Thriller? Romance? Historical fiction? Non-fiction?",
  "If you had 25 hours a day, how would you use your extra time?",
  "If you had a time machine, would go back in time or into the future?",
  "If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
  "If you had to delete all but three apps from your smartphone, which ones would you keep?",
  "If you had to eat one meal every day for the rest of your life what would it be?",
  "If you had to eat one meal everyday for the rest of your life what would it be?",
  "If you had to lose all your memories which one would want to lose last?",
  "If you had to lose one of your senses, which would you choose to lose?",
  "If you had to play one album forever which one would it be?",
  "If you had to teach a class on one thing, what would you teach?",
  "If you left your current life behind and ran away to follow your dreams, what would you be doing?",
  "If you were a superhero what would your name be?",
  "If you were a superhero what would your superpower be and why?",
  "If you were a vegetable, what vegetable would you be and why?",
  "If you were a wrestler what would be your entrance theme song?",
  "If you were famous what would you be famous for?",
  "If you were famous, what would you be famous for?",
  "If you were featured on the local news, what would you most likely be on there for?",
  "If you were independently wealthy and didn't have to work, what would you do with your time?",
  "If you were left on a deserted island with either your worst enemy or no one, which would you choose? Why?",
  "If you were so wealthy you didn't need to work, what would you do with your time?",
  "If you were stranded on a desert island, what three items would you want to have with you?",
  "If you were to change your name, what name would you change to and why?",
  "Popcorn or M&Ms?",
  "Say you're independently wealthy and don't have to work, what would you do with your time?",
  "Show us your office space!",
  "Teleportation or flying?",
  "Tell me about a time you were totally out of your element/comfort zone.",
  "The zombie apocalypse is coming, who are 3 people you want on your team?",
  "The zombie apocalypse is coming, who are three people you want on your team?",
  "What about becoming an adult caught you completely off guard?",
  "What about showers? Do you prefer morning or night?",
  "What apps do you use most?",
  "What are common misconceptions about your job?",
  "What are some films that would make it on to your top 50 list of movies?",
  "What are some of the dumbest misadventures you've been on?",
  "What are some of your favorite games to play?",
  "What are some of your favorite holiday traditions that you did while growing up?",
  "What are some of your favorite scenes from movies?",
  "What are some of your guilty pleasures?",
  "What are two of your favorite snacks?",
  "What are you best at fixing?",
  "What are you grateful for?",
  "What are you hilariously bad at?",
  "What are you kind of snobby about?",
  "What are you reading right now?",
  "What are your three favorite drinks?",
  "What are your three favorite foods?",
  "What assumption you made went hilariously wrong?",
  "What big problem do you think technology will solve next?",
  "What book did you read that changed your life the most?",
  "What book had the most significant impact on you?",
  "What book, movie read/seen recently you would recommend and why?",
  "What brands do you love/hate the most?",
  "What breed of dog would you be?",
  "What card or board games do you like to play?",
  "What catchy jingle or bit of advertising has stuck with you all these years?",
  "What clothing item would make you walk out on a date if someone wore it?",
  "What company or brand did you love until they betrayed your trust?",
  "What could movie theaters do to improve the experience of going there?",
  "What crossed way too far into the uncanny valley for you?",
  "What culture would you like to learn more about?",
  "What did you eat for breakfast?",
  "What did you have for breakfast this morning?",
  "What did you name your first car?",
  "What did your teachers and parents say would be really important when you grew up, but it hasn't been? ",
  "What do you buy way more of than most people?",
  "What do you do to unwind after a hard day?",
  "What do you geek out about?",
  "What do you highly recommend to most people you meet?",
  "What do you rebel against?",
  "What do you resent paying for most?",
  "What do you think the ideal age to be is?",
  "What do you usually do on your commute to work?",
  "What do you want to do when you retire?",
  "What do you wish someone taught you a long time ago?",
  "What do you wish was illegal?",
  "What do you wish your phone could do?",
  "What does your favorite shirt look like?",
  "What does your morning routine look like when working from home?",
  "What does your perfect breakfast look like?",
  "What does your perfect burger or sandwich have in it?",
  "What does your typical work from home uniform look like?",
  "What fashion trend needs to be brought back?",
  "What fictional family would you be a member of?",
  "What fictional world or place would you like to visit?",
  "What food do you love that a lot of people might find a little odd?",
  "What food is underrated or underappreciated?",
  "What fruit or vegetable would you most want to be?",
  "What hard time in your life left you a better person after it was finished?",
  "What has really taken a toll on you?",
  "What has taken you the longest to get good or decent at?",
  "What hobby would you be a lot of fun to get into?",
  "What household chore do you actually enjoy?",
  "What incredibly common thing have you never done?",
  "What is one article of clothing that someone could wear that would make you walk out on a date with them?",
  "What is something you do better than most people and something you do worse than most people?",
  "What is the best event you've attended?",
  "What is the best pair of shoes you have owned?",
  "What is the best perk you have ever enjoyed at a job?",
  "What is the best thing you have ever bought?",
  "What is the biggest mistake you've made at work?",
  "What is the last goal you achieved?",
  "What is the meaning of your name?",
  "What is the most amazing fact you know?",
  "What is the most clever or funniest use of advertising you've seen?",
  "What is the most stressful TV show or movie you watched?",
  "What is the most tedious and/or the most exciting sport to watch?",
  "What is the most unique or silliest problem you have going on in your life at the moment?",
  "What is the weirdest food combination you've made and tried?",
  "What is your absolute dream job?",
  "What is your cellphone wallpaper?",
  "What is your favorite breakfast food?",
  "What is your favorite dessert?",
  "What is your favorite genre of movie? Why?",
  "What is your favorite holiday and why?",
  "What is your favorite item you've bought this year?",
  "What is your favorite magical or mythological animal?",
  "What is your favorite meal to cook and why?",
  "What is your favorite musical instrument and why?",
  "What is your favorite season of the year and why?",
  "What is your favorite sport to watch and why?",
  "What is your favorite television network?",
  "What is your favorite time of the day and why?",
  "What is your favorite TV show?",
  "What is your most used emoji?",
  "What kind of art do you appreciate the most?",
  "What kind of challenges are you facing these days?",
  "What kind of people do you most enjoy hanging out with?",
  "What kind of physical activities do you like doing?",
  "What languages do you know how to speak?",
  "What luxury is totally worth the price?",
  "What makes you feel old when you think about it?",
  "What motivates you?",
  "What movie have you seen recently that you would recommend and why?",
  "What movie never gets old no matter how many times you've seen it?",
  "What music do you put on when you want to get pumped?",
  "What period would be the best to be born in?",
  "What pets did you have growing up?",
  "What public spaces do you feel most comfortable in? (Library, bar, park, mall, stadium, etc.)",
  "What recent trend are you totally on board with?",
  "What rule do you wish they would introduce into your favorite sport?",
  "What scene in a movie always gives you goosebumps every time you watch it?",
  "What season would you be?",
  "What skill do you think everyone should have?",
  "What skill or talent would you most like to learn?",
  "What slang are you really happy went out of fashion?",
  "What smell do you hate that doesn't seem to bother other people?",
  "What songs would be played on a loop in hell?",
  "What sport do you wish you knew more about?",
  "What sport would you compete in if you were in the Olympics?",
  "What subjects should be taught in school but aren't?",
  "What takes a lot of time but is totally worth it?",
  "What tells you the most about a person?",
  "What topic could you give a 20-minute presentation on without any preparation?",
  "What toy did you hate most as a child?",
  "What TV show are you hooked on or were recently hooked on?",
  "What useless facts do you know?",
  "What was something courageous you've (in person) seen someone do?",
  "What was something you thought would be easy until you tried it?",
  "What was the country you last visited outside of United States?",
  "What was the craziest theme park or fair ride you've been on?",
  "What was the first thing you bought with your own money?",
  "What was the funniest thing you've seen recently online?",
  "What was the last thing you were really excited about?",
  "What was the scariest movie you've seen?",
  "What was the worst haircut you ever had?",
  "What was the worst job you ever had?",
  "What was the worst style choice you ever made?",
  "What was your best vacation?",
  "What was your favorite game to play as a child?",
  "What was your funniest or worst experience with a dentist?",
  "What was your least favorite food as a child? Do you still hate it or do you love it now?",
  "What was your worst haircut experience?",
  "What wastes the most time in your day to day life?",
  "What website or app doesn't exist, but you really wish it did?",
  "What weird quirks did you pick up from your parents?",
  "What weird thing do you have nostalgia for?",
  "What well-known person does the most good for the world?",
  "What were your favorite television shows when you were growing up?",
  "What workers have the worst jobs?",
  "What works of art have really made an impression on you?",
  "What would be the most surprising scientific discovery imaginable?",
  "What would the title of your autobiography be?",
  "What would you change if you were in charge of the company you work for?",
  "What would you do with your 15 minutes of fame?",
  "What would you like to be known/remembered for?",
  "What would you like to do when you retire?",
  "What would your dream house be like?",
  "What would your superpower be and why?",
  "What would your talent be if you were Miss or Mister World?",
  "What, in your opinion, is the most amazing animal?",
  "What's a problem you have, that might be entirely unique to you?",
  "What's is one thing we don't know about you?",
  "What's one career you wish you could have?",
  "What's one thing we could do to improve our virtual meetings?",
  "What's something that a lot of people are missing out on because they don't know about it?",
  "What's something that was once important but is now becoming less and less relevant?",
  "What's something you're looking forward to?",
  "What's the best advice you've ever heard?",
  "What's the best backhanded compliment you've heard / can think of on the spot?",
  "What's the best cake you've ever eaten?",
  "What's the best concert you've been to and why was it so good?",
  "What's the best day you've had recently?",
  "What's the best location to fully enjoy a good cup of coffee?",
  "What's the best or worst prank you've played on someone?",
  "What's the best piece of advice you have ever been given?",
  "What's the best piece of advice you've ever been given?",
  "What's the best sports game you've been to?",
  "What's the best thing you've got going on in your life at the moment?",
  "What's the best way to stay young?",
  "What's the biggest adventure you've been on?",
  "What's the biggest vehicle you've driven?",
  "What's the hardest part about working virtually for you? The easiest?",
  "What's the last great TV show or movie you wanted?",
  "What's the longest trip you've been on?",
  "What's the most amazing natural occurrence you've witnessed?",
  "What's the most annoying machine you must deal with regularly?",
  "What's the most creative thing you've done?",
  "What's the most delightful hotel or house you've stayed in on vacation?",
  "What's the most embarrassing fashion trend you used to rock?",
  "What's the most out-of-character thing you've ever done?",
  "What's the most outdated piece of tech you still use regularly?",
  "What's the most unique shop or restaurant you've been in?",
  "What's the noblest endeavor a person can dedicate their life to?",
  "What's the scariest horror movie or horror book monster?",
  "What's the silliest thing you are pretty good at?",
  "What's the strangest name someone you have met had?",
  "What's the weirdest food you've eaten?",
  "What's the weirdest food you've ever eaten?",
  "What's the weirdest way you have met someone?",
  "What's the worst advice you've been given?",
  "What's your best \"my coworkers are crazy\" story?",
  "What's your best scar story?",
  "What's your best scary story?",
  "What's your caffeinated beverage of choice? Coffee? Cola? Tea?",
  "What's your drink of choice? (Either alcoholic or non.)",
  "What's your earliest memory?",
  "What's your favorite breakfast cereal?",
  "What's your favorite car that you've owned?",
  "What's your favorite color and how does that color make you feel?",
  "What's your favorite family tradition?",
  "What's your favorite flower or plant?",
  "What's your favorite food combination?",
  "What's your favorite international food?",
  "What's your favorite island that you've visited?",
  "What's your favorite line from a book or a movie?",
  "What's your favorite month?",
  "What's your favorite Olympic sport to watch?",
  "What's your favorite place of all the places you've travelled?",
  "What's your favorite place you've ever visited?",
  "What's your favorite sandwich and why?",
  "What's your favorite scent?",
  "What's your favorite thing about the area/city/state you live in?",
  "What's your favorite tradition or holiday?",
  "What's your favorite type of day? (weather, temp, etc.)",
  "What's your favorite way to get in some exercise?",
  "What's your favorite way to spend time outdoors?",
  "What's your favorite way to waste time online?",
  "What's your idea of a great day?",
  "What's your idea of a great party?",
  "What's your number one tip for combating distractions when working from home?",
  "When is the most interesting period in history?",
  "When someone finds out what you do, or where you are from, what question do they always ask you?",
  "When you die, what do you want to be remembered for?",
  "Where are five places you really want to visit before you die?",
  "Where do you work most frequently from at home? Your office? Your kitchen table? The backyard? Your bed?",
  "Where have you traveled to?",
  "Where's the most surreal area you been to?",
  "Where's your favorite place to nap?",
  "Which actor would you want to play you in the movie about your life?",
  "Which band / artist - dead or alive would play at your funeral?",
  "Which song can you listen to all day long?",
  "Who had the most influence on you growing up?",
  "Who has been your most interesting/confusing/annoying neighbor?",
  "Who is the better businessman or business woman and why? (Example: Justin Timberlake or Justin Bieber?)",
  "Who is the funniest person in your family?",
  "Who is the most competitive person you know?",
  "Who is the most gifted person you know?",
  "Who is the most intelligent or creative person you know?",
  "Who is the most interesting person you've met and talked with?",
  "Who is the most interesting stranger you've met?",
  "Who is the oldest person you know personally? What interesting stories have they told you?",
  "Who is your favorite Disney hero or heroine? Would you trade places with them?",
  "Who was your childhood actor/actress crush?",
  "Who was your favorite teacher?",
  "Would you ever try space tourism, if you had the money for it?",
  "Would you go with aliens if they beamed down to Earth?",
  "Would you rather always be slightly late or super early?",
  "Would you rather be a superhero or the world's best chef?",
  "Would you rather be able to run at 100 miles per hour or fly at 10 miles per hour?",
  "Would you rather be an Olympic gold medallist or an astronaut?",
  "Would you rather be invisible or be able to read minds?",
  "Would you rather be the funniest or smartest person in the room?",
  "Would you rather give up your smartphone or your computer?",
  "Would you rather have invisibility or flight?",
  "Would you rather live in the ocean or on the moon?",
  "Would you rather live where it only snows or the temperature never falls below 100 degrees?",
  "Would you rather live without heat and AC or live without social media?",
  "Would you rather lose all of your money or all of your pictures?",
  "Would you rather meet your travel back in time to meet your ancestors or to the future to meet your descendants?",
  "Would you rather spend time with other people or at home alone?",
  "Would you rather watch a movie on your TV at home or on the big screen in the theater, and why?",
  "Would you ride in a zeppelin if given a chance?",
  "You can have an unlimited supply of one thing for the rest of your life, what is it? Sushi? Scotch Tape?",
  "You can have anyone fictional as your imaginary friend, who do you choose and why?",
  "You have to sing karaoke, what song do you pick?",
  "You have your own late night talk show, who do you invite as your first guest?",
  "You're going sail around the world, what's the name of your boat?"
];

export default (_req, res) => {
  res.statusCode = 200;
  res.json({ 
    question: questions[Math.floor(Math.random()*items.length)]
  });
}
