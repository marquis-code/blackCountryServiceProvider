 <template>
    <main>
      <div class="flex items-center p-4 bg-gray-100 border-t relative border-gray-200">
        <button
          class="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors absolute top-7 left-12"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33325 10.0005V12.1206C3.33325 14.8247 3.33325 16.1769 4.07164 17.0926C4.22082 17.2776 4.38934 17.4462 4.57436 17.5954C5.49018 18.3338 6.84227 18.3338 9.54642 18.3338C10.1344 18.3338 10.4283 18.3338 10.6976 18.2388C10.7536 18.219 10.8084 18.1963 10.862 18.1706C11.1196 18.0475 11.3274 17.8396 11.7432 17.4239L15.6903 13.4767C16.172 12.9951 16.4128 12.7541 16.5398 12.4479C16.6666 12.1416 16.6666 11.801 16.6666 11.1197V8.3338C16.6666 5.19107 16.6666 3.61973 15.6903 2.64341C14.8077 1.76078 13.4387 1.67609 10.862 1.66797M10.8333 17.9171V17.5005C10.8333 15.1434 10.8333 13.9649 11.5655 13.2326C12.2978 12.5005 13.4763 12.5005 15.8333 12.5005H16.2499" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.99992 4.99935H3.33325M6.66659 1.66602V8.33268" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <input
          type="text"
          v-model="localMessage"
          @keydown.enter="emitMessage"
          class="flex-1 ml-4 p-2 py-6 text-[#E4E7EC] pl-20 bg-[#292929] rounded-full focus:outline-none"
          placeholder="Type a message here..."
        />
        <button
          @click="emitMessage"
          class="ml-4 text-white p-3 transition-colors absolute top-5 right-6"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#5B8469"/>
            <path d="M15.9247 11.5258L23.0581 15.0925C26.2581 16.6925 26.2581 19.3092 23.0581 20.9092L15.9247 24.4758C11.1247 26.8758 9.1664 24.9092 11.5664 20.1175L12.2914 18.6758C12.4747 18.3092 12.4747 17.7008 12.2914 17.3342L11.5664 15.8842C9.1664 11.0925 11.1331 9.12584 15.9247 11.5258Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5332 18H17.0332" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
      </div>
    </main>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    modelValue: String // v-model in parent is bound to 'modelValue'
  });
  
  const emit = defineEmits(['update:modelValue', 'sendMessage']); // Use the 'update:modelValue' convention for v-model
  const localMessage = ref(props.modelValue);
  
  watch(() => props.modelValue, (newVal) => {
    localMessage.value = newVal;
  });
  
  const emitMessage = () => {
    if (!localMessage.value.trim()) return; // Prevent sending empty messages
    emit('sendMessage', localMessage.value); // Emit the sendMessage event
    emit('update:modelValue', ''); // Reset the v-model value in the parent
    localMessage.value = ''; // Clear local input
  }
  </script>
  