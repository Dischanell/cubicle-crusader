<script setup lang="ts">
import { getRecipient, getGreeting, getClosing } from '@/emailTemplate';

// player variables
const name: string = 'David';
const department: string = 'Dept. of Lorem Ipsum';

// pseudo-randomly generated
const recipient: string | null = getRecipient();
const greeting: string = getGreeting(recipient);
const closing: string = getClosing();
</script>

<template>
    <div class="email-container">
        <div class="email">
            <div class="email-header">
                <p class="from">To: employees@cc.com</p>
                <p class="subject">Subject: Re: Re: test</p>
            </div>
            <div class="email-body">
                <p>{{ greeting }}</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt incidunt illum unde,
                    necessitatibus quidem dolor aspernatur. Labore itaque nostrum repellendus dolores sint aliquid
                    libero neque praesentium quis totam. Officiis?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores architecto fugit facere dicta sequi
                    laborum, corporis eos ratione dolore esse voluptatum inventore veritatis. Hic eos quasi architecto
                    natus, velit ratione!</p>
                <p>{{ closing }}</p>
                <p>{{ name }}</p>
                <p>{{ department }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.email-container {
    background-color: #f3f3f3;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.email {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
}

.email-header {
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

.from {
    font-weight: bold;
}

.subject {
    font-style: italic;
}

.email-body {
    line-height: 1.6;
}

.email-body p {
    margin: 10px 0;
}
</style>