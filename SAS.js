const prompt = require("prompt-sync")();

const candidates = [];

let running = true;

while(running)
{
	console.log("===== Menu =====");
	console.log("1. Add a new candidate");
	console.log("2. Add several candidates at once");
	console.log("3. Display the list of candidates");
	console.log("4. Vote for a candidate");
	console.log("5. Edit a candidate's information");
	console.log("6. Delete a candidate");
	console.log("7. Search for candidates");
	console.log("8. Election statistics");
	console.log("9. Exit");
	const choice = prompt("Your choice: ");

	switch(choice){
		case "1":
			console.log("==== add candidate ====");
			const cin = prompt("CIN: ");
			const lastName = prompt("LAST NAME: ");
			const firstName = prompt("FIRST NAME: ");
			let politicalParty = prompt("Political Party: ");
			if(politicalParty === "")
			{
				politicalParty = "Independent";
			}
			let age = Number(prompt("your age: "));
			let isfound = false;
			for(let i of candidates)
			{
				if(i.cin === cin)
				{
					isfound = true;
					break;
				}
			}
			if(isfound)
			{
				console.log("CIN already exist");
			}

			else 
			{
				while(isNaN(age) || age <= 18 )
				{
					console.log("age must be greater than 18 and only numbers")
					age = Number(prompt("try again: "));
			}

				candidates.push({
					cin: cin,
				lastName: lastName,
				firstName: firstName,
					politicalParty: politicalParty,
					age: age,
				voters: []
				})
				console.log("==== cantidade added !! ====");
			}
			break;
		case "2":
			console.log("==== add multiple candidates ====");
			const num = Number(prompt("How many Candidates u wanna enter: "))
			for(let i = 1; i <= num; i++)
			{
				console.log(`===Candidate ${i}`);
				const cin1 = prompt("CIN: ");
				const lastName1 = prompt("LAST NAME: ");
				const firstName1 = prompt("FIRST NAME: ");
				let politicalParty1 = prompt("Political Party: ");
				if(politicalParty1 === "")
				{
					politicalParty1 = "Independent";
				}
				let age1 = Number(prompt("your age: "));
				let isfound1 = false;
				for(let c of candidates)
				{
					if(c.cin === cin1)
					{
						isfound1 = true;
						break;
					}
				}
				if(isfound1)
				{
					console.log("CIN already exist");
				}
				else
				{
					while(isNaN(age1) || age1 <= 18 )
					{
						console.log("age must be greater than 18 and only numbers")
						age1 = Number(prompt("try again: "));
					}
					candidates.push({
						cin: cin1,
						lastName: lastName1,
						firstName: firstName1,
						politicalParty: politicalParty1,
						age: age1,
						voters: []
					})
					console.log("==== cantidade added !! ====");
				}
			}
			break;
			case "3":
				console.log("=== Candidates list ===")
				if(candidates.length === 0)
					{
						console.log("There is no Candidate yet")
					}
					else
					{
						let count = 1;
						for(let a of candidates)
						{
							console.log(`Candidate: ${count}`);
							console.log(`CIN: ${a.cin}`)
							console.log(`Name: ${a.firstName} ${a.lastName}`);
							console.log(`Poltical Party: ${a.politicalParty}`);
							console.log(`Age: ${a.age}`);
							console.log(`Votes: ${a.voters.length}`);
							count++;
						}
					}
					break;
					case "9":
					console.log("good byee have a nice day")
					running = false;
					break;
					default:
						console.log("invalid choice");
					}
				}