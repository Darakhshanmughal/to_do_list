import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todoQuestion = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your todo?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to more add in your todo?",
            default: "true"
        }
    ]);
    todo.push(todoQuestion.firstQuestion);
    console.log(todo);
    condition = todoQuestion.secondQuestion;
}
;
