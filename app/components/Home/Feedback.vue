<script setup>
const feedbacks = [
  {
    name: 'Mark Palvetzian',
    email: '',
    quote: 'Great selection of options in the many categories offered with the unique decoration designs and ways to make the logoes stand out.Great service and always a return call or answer when asked.',
  },
  {
    name: 'Isaac Silberman',
    email: 'isilberman@tovya.com',
    quote: 'Customer service went the extra mile to make sure that a very tight delivery would work. They stayed on top of the order.  Client was happy with the service and quality and insisted that future orders were from spector.',
  },
  {
    name: 'Eric Lam',
    email: 'eric@safeguard.ca',
    quote: 'Services consistently spectacular, love the rocket service my clients never expect to receive the pens so quickly each time cuz I never tell them I just used a rocket service and exceeds their expectations thank you.',
  },
];
</script>

<template>
  <section class="main-container relative mt-24 py-8">
    <p class="mb-8 text-center text-5xl font-bold uppercase">Real Feedback. Real Results.</p>

    <div class="mx-auto">
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(feedback, index) in feedbacks" :key="index" class="flex h-48 flex-col items-center justify-between rounded bg-white p-4 text-center shadow-lg">
          <p>"{{ feedback.quote }}"</p>
          <p class="bold italic">{{ feedback.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
