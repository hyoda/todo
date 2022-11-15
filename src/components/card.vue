<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps({
  todo: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits([
  'change',
  'delete'
])
const done = computed(() => props.todo.done)

function toggleTodo () {
  const value = {
    ...props.todo,
    done: !props.todo.done
  }
  emit('change', value)
}

function deleteTodo () {
  emit('delete', props.todo.id)
}

</script>

<template>
  <li class="Card">
    <span>
      <input class="checkbox" type="checkbox" :value="done" @click="toggleTodo" :checked="done">
    </span>
    <span :class="{'done': done}" class="title">{{ todo.title }}</span>
    <span v-if="done" @click="deleteTodo()" class="material-icons desc">
      close
    </span>
  </li>
</template>

<style scoped>

</style>
