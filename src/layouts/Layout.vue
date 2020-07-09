<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        

        <q-toolbar-title class="absolute-center">
          Awsome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
        v-for="nav in navs"
        :to="nav.to"
        :icon="nav.icon"
        :label="nav.label" />
        <!-- <q-route-tab
        to="settings"
        icon="settings" 
        label="Settings" /> -->
      </q-tabs>      
    </q-footer>
<!--:breakpoint="767" hide the menu on the left is smaller than 767 px -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="767"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-4"
        >
          Navigation</q-item-label>
        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->
        <q-item
        v-for="nav in navs"
        :key="nav.label"
        :to="nav.to"
        class="text-grey-4"
        exact
        clickable>
        <q-item-section avatar>
          <q-icon :name="nav.icon" />
        </q-item-section> 
        <q-item-section avatar>
          <q-item-label>{{ nav.label }}</q-item-label>
        </q-item-section>
        </q-item> 

        <!-- <q-item
        to="/settings"
        exact
        clickable>
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section> 

        <q-item-section avatar>
          <q-item-label>Settings</q-item-label>
        </q-item-section>
        </q-item>  -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MyLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'ToDo',
          caption: '',
          icon: 'list',
          link: '/'
        },
        {
          title: 'Settings',
          caption: '',
          icon: 'settings',
          link: '/settings'
        }
      ],
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  methods:{

  }
}
</script>


<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }

  .q-drawer{
      .q-router-link--exact-active {
        color: white !important;
      }
  } 
}
</style>