<template>
    <div class="wrapper-content wrapper-content--fixed">
        <section>
            <div class="container">

                <!-- wrapper -->
                <div class="notify__wrapper">

                    <!-- title -->
                    <div class="notify-title">
                        <p>Notify App</p>
                        <!-- svg -->
                        <!-- <svg @click="getNotifyLazy" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z"/></svg> -->
                        <svg @click="getNotifyLazy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/></svg>
                    </div>


                    <!-- <loader /> -->
                    <div>
                        <!-- <preloader v-show="loading" :width="90" :height="90"></preloader> -->
                        <!-- <loading-progress v-show="loading"
                            :progress="progress"
                            :indeterminate="indeterminate"
                            :counter-clockwise="counterClockwise"
                            :hide-background="hideBackground"
                            shape="semicircle"
                            size="64"
                            /> -->
                    </div>
                    <div class="error" v-if="error">
                        <p>{{ error }}</p>
                    </div>
                    <!-- notify -->
                    <div class="notify__content">
                        <notify v-if="!loading && !error" :messages="messages" />
                    </div>
                    
                </div>
            </div>
        </section>
  </div>
</template>

<script>
import notify from '@/components/Notify'
//import preloader from '@/components/UI/Preloader'

import axios from 'axios'

export default {
    components: {notify},
    data() {
        return {
            loading: false,
            error: null
            //messages: [
                // { title: 'message 1'},
                // { title: 'message 2'},
                // { title: 'message 3'},
                // { title: 'message 4'},
                // { title: 'message 5'},
                // { title: 'message 6'}
            //]
        }
    },
    computed: {
        messages() {
            return this.$store.getters.getMessageMain
        }
    },
    mounted() {
        this.getNotifyLazy()
    },
    methods: {
        getNotifyLazy() {
            this.messages = []
            this.loading = true
            setTimeout(() => {
                this.getNotify()
            },1000)
        },
        getNotify() {
            //this.loading = true
            axios
                .get("http://vote/api.php")
                .then(response => {
                    let res = response.data,
                        messages = [],
                        messagesMain = [];
                    console.log(response.data)
                    // flter
                    for(let i = 0; i < res.length; i++) {
                        if (res[i].main) messagesMain.push(res[i])
                        else messages.push(res[i])
                        
                    }
                    console.log({messages,messagesMain})
                    
                    this.$store.dispatch('setMessage', messages)
                    this.$store.dispatch('setMessageMain', messagesMain)
                    //console.log(res)
                    //this.messages = res
                })
                .catch(error => {
                    console.log(error)
                    this.error = 'Error: Network Error'
                })
                .finally( () => (this.loading = false))
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
}
.notify__wrapper {
    width: 400px;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
}
.notify__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
}
.notify-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 24px;
    }
    svg {
        cursor: pointer;
    }
}
.error {
    color: red;
    text-align: center;
}
</style>