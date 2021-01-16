<template>
 <transition name="fade">
   <div v-if="loading" class="preloader">
     <!-- <div class="logo">
       <img alt="Vue logo" src="../assets/logo.png">
     </div> -->
     <!-- <p>Vue JS. Simple Preloader</p> -->
     <div class="circles">
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
       <div class="circle"></div>
     </div>
   </div>
 </transition>
</template>

<script>
 export default {
   data: () => {
     return {
       loading: true
     }
   },
   mounted(){
     this.showToggle();
   },
   methods: {
     showToggle(){
       setTimeout(()=> {
         this.loading = false
       }, 1000)
     }
   }
  }
</script>

<style lang="scss" scoped>
  .preloader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    
      .logo {
        width: 12.5rem;
        height: 12.5rem;
      }
      p {
        font-weight: 600;
        margin-top: 1rem;
      }
      .circles {
        display: flex;
        margin-top: 1rem;
        .circle {
          width: 1rem;
          height: 1rem;
          margin: 1rem;
          background-color: #000;
          border-radius: 50%;
          animation-name: scaleIn;
          animation-duration: .7s;
          transform: scale(0);
          &:nth-child(1){
             animation-delay: 0s;
          }
           
          &:nth-child(2){
            animation-delay: .05s;
          }
            
          &:nth-child(3) {
            animation-delay: .1s;
          }
            
          &:nth-child(4) {
            animation-delay: .15s;
          }
            
          &:nth-child(5) {
            animation-delay: .2s;
          }
            
        }
      }
  }
  .fade-enter-active .fade-leave-active {
    transition: opacity 1s ease-in;
    .logo {
      animation-name: scaleOut;
      animation-duration: 1s;
    }
    p {
      animation-name: scaleOut;
      animation-duration: 1s;
    }
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @keyframes scaleOut {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>