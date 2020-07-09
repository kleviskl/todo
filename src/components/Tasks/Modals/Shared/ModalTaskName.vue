<template>
    <div class="row q-mb-sm">
          <q-input 
          outlined 
          :value="name" 
          @input="$emit('update:name', $event)"
          :rules="[val => !!val || 'Field is required']"
          label="Task name"
          autofocus
          ref="name"
          class="col">
            <template v-slot:append>
                <!-- clear icon -->
                <q-icon 
                v-if="name"
                name="close" @click="$emit('update:name', '')" 
                class="cursor-pointer" />
            </template>
          </q-input>
        </div>

</template>

<script>
export default {
    props: ['name']
}
</script>