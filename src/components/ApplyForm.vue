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
              <h1>Apply for the position of {{job.jobTitle}}</h1>
              <b-form v-if="!submitted" class="form">
              <label>*Personal information</label>
              <b-row>
                <b-col cols sm="12" lg="6">
                  <b-form-group
                    id="fname"
                    description="">
                    <b-form-input
                      id="fname-input"
                      type="text"
                      :state="fnameState"
                      v-model="fname"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                      placeholder="First name" />
                    <b-form-invalid-feedback :state="fnameState">
                      Please fill in at least 2 characters (letters only)
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="lname"
                    description=""
                  >
                    <b-form-input
                      id="lname-input"
                      type="text"
                      v-model="lname"
                      :state="lnameState"
                      aria-describedby="inputLiveHelp inputLiveFeedback"
                    placeholder="Last name" />
                    <b-form-invalid-feedback :state="lnameState">
                      Please fill in at least 2 characters (letters only)
                    </b-form-invalid-feedback>
                  </b-form-group>
                    <b-form-group
                      id="dateofbirth"
                      description=""
                    >
                      <b-form-input
                        id="dateofbirth-input"
                        type="date"
                        v-model="dateOfBirth"
                        :state="dateofBirthState"
                        placeholder="Date of birth" />
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
                      v-model="address"
                      :state="addressState"
                      placeholder="Address" />
                    <b-form-invalid-feedback :state="addressState">
                      Please fill in your address
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <b-form-group
                    id="househumber"
                    description=""
                  >
                    <b-form-input
                      id="housenumber-input"
                      type="text"
                      v-model="houseNumber"
                      :state="houseNumberState"
                      placeholder="House number" />
                    <b-form-invalid-feedback :state="houseNumberState">
                      Please fill in your house number
                    </b-form-invalid-feedback>
                  </b-form-group>
                  <b-form-group
                    id="zipcode"
                    description=""
                  >
                    <b-form-input
                      id="zipcode-input"
                      type="text"
                      v-model="zipcode"
                      :state="zipcodeState"
                      placeholder="Zipcode" />
                    <b-form-invalid-feedback :state="zipcodeState">
                      Please fill in your zipcode
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>

                <b-col cols sm="12" lg="6">
                  <b-form-group
                    id="email"
                    description="">
                  <b-form-input
                    id="email-input"
                    type="email"
                    v-model="email"
                    :state="emailState"
                    placeholder="Enter email" />
                  <b-form-invalid-feedback :state="emailState">
                    Please fill in a valid email address
                  </b-form-invalid-feedback>
                  </b-form-group>

                  <label>*Motivation</label>
                  <b-form-group
                    id="motivation"
                    description="">
                  <b-form-textarea
                    id="textarea-rows"
                    v-model="motivation"
                    :state="motivationState"
                    placeholder="Tell us your motivation"
                    rows="8"
                  />
                    <b-form-invalid-feedback :state="motivation">
                      Please fill in your motivation
                    </b-form-invalid-feedback>
                  </b-form-group>

                  <label>*Upload your resume (.pdf, .doc(x), .jpg) max 4MB</label>
                  <b-form-group
                    id="resume"
                    description="">
                  <b-form-file
                    v-model="resumeFile"
                    accept=".pdf"
                    :state="fileState"
                    placeholder="Choose a file..."
                    drop-placeholder="Drop file here..."
                  />
                  <div class="mt-3">
                    <b-button class="btn-sm" @click="resumeFile = null" v-if="resumeFile !== null">X</b-button>
                    {{ resumeFile ? resumeFile.name : '' }}
                  </div>
                    <b-form-invalid-feedback>
                      Please upload your resume
                    </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
                <b-row class="text-center">
                  <b-col></b-col>
                  <b-col cols="5"><b-button size="lg"  block variant="primary" v-on:click.stop.prevent="submit">Apply</b-button>
                  </b-col>
                  <b-col></b-col>
                </b-row>

              </b-form>
                <div v-else class="alert alert-success" role="alert">
                  <h5>Thank you</h5>
                  <p>Your application has been sent!</p>
                  <router-link class="nav-link" to="/">Back home</router-link>
                </div>
            </b-container>
          </section>

      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ApplyForm',
  computed: {
    fnameState () {
      return this.fname.length > 2 && this.stringRegex.test(this.fname)
    },
    lnameState () {
      return this.lname.length > 2 && this.stringRegex.test(this.lname)
    },
    emailState () {
      return this.emailRegex.test(this.email)
    },
    addressState () {
      return this.address !== ''
    },
    zipcodeState () {
      return this.zipcodeRegex.test(this.zipcode)
    },
    houseNumberState () {
      return this.houseNumber !== ''
    },
    motivationState () {
      return this.motivation !== ''
    },
    dateofBirthState () {
      return this.dateOfBirth !== ''
    },
    fileState () {
      if (this.resumeFile !== null) {
        var extension = this.fileRegex.exec(this.resumeFile)[1]
      }
      return extension === 'doc' ||
        extension === 'docx' || extension === 'pdf' || extension === 'jpg'
    }
  },
  methods: {
    goBack: function () {
      this.$router.go(-1)
    },
    submit: function () {
      this.validate()
      if (this.valid) {
        // submit to fake server
        this.submitted = true
      }
    },
    validate: function () {
      if (this.fnameState && this.lnameState && this.emailState && this.addressState &&
        this.zipcodeState && this.motivationState && this.houseNumberState && this.dateOfBirth &&
        this.fileState) {
        this.valid = true
      }
    }
  },
  data () {
    return {
      jobId: this.$route.params.jobId,
      title: 'jobDetail',
      // begin form inputs
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      zipcodeRegex: /^[1-9][0-9]{3} ?(?!sa|sd|ss)[A-Za-z.\s_-]{2}$/,
      fileRegex: /(?:\.([^.]+))?$/,
      stringRegex: /^[a-zA-Z ]*$/,
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
      sendCopy: '',
      submitted: '',
      valid: '',
      // end form inputs
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
</style>
