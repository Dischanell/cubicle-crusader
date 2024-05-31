const recipientList: string[] = ['Sally', 'Eustaquio']
const genericGreetings: string[] = ['To Whom It May Concern', 'Greetings', 'Hi everyone', 'Respected team members', 'Esteemed Colleagues', 'Good morning', 'Good afternoon'];
const recipientGreetings: string[] = ['Dear', 'Hi', 'To the attention of', 'Salutations,'];
const genericClosings: string[] = ['Sincerely'];


export function getRecipient(): string | null {
    if (Math.round(Math.random() * 1) == 0) return null;

    const randomIndex = Math.floor(Math.random() * recipientList.length);
    return recipientList[randomIndex];
}

export function getGreeting(recipient?: string | null): string {
    const greetings: string[] = recipient ? recipientGreetings : genericGreetings;

    const randomIndex = Math.floor(Math.random() * greetings.length);

    return recipient ? `${greetings[randomIndex]} ${recipient},` : `${greetings[randomIndex]},`;
}

export function getClosing(): string {
    const randomIndex = Math.floor(Math.random() * genericClosings.length);
    return `${genericClosings[randomIndex]},`;
}