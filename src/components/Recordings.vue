<template>
    <div>
        <nav-bar />
        <div class="main">  
                     
                <TransitionGroup name="content">                                     
                    <div class="smallmenu">                        
                       <router-link to="/index" class="text-capitalize">Snapbyte</router-link>
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
                            <li @click="openModal" class="bg-danger text-light"> <i class='fa-solid fa-record-vinyl'></i> Sart Recording</li>
                        </div>

                        
                       

                    </div>
                    <table class="table table-borderless mt-5 ">
                        <thead>
                            <tr>
                                <th scope="col" style="width:2%" class="text-start h6">Recordings</th>
                                <th scope="col" style="width: 30%" class="text-start h6">Title</th>
                                <th scope="col" style="width:5%" class="text-start h6">Views</th>
                                <th scope="col" style="width:7%" class="text-start h6">Size</th>
                                <th scope="col" style="width:11%" class="text-start h6">Last Modified</th>
                                <th scope="col" style="width:6%" class="text-start h6"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="recording in myRecordings" :key="recording">
                                <td class="text-start">
                                    <img :src="recording.recording" alt="" class="videoholder">
                                </td>
                                <td class="text-start">
                                    {{ recording.title }} <br />
                                    <span class="description">
                                        {{recording.description}}
                                    </span>
                                </td>
                                <td class="text-start">{{ recording.views }}</td>
                                <td class="text-start">{{ recording.size }}</td>
                                <td class="text-start">{{ recording.last_modified }}</td>
                                <th class="text-start"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></th>
                            </tr>
                        </tbody>
                        </table>                        
                </TransitionGroup>  
                <div>
                </div>
                <transition name="myModal">
                    <div class="myModal">
                        <div class="card col-12 mb-5 shadow"  v-if="showModal">
                            <div class="card-header bg-white">
                                <h4 class="text-start">New Recording
                                <span style="cursor:pointer;float:right" @click="hideModal"><i class="fa fa-times" aria-hidden="true"></i></span></h4>
                                
                            </div>
                                <div class="card-body">
                                    <p class="text-start"><b>Save the recording in</b></p>
                                    <select class="form-control" id="">
                                        <option value=""></option>
                                        <option value="">Recording 2</option>
                                        <option value="">Recording 3</option>
                                    </select>

                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td class="text-start">Record screen</td>
                                                <td class="togglebtn">
                                                    <span @click="toggleBtn(1)" v-if="toggle[0]['value']"><i class="fas fa-toggle-on text-success "></i></span>
                                                    <span @click="toggleBtn(1)" v-if="!toggle[0]['value']"><i class="fas fa-toggle-off text-secondary"></i></span>                           
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="text-start">Record camera</td>
                                                <td class="togglebtn">
                                                    <span @click="toggleBtn(2)" v-if="toggle[1]['value']"><i class="fas fa-toggle-on text-success"></i></span>
                                                    <span @click="toggleBtn(2)" v-if="!toggle[1]['value']"><i class="fas fa-toggle-off text-secondary"></i></span>                           
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="text-start">Record mic</td>
                                                <td class="togglebtn">
                                                    <span @click="toggleBtn(3)" v-if="toggle[2]['value']"><i class="fas fa-toggle-on text-success"></i></span>
                                                    <span @click="toggleBtn(3)" v-if="!toggle[2]['value']"><i class="fas fa-toggle-off text-secondary"></i></span>                           
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>                         
                                    
                                    <button @click="startRecording" style="border-radius:20px ;" class="col-12 btn btn-info text-light">
                                        Start Recording
                                    </button>


                                </div>                
                        </div>                              
                    </div>
                </transition>            

                                        
              </div>

    </div>
</template>

<script>
import NavBar from '@/components/Navigation.vue';
    export default{          
        components:{NavBar},
        data() {
            return {
                showModal:false,
                toggle:[
                    {id:1, value:true },
                    {id:2, value:false },
                    {id:3, value:false },
                ],
                myRecordings:[
                    {id:1, recording:'img4.jpg', title:'Getting it right the first time', description:'Try starting, you never know what you might discover', views:'250', size:'923kb', last_modified:'3 months ago'},
                    {id:2, recording:'img5.webp', title:'Getting it right the second time', description:'Keep pushing on, a wise person accepts he does not know it all', views:'324', size:'923kb', last_modified:'3 months ago'},
                    {id:3, recording:'img2.jpg', title:'Getting it right the third time', description:'Consistency is key, it is better to do it once everyday than 5times in 2 weeks', views:'809', size:'923kb', last_modified:'3 months ago'},
                    {id:4, recording:'img1.jpg', title:'Getting it right the fourth time', description:'Life is a gift, take it seriously and do not joke with it', views:'1000', size:'923kb', last_modified:'3 months ago'},
                    {id:5, recording:'img3.jpg', title:'Getting it right the fifth time', description:'Desicion is easy to make, the real issue is, are you ready to live with the consequences?', views:'1500', size:'923kb', last_modified:'3 months ago'}
                ]
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

            toggleBtn(id){
                this.toggle.forEach(element =>{
                    if(element.id == id){
                        element.value = !element.value
                    }
                })
            },

            openModal(){
                console.log('show')
                this.showModal = true
            },
            hideModal(){
                this.showModal = false
            },
            toggleMenu(){
                let toggle = document.querySelector('.toggle');            
                let navigation = document.querySelector('.navigation')
                let main = document.querySelector('.main')            
                navigation.classList.toggle('active')
                toggle.classList.toggle('active')
                main.classList.toggle('active')			
		    },
            startRecording(){
                this.$router.push('/live')
            }

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

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>