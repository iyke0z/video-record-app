<template>
    <div>
        <div class="topbar">
            <div class="menu">
                <div class="identity">
                    <div class="icon">
                        <img src="@/assets/swarm.svg" alt="" srcset="">
                    </div>
                    <p class="identityText">Adilo</p>
                </div>
                
                <router-link to="">Projects</router-link>
                <router-link @click="openDropdown" to="#" active-class="bold" class="active">
                Tools & App <i class="fa fa-angle-down" aria-hidden="true"></i></router-link>
               
                <router-link to="">Channels</router-link>
                <router-link to="">Contacts</router-link>
                <router-link to="">Analytics</router-link>
                <router-link to="">Settings</router-link>
                <router-link to="" class="help">Help</router-link>                
                 <!--DROPDOWN ITEMS <ul class="dropdown" style="zindex: 1000000000000"> -->
                    <div v-if="dropdown">
                        <li @click="openDropdown" class="dropdownItem"><router-link to="/snapbyte">Snapbyte Recorder</router-link> </li>
                        <li @click="openDropdown" class="dropdownItem">Audio Bounce</li>
                        <li @click="openDropdown" class="dropdownItem">Sugar Voice</li>
                    </div>
                <!-- </ul> -->

            </div>
            <div class="profile">
                <div class="vl"></div>
                <div class="userdetails">
                    <div class="picholder">
                        <img src="@/assets/test.jpg" alt="">
                        <!-- image -->
                    </div>
                    <div class="dataholder">
                        <span class="name">Ikenna Anikwe</span> <br />
                        <span class="email">eddyiyke3@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidebar">
                <div class="sidecon" style="background-color: rgb(203 205 211);" active>
                    <div class="menu">
                        <span><img src="@/assets/video-player.svg" alt=""></span>
                        <router-link  to="">My Recordings</router-link>
                    </div>
                </div>
                <div class="sidecon bg-transparent">                
                    <!-- <div class="menu"> -->
                        <span><i class="fas fa-code-merge"></i></span>
                        <router-link style="background-color: transparent;" to="">Requested</router-link>
                    <!-- </div> -->
                </div>
        </div>         	
        
    </div>
</template>

<script>
export default {
	data() {
		return {
			show:0,        
			submenu:0,
			dropdown:false,
			fullname:null
		}
	},
	methods: 
	{
		openDropdown(){
            this.dropdown = !this.dropdown
        }
	},

	created() {
		// this.getAuth()
	},
}


</script>
<style scoped>
    @import url('@/assets/style.css');
</style>