import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1' : {
            name: 'Go to sleep',
            completed: false,
            dueDate: '2020/06/20',
            dueTime: '19:30'
        },
        'ID2' : {
            name: 'Get orange',
            completed: false,
            dueDate: '2020/06/22',
            dueTime: '14:00'
        },
        'ID3' : {
            name: 'Go to shpia',
            completed: false,
            dueDate: '2020/06/24',
            dueTime: '16:00'
        }
    }
}

const mutations = {
    updateTask(state, payload){
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id){
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload){
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload){
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id){
        commit('deleteTask', id)
    },
    addTask({ commit }, task){
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}