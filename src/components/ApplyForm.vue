<template>
    <div>
      <div v-for="job in jobs" :key="job.id">
        <div v-if="jobId == job.id">
          <section fluid class="page-title">
            <b-container>
              <h1>{{job.jobTitle}}</h1>
              <h2>{{job.location}}, {{job.city}}</h2>
            </b-container>
          </section>

          <section class="apply-form">
            <b-container>
              <h1>Apply for the position of "{{job.jobTitle}}"</h1>
              <b-form v-if="!submitted" @submit.prevent="validateBeforeSubmit" class="form">
              <label>*Personal information</label>
              <b-row>
                <b-col cols sm="12" lg="6">

                  <b-form-group
                    id="fname"
                    description="">
                    <b-form-input
                      id="fname-input"
                      type="text"
                      name="fname"
                      v-model="fname"
                      data-vv-as="First Name"
                      v-validate="{required:true, alpha:true, min:2}"
                      :class="{'input': true, 'is-invalid': errors.has('fname')}"
                      placeholder="First name" />
                    <span class="error" v-if="errors.has('fname')">{{errors.first('fname')}}</span>
                    <span v-show="errors.has('fname')" class="help is-danger">{{ errors.first('fname') }}</span>
                  </b-form-group>

                  <b-form-group
                    id="lname"
                    description=""
                  >
                    <b-form-input
                      id="lname-input"
                      type="text"
                      name="lname"
                      v-model="lname"
                      data-vv-as="Last Name"
                      :class="{'input': true, 'is-invalid': errors.has('lname')}"
                      v-validate="{required:true, alpha:true, min:2}"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                    placeholder="Last name" />
                    <span v-show="errors.has('lname')">{{ errors.first('lname') }}</span>
                  </b-form-group>
                    <b-form-group
                      id="dateofbirth"
                      description=""
                    >
                      <b-form-input
                        id="dateofbirth-input"
                        type="date"
                        v-model="dateOfBirth"
                        v-validate="'required|date_format:yyyy-MM-dd'"
                        name="dateOfBirth"
                        :class="{'input': true, 'is-invalid': errors.has('dateOfBirth')}"
                        data-vv-as="Date of Birth"
                        placeholder="Date of birth" />
                      <span v-show="errors.has('dateOfBirth')">{{ errors.first('dateOfBirth') }}</span>

                      {{dateOfBirth}}
                    </b-form-group>

                  <b-form-group>
                    <b-form-radio-group v-model="gender" :options="options" name="radioInline" />
                  </b-form-group>
                  <b-form-group
                    id="address"
                    description="">
                    <b-form-input
                      id="address-input"
                      type="text"
                      name="address"
                      data-vv-as="Address"
                      v-validate="'required'"
                      :class="{'input': true, 'is-invalid': errors.has('address')}"
                      v-model="address"
                      placeholder="Address" />
                    <span v-show="errors.has('address')">{{ errors.first('address') }}</span>
                  </b-form-group>

                  <b-form-group
                    id="househumber"
                    description=""
                  >
                    <b-form-input
                      id="housenumber-input"
                      type="text"
                      name="houseNumber"
                      v-validate="'required'"
                      v-model="houseNumber"
                      :class="{'input': true, 'is-invalid': errors.has('houseNumber')}"
                      data-vv-as="House number"
                      placeholder="House number" />
                    <span v-show="errors.has('houseNumber')">{{ errors.first('housenumber') }}</span>
                  </b-form-group>
                  <b-form-group
                    id="zipcode"
                    description=""
                  >
                    <b-form-input
                      id="zipcode-input"
                      type="text"
                      name="zipcode"
                      v-model="zipcode"
                      data-vv-as="Zipcode"
                      :class="{'input': true, 'is-invalid': errors.has('zipcode')}"
                      v-validate="{required:true, regex: zipcodeRegex}"
                      placeholder="Zipcode" />
                    <span v-show="errors.has('zipcode')">{{ errors.first('zipcode') }}</span>
                  </b-form-group>
                </b-col>

                <b-col cols sm="12" lg="6">
                  <b-form-group
                    id="email"
                    description="">
                  <b-form-input
                    id="email-input"
                    v-validate="'required|email'"
                    type="text"
                    name="email"
                    :class="{'input': true, 'is-invalid': errors.has('email')}"
                    data-vv-as="Email Address"
                    v-model="email"
                    placeholder="Enter email" />
                    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                  </b-form-group>

                  <label>*Motivation</label>
                  <b-form-group
                    id="motivation"
                    description="">
                  <b-form-textarea
                    id="textarea-rows"
                    v-validate="'required'"
                    v-model="motivation"
                    :class="{'input': true, 'is-invalid': errors.has('motivation')}"
                    data-vv-as="Motivation"
                    name="motivation"
                    placeholder="Tell us your motivation"
                    rows="8"
                  />
                    <span v-show="errors.has('motivation')">{{ errors.first('motivation') }}</span>
                  </b-form-group>

                  <label>*Upload your resume (.pdf, .doc(x), .jpg) max 4MB</label>

                  <input v-validate="'ext:jpeg,jpg,doc,docx,pfd|required|size:4100'" data-vv-as="Resume" name="resumeFile" type="file" @change="processFile"
                         :class="{'input': true, 'is-invalid': errors.has('resumeFile')}"
                  >
                  <div class="mt-3">
                    <b-button size="sm" variant="danger" @click="resumeFile = null" v-if="resumeFile !== null">X</b-button>
                    {{ resumeFile }}
                  </div>
                  <span v-show="errors.has('resumeFile')">{{ errors.first('resumeFile') }}</span>

                </b-col>
              </b-row>
                <b-row class="text-center">
                  <b-col>
                  </b-col>
                  <b-col cols="12" xs="12" lg="5"><b-button size="lg"  @click="validateBeforeSubmit" block variant="primary">Apply for this job</b-button>
                    &nbsp;
                      <a class="nav-link" @click="goToDetail(jobId)"> &larr; Go back to job details</a>
                  </b-col>
                  <b-col></b-col>
                </b-row>

              </b-form>
                <div v-else class="alert alert-success" role="alert">
                  <h5>Thank you</h5>
                  <p>Your application has been sent! We will get back to you as soon as possible</p>
                  <router-link class="nav-link" to="/jobs">&larr; Back home</router-link>
                </div>
            </b-container>
          </section>

          <section class="department-desc" v-for="department in departments" :key="department.id" v-if="department.id === job.department">
            <b-container class="inner-text">
            <b-row>
                <b-col cols="12" lg="6">
                  <h2>Application procedure</h2>
                  <ul>
                    <li v-for="procedure in applicationProcedure" :key="procedure.id">
                      {{procedure.step}}
                    </li>
                  </ul>
                  <a href="#">Continue reading &rarr;</a>
                </b-col>

                <b-col cols="12" lg="6"><h2>Got a questions?</h2>
                  <p>Please contact recruitment</p>
                  <p>T +31 612 345 678 <br>
                    Or apply@reqruitment.com
                  </p>
                </b-col>
            </b-row>
            </b-container>
          </section>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ApplyForm',
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    goToDetail (id) {
      this.$router.push({name: 'JobDetail', params: {jobId: id}})
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.submitted = true
          console.log(result)
        }
      })
    },
    processFile (event, index) {
      var fileName = event.target.files[0].name
      this.resumeFile = fileName
    }
  },
  data () {
    return {
      jobId: this.$route.params.jobId,
      title: 'jobDetail',
      // begin form inputs
      zipcodeRegex: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[A-Za-z.\s_-]{2}$/,
      fname: '',
      lname: '',
      dateOfBirth: '',
      gender: 1,
      options: [
        { text: 'Male', value: 1 },
        { text: 'Female', value: 2 }
      ],
      address: '',
      email: '',
      zipcode: '',
      houseNumber: '',
      resumeFile: null,
      motivation: '',
      submitted: '',
      valid: '',
      // end form inputs
      applicationProcedure: [
        {step: 'Use lap as chair steal the warm chair right after you get up', id: 1},
        {step: 'Use lap as chair steal the warm chair right after you get up', id: 2},
        {step: 'Use lap as chair steal the warm chair right after you get up', id: 3},
        {step: 'Use lap as chair steal the warm chair right after you get up', id: 4}
      ],
      departments: [ // dummy data
        {
          name: 'Retail',
          id: 1,
          desc: 'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
          'checked, be fabulous for the rest of the day - checked and refuse ' +
          'to leave cardboard box climb leg hide from vacuum cleaner when'
        },
        {
          name: 'Development',
          id: 2,
          desc: 'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
          'checked, be fabulous for the rest of the day - checked and refuse ' +
          'to leave cardboard box climb leg hide from vacuum cleaner when'
        }
      ],
      jobs: [ // dummy job data
        {
          id: 1,
          location: 'The Netherlands',
          city: 'Amsterdam',
          postDate: '20-03-2019',
          department: 1,
          jobTitle: 'Retail Development Coordinator',
          requirements: [
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 1},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 2},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 3},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 4},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 11},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 12},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 19},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 23},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 10}
          ],
          jobDescription: 'Be a nyan cat, feel great about it, ' +
          'be annoying 24/7 poop rainbows in litter box all day ' +
          'suddenly go on wild-eyed crazy rampage. Play time groom ' +
          'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
          'checked, be fabulous for the rest of the day - checked and refuse ' +
          'to leave cardboard box climb leg hide from vacuum cleaner when ' +
          'in doubt, wash dont wait for the storm to pass, dance in the rain. ' +
          'Trip on catnip destroy the blinds head nudges .',
          profile: [
            {description: 'Decide to want nothing to do with my owner today', id: 6},
            {description: 'Decide to want nothing to do with my owner today', id: 7},
            {description: 'Decide to want nothing to do with my owner today', id: 8},
            {description: 'Decide to want nothing to do with my owner today', id: 9}

          ]
        },
        {
          id: 2,
          location: 'Belgium',
          city: 'Antwerpen',
          postDate: '20-03-2019',
          department: 1,
          jobTitle: 'Retail Area Manager',
          requirements: [
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 1},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 2},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 3},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 4}
          ],
          jobDescription: 'Be a nyan cat, feel great about it, ' +
          'be annoying 24/7 poop rainbows in litter box all day ' +
          'suddenly go on wild-eyed crazy rampage. Play time groom ' +
          'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
          'checked, be fabulous for the rest of the day - checked and refuse ' +
          'to leave cardboard box climb leg hide from vacuum cleaner when ' +
          'in doubt, wash dont wait for the storm to pass, dance in the rain. ' +
          'Trip on catnip destroy the blinds head nudges .',
          profile: [
            {description: 'Decide to want nothing to do with my owner today', id: 1},
            {description: 'Decide to want nothing to do with my owner today', id: 2},
            {description: 'Decide to want nothing to do with my owner today', id: 3},
            {description: 'Decide to want nothing to do with my owner today', id: 4}
          ]
        }

      ]
    }
  }
}
</script>

<style scoped>
.apply-form{
  background:#f7f7f7;
  padding: 50px 0;
}
.apply-form .form-control,
.apply-form .form-control-file,
.apply-form .btn,
.apply-form .custom-checkbox{
  margin-bottom: 12px;
  border-radius: 0;
}
  label{
    font-weight: 700;
  }
  .form{
    padding: 50px 0;
  }
.department-desc{
  background-size: cover;
  display: flex;
  justify-content: center;
  background: url('~@/assets/retail-bg.jpg') no-repeat center center;
  padding-bottom: 80px;
}
.inner-text {
  background: #ffffff;
  text-align: left;
  margin: 50px 0;
  padding: 20px;
}
.inner-text > .row > .col-12{
  margin-bottom: 40px;
}
  .nav-link{
    cursor: pointer;
  }
</style>
