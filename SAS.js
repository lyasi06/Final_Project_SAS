const prompt = require("prompt-sync")();

const candidates = [
	{ cin: "AB123456", lastName: "Boushaba", firstName: "Soufiane", politicalParty: "Indépendant", age: 40,
    voters: [] },
  { cin: "CD234567", lastName: "El Amrani", firstName: "Fatima Zahra", politicalParty: "PJD", age: 35,
    voters: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", lastName: "Chraibi", firstName: "Younes", politicalParty: "RNI", age: 45,
    voters: [] },
  { cin: "GH456789", lastName: "Bennani", firstName: "Salma", politicalParty: "PAM", age: 29,
    voters: ["IJ567890"] },
  { cin: "IJ567890", lastName: "Ouahbi", firstName: "Karim", politicalParty: "Istiqlal", age: 52,
    voters: [] },
  { cin: "KL678901", lastName: "Ziani", firstName: "Nadia", politicalParty: "Indépendant", age: 33,
    voters: [] },
  { cin: "MN789012", lastName: "Tazi", firstName: "Hamza", politicalParty: "USFP", age: 60,
    voters: ["QR901234"] },
  { cin: "OP890123", lastName: "Idrissi", firstName: "Meryem", politicalParty: "PJD", age: 27,
    voters: [] },
  { cin: "QR901234", lastName: "Berrada", firstName: "Omar", politicalParty: "RNI", age: 38,
    voters: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", lastName: "Fassi", firstName: "Khadija", politicalParty: "PAM", age: 31,
    voters: [] },
];


function Addcandidate()
{
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
}


function addmultiple()
{
	console.log("==== add multiple candidates ====");
			const num = Number(prompt("How many Candidates u wanna enter: "))
			for(let i = 1; i <= num; i++)
			{
				Addcandidate();
			}
}

function displayall()
{
	console.log("=== Display options:");
				console.log("1: Display all");
				console.log("2: sorted by votes");
				console.log("3: Filter by party ");
				let Displaychoice = prompt("enter ur choice: ")
				if(Displaychoice === "1")
				{
					if(candidates.length === 0)
					{
						console.log("There is no Candidate yet")
					}
					else
					{
						let count = 1;
						for(let a of candidates)
						{
							console.log(`==== Candidate: ${count} ====`);
							console.log(`CIN: ${a.cin}`)
							console.log(`Name: ${a.firstName} ${a.lastName}`);
							console.log(`Political Party: ${a.politicalParty}`);
							console.log(`Age: ${a.age}`);
							console.log(`Votes: ${a.voters.length}`);
							count++;
						}
					}
				}
				else if(Displaychoice === "2")
				{
					if(candidates.length === 0)
					{
						console.log("there is no candidate yet")
					}
					else
					{
						let sorted = [];
						let used = [];

						for(let i = 0; i < candidates.length; i++)
						{
							let maxIndex = -1;
							let maxVotes = -1;
							for(let j = 0; j < candidates.length; j++)
							{
								if(!used.includes(j) && candidates[j].voters.length > maxVotes)
								{
									maxVotes = candidates[j].voters.length;
									maxIndex = j;
								}

							}
							sorted.push(candidates[maxIndex]);
							used.push(maxIndex);
						}
						let count = 1;
						for(let s of sorted)
						{
							console.log(`==== Candidate: ${count} ====`);
							console.log(`CIN: ${s.cin}`)
							console.log(`Name: ${s.firstName} ${s.lastName}`);
							console.log(`Political Party: ${s.politicalParty}`);
							console.log(`Age: ${s.age}`);
							console.log(`Votes: ${s.voters.length}`);
							count++;
						}

					}
				}
				else if(Displaychoice === "3")
				{
					let party = prompt("Political party filter: ")
					let filtered = []
					for(let i of candidates)
					{
						if(i.politicalParty === party)
						{
							filtered.push(i);
						}

					}
					if(candidates.length === 0)
					{
						console.log("there is no conadidate yet")
					}
					else
					{
						let count = 1;
						for(let x of filtered)
						{
							console.log(`==== Candidate: ${count} ====`);
							console.log(`CIN: ${x.cin}`)
							console.log(`Name: ${x.firstName} ${x.lastName}`);
							console.log(`Political Party: ${x.politicalParty}`);
							console.log(`Age: ${x.age}`);
							console.log(`Votes: ${x.voters.length}`);
							count++;
						}
					}
				}
				else
				{
					console.log("Invalid choice");
				}
				
}

function voteforcandidate()
{
	let voterCIN = prompt("Enter ur CIN: ");
						let alreadyvoted = false;
						for(let i of candidates)
						{
							if(i.voters.includes(voterCIN))
							{
								alreadyvoted = true;
								break;
							}

						}
						if(alreadyvoted)
						{
							console.log("you already voted !!");
						}
						else
							{
								let candidatecin = prompt("Candidate CIN: ");
							let found = null;
							for(let k of candidates)
							{
								if(k.cin === candidatecin)
								{
									found = k
									break;
								}
							}
							if(found === null)
							{
								console.log("Condidate not found");
							}
							else
							{
								found.voters.push(voterCIN);
								console.log("vote is done");
							}
						}
}
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
			Addcandidate();
			break;
		case "2":
			addmultiple();
			break;
			case "3":
				displayall();
				break;
				case "4":
					voteforcandidate();
					break;
					case "9":
						console.log("good byee have a nice day")
						running = false;
						break;
						default:
							console.log("invalid choice");
						}
					}
