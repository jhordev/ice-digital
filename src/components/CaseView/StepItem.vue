<template>
  <li class="flex flex-col justify-center items-center self-stretch my-auto w-[80px] md:w-[95px]">
    <div class="flex overflow-hidden flex-col w-auto rounded-full">
      <div class="flex justify-center items-center bg-color-bg-2 w-[50px] h-[50px] md:w-[60px] md:h-[60px] p-[10px]">
        <div class="flex justify-center items-center bg-color-gray-700 rounded-full w-full h-full">
          {{ number }}
        </div>
      </div>
    </div>
    <div>
      <span class="icon-[material-symbols--arrow-drop-up]"></span>
      <div class="bg-color-bg-2 py-[5px] px-[8px] md:px-[10px] rounded-full">
        <span class="mobile-body">{{ status }}</span>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StepItem',
  props: {
    number: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
});
</script>
