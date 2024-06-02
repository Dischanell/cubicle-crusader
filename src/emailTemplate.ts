const recipientList: string[] = ['Sally', 'Eustaquio', 'Samantha', 'John', 'Patricia'];
const genericGreetings: string[] = [
    'To Whom It May Concern', 'Greetings', 'Hi everyone', 
    'Respected team members', 'Esteemed Colleagues', 'Good morning', 'Good afternoon'
];
const recipientGreetings: string[] = [
    'Dear', 'Hi', 'To the attention of', 'Salutations,'
];

const genericFollowUp: string[] = [
    'I hope this email finds you well amidst the crisis of the mysterious printer jam epidemic',
    'I trust you are thriving despite the perpetual coffee machine malfunctions',
    'I hope your day is as productive as our latest quarterly review',
    'I hope this email reaches you before the next corporate restructuring'
];
const recipientFollowUp: string[] = [
    'As per our last conversation', 'Following up on our recent discussion', 
    'As discussed in the recent all-hands meeting', 'Regarding our previous email exchange'
];

const emailBodies: string[] = [
    'It is with a spirit of continuous improvement that I reach out today regarding a potential impediment to peak employee performance within our esteemed department. As you are well aware, optimal hydration is a cornerstone of cognitive function and sustained productivity. However, it has come to my attention, through a series of keen observations during my acclimation phase, that our departmental hydration infrastructure – specifically, the breakroom water dispenser – appears to be experiencing a level of operational inefficiency.',
    'In the interest of maintaining our high standards of excellence, I must bring to your attention a matter of utmost urgency. The breakroom refrigerator, a crucial element of our office ecosystem, has been observed to emit a low-level hum that, while not immediately disruptive, has the potential to erode employee morale over prolonged exposure.',
    'During a recent audit of our breakroom facilities, I discovered that the microwave’s "popcorn" button does not pop all kernels efficiently. This inconsistency in kernel popping might seem trivial, but it symbolizes a larger issue of reliability and trust in our appliances, which could reflect poorly on our departmental image.',
    'It has come to my attention that the stapler in the shared supply room occasionally jams, causing minor yet cumulative delays in our document processing tasks. While each incident is brief, the aggregate impact could be significant, potentially affecting our overall productivity metrics.'
];

const genericClosings: string[] = [
    'Sincerely', 'Warm regards', 'Yours truly', 
    'With appreciation', 'Respectfully', 'Best regards'
];

export function getRecipient(): string | null {
    return Math.random() < 0.5 ? null : recipientList[Math.floor(Math.random() * recipientList.length)];
}

export function getGreeting(recipient?: string | null): string {
    const greetings: string[] = recipient ? recipientGreetings : genericGreetings;
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return recipient ? `${greetings[randomIndex]} ${recipient},` : `${greetings[randomIndex]},`;
}

export function getFollowUp(recipient?: string | null): string {
    const followUps: string[] = recipient ? recipientFollowUp : genericFollowUp;
    const randomIndex = Math.floor(Math.random() * followUps.length);
    return followUps[randomIndex];
}

export function getEmailBody(): string {
    const randomIndex = Math.floor(Math.random() * emailBodies.length);
    return emailBodies[randomIndex];
}

export function getClosing(): string {
    const randomIndex = Math.floor(Math.random() * genericClosings.length);
    return `${genericClosings[randomIndex]},`;
}