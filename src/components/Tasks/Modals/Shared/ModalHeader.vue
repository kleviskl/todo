<template>
    <q-card-section class="row">
          <div class="text-h6"><slot></slot></div>
          <q-space />
           <q-btn 
           flat 
           round 
           dense
           v-close-popup
           color="primary" 
           icon="close" />
        </q-card-section>

</template>

<script>
export default {
    
}
</script>