<script setup lang="ts">
import { getRecipient, getGreeting, getFollowUp, getEmailBody, getClosing } from '@/emailTemplate';
import { ref, onMounted, onUnmounted, computed } from 'vue';

// player variables
const name = 'David';
const title = 'Junior Caffeine Acquisition Specialist';
const department = 'Dept. of Lorem Ipsum';

// pseudo-randomly generated
const recipient = getRecipient();
const greeting = getGreeting(recipient);
const followUp = getFollowUp(recipient);
const emailBody = getEmailBody();
const closing = getClosing();

onMounted(() => {
  window.addEventListener('keydown', keydownHandler);
});

onUnmounted(() => {
  window.removeEventListener('keydown', keydownHandler);
});

const i = ref(0);
const si = ref(0);

const everythingYouNeedToType = [greeting, followUp, emailBody, closing, name, title, department];

const keydownHandler = (e: KeyboardEvent) => {
  if (e.key === everythingYouNeedToType[si.value].charAt(i.value)) {
    i.value++;
    console.log(e.key);

    if (i.value >= everythingYouNeedToType[si.value].length) {
      i.value = 0;
      si.value++;

      console.log(`si: ${si.value}`);
      console.log('poggies');
      if (si.value >= everythingYouNeedToType.length) {
        alert('holy shit you did it!');
      }
    }
  }
};

const getHighlightedText = (text: string, currentIndex: number, paragraphIndex: number) => {
  return text.split('').map((char, idx) => ({
    char,
    highlight: paragraphIndex < si.value || (paragraphIndex === si.value && idx < currentIndex)
  }));
};

const highlightedTexts = computed(() => {
  return everythingYouNeedToType.map((text, index) => {
    return getHighlightedText(text, index === si.value ? i.value : 0, index);
  });
});
</script>

<template>
    <div class="email-container">
      <div class="email">
        <div class="email-header">
          <p class="from">To: employees@cc.com</p>
          <p class="subject">Subject: Re: Re: Re: Urgent: Departmental Hydration Bottleneck</p>
        </div>
        <div class="email-body">
          <template v-for="(text, textIndex) in highlightedTexts" :key="textIndex">
            <span v-for="(charObj, charIndex) in text" :key="charIndex">
              <span :style="{ opacity: charObj.highlight ? 1 : 0.5 }">{{ charObj.char }}</span>
            </span>
            <br v-if="textIndex < highlightedTexts.length - 1" />
          </template>
        </div>
      </div>
    </div>
  </template>
  

  <style scoped>
  .email-container {
      color: #000;
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