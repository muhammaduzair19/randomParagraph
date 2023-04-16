randomParagraph = document.querySelector(".randomParagraph");
inputVal = document.querySelector(".count").value
generatebtn = document.querySelector(".generatebtn")
let arr = [
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    },
    {
        "para": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quibusdam tempora magnam, ad odit beatae voluptatem. Quasi impedit esse necessitatibus quos praesentium minus magnam nesciunt quo. Tenetur officia doloremque accusamus nam ullam facilis explicabo aliquid, quas, quis, harum expedita dolore fuga ut esse magni corrupti fugit. Id nostrum amet voluptatem!'
    }
]
paragraphArray = [

    "Although Scott said it didn't matter to him, he knew deep inside that it did. They had been friends as long as he could remember and not once had he had to protest that something Joe apologized for doing didn't really matter. Scott stuck to his lie and insisted again and again that everything was fine as Joe continued to apologize. Scott already knew that despite his words accepting the apologies that their friendship would never be the same.",

    "He walked down the steps from the train station in a bit of a hurry knowing the secrets in the briefcase must be secured as quickly as possible. Bounding down the steps, he heard something behind him and quickly turned in a panic. There was nobody there but a pair of old worn-out shoes were placed neatly on the steps he had just come down. Had he past them without seeing them? It didn't seem possible. He was about to turn and be on his way when a deep chill filled his body.",

    "Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.",

    "She's asked the question so many times that she barely listened to the answers anymore. The answers were always the same. Well, not exactly the same, but the same in a general sense. A more accurate description was the answers never surprised her. So, she asked for the 10,000th time, 'What's your favorite animal?' But this time was different. When she heard the young boy's answer, she wondered if she had heard him correctly.",

    `Twenty-five years Dana had been waiting. She tried to be patient during that time but she hadn't always managed to be as patient as she'd like. But today the opportunity had finally come. The thing she always imagined would make her the happiest person in the world was about to happen. She didn't know why at this specific time she all of a sudden felt sick inside.`]

generatebtn.addEventListener("click", () => {
    for (i = 1; i <= inputVal; i++) {
        let para = document.createElement("p");
        randomParagraph.append(para);
        para.innerHTML = arr[i].para
    }
    // let paragraph = document.createElement("p");
    // randomParagraph.appendChild(paragraph)
    // paragraph.classList.add("paraText")
    // let paragraphRange = paragraphArray.slice(0, inputVal.value)
    // // let space = paragraphRange.join(${lineBreak})
    // let paraText = document.querySelector(".paraText")
    // paraText.textContent = paragraphRange;
})