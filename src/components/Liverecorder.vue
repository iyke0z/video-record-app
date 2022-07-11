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
        <div class="live">
            <p class="text-dark"><i class="text-danger fa fa-circle" aria-hidden="true"></i> Live Preview</p>
            <!-- <divclass> -->
                <video width="700" height="400" class="livebox" src=""  controls></video>
            <!-- </div>                 -->
            <center>
                <button @click="startRecording" style="border-radius: 20px; margin-top:2%; margin-bottom: 20%; width:15%" class="btn btn-info mb-5 mt-5 text-light" >Start recording</button>
            </center>
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
        },
        startRecording(){
            const start = async()=> {
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video:{
                        mediSource:"screen"
                    }
                })
                const data=[]

                const mediaRecorder= new MediaRecorder(stream)

                mediaRecorder.ondataavailable = (e)=>{
                    data.push(e.data)
                }
                mediaRecorder.start()
                mediaRecorder.onstop = (e)=> {
                    document.querySelector('video').src=URL.createObjectURL(
                        new Blob(data, {
                            type: data[0].type
                        })
                    )
                }
            }


            start()
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