<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
         <slot />
    </div>
</template>


<script lang="ts" setup>
// Props for controlling the modal's visibility
const props = defineProps({
    isOpen: {
    type: Boolean,
    required: true,
    default: false
},
});

// Emit event to close the modal
const emit = defineEmits(['close']);

// Close modal function
const closeModal = () => {
emit('close');
};

</script>