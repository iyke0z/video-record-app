<template>
    <div>
        <nav-bar />
        <div class="main">               
                <TransitionGroup name="content">                                     
                    <div class="smallmenu">                        
                       <router-link to="/index" class="text-capitalize">{{ this.$route.path.substr(1,) }}</router-link>
                       <router-link to="#"><i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                       <router-link to="">{{ this.$route.name }}</router-link>
                    </div>

                    <div class="holder">
                        <div class="title">
                            My Recordings {{ myRecordings.length }}
                        </div>
                        <div class="filter">
                            <li> <i class="fas fa-sort"></i>  By Date</li>                            
                            <li><i class="fa fa-filter" aria-hidden="true"></i>
                            Add filter <i class="fa fa-angle-down" aria-hidden="true"></i></li> 
                            <li class="bg-info text-light"> <i class="fa fa-video-camera" aria-hidden="true"></i> New Request</li>
                            <li class="bg-danger text-light"> <i class='fa-solid fa-record-vinyl'></i> Sart Recording</li>
                        </div>
                    </div>
                    <div class="index">
                        <img src="fileimage.png" alt="" style="width: 150px; height: 130px;">
                        <h3 class="mt-2">Say hello to the world</h3>
                        <center>
                            <p style="width:50%">Record your first video/audio and share it what your team, friends, followers and customers.</p>                        
                        </center>
                        <div class="inlist">
                            <li class="bg-danger text-light float-start"> <i class='fa-solid fa-record-vinyl'></i> Sart Recording</li>
                            <li class="bg-info text-light float-start"> <i class="fa fa-video-camera" aria-hidden="true"></i> New Request</li>
                        </div>
                    </div>
                    <div class="indexbottom">
                        <img src="indeximg.png" alt="" style="width: 300px; height: 180px;">
                        <div class="text">
                            <h4>Want more controls & better quality recording?</h4>
                            <button class="col-8 btn btn-info text-light">Download the desktop recorder</button>
                        </div>
                    </div>
                </TransitionGroup>                            
              </div>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation.vue';
    export default{          
        components:{NavBar},
        data() {
            return {
                myRecordings:[]
            }
        },

        methods: {
            geturl(id){
                this.myRecordings.forEach(element => {                
                    if(element.id == id){
                        console.log(element.recording)
                        return element.recording
                    }
                });
            },
            toggleMenu(){
                let toggle = document.querySelector('.toggle');            
                let navigation = document.querySelector('.navigation')
                let main = document.querySelector('.main')            
                navigation.classList.toggle('active')
                toggle.classList.toggle('active')
                main.classList.toggle('active')			
		    },

      },
        created() {
          //
        },
    }
</script>

<style scoped>
li{
    list-style-type: none;
}
</style>