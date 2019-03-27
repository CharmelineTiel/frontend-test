<template>
  <div>
    <div v-for="job in jobs" :key="job.id" v-if="jobId == job.id">
        <section class="job-meta">
      <b-container>
        <b-row>
          <b-col lg="4" md="4" xs="12">{{ job.location }}, {{ job.city }}</b-col>
          <b-col lg="4" md="4" xs="12" v-for="department in departments" :key="department.id" v-if="department.id === job.department">{{ department.name}}</b-col>
          <b-col lg="4" md="4" xs="12">{{ job.postDate}}</b-col>
        </b-row>
      </b-container>
    </section>

    <section class="job-details">
      <b-container>
        <p><router-link class="nav-link" to="/jobs">&larr; Back home</router-link></p>

        <h1>{{job.jobTitle}}</h1>
          <h4>Job description</h4>
          {{job.jobDescription}}
          <h4>Tasks and responsibilities</h4>
          <ul>
            <li v-for="requirement in job.requirements" :key="requirement.id">
              {{requirement.rq}}
            </li>
          </ul>
          <h4>Profile</h4>
          <ul>
            <li v-for="skill in job.profile" :key="skill.id">
              {{skill.description}}
            </li>
          </ul>

          <b-container class="apply-btn">
              <b-col></b-col>
              <b-col>
                <b-button variant="primary" size="lg" @click="apply(job.id)">Apply for this job</b-button>
                <b-button variant="outline-primary" size="lg">
                  +
                </b-button>
              </b-col>
              <b-col></b-col>
          </b-container>
        <socialwidget />
      </b-container>
    </section>
        <b-container class="job-list-container">
          <h4 v-for="department in departments" :key="department.id" v-if="department.id === job.department">Open positions in {{department.name}}</h4>
          <b-list-group v-for="job in jobs" :key="job.id" v-if="jobId == job.id">
          </b-list-group>
          <div v-else>
            <b-list-group-item>
              <a class="nav-link" @click="goToDetail(job.id)">
                <h4>{{job.jobTitle}}</h4>
                <p>{{job.location}}, {{ job.city }}</p>
              </a>
            </b-list-group-item>
          </div>

          <h4>Nothing found?</h4>
          <b-button v-b-modal.modal1>Sign up for a career alert</b-button>

          <!-- Modal Component -->
          <b-modal id="modal1" title="Sign up for a career alert">
           <b-input-group class="mt-3 btn btn-default">
              <b-form-input placeholder="Email Address" />
            </b-input-group>
          </b-modal>

        </b-container>
    <section class="department-desc" v-for="department in departments" :key="department.id" v-if="department.id === job.department">
       <b-container>
         <div class="inner-text">
        <h2>About our {{ department.name }} department</h2>
        <p>{{ department.desc }} </p>
        <a href="#">Continue reading &rarr;</a>
         </div>
         <b-embed
           type="iframe"
           aspect="16by9"
           src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
           allowfullscreen
         />
      </b-container>

    </section>
      </div>
  </div>
</template>

<script>
import socialwidget from '@/components/SocialWidget'
export default {
  name: 'JobDetailPage',
  components: {
    socialwidget
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    apply (id) {
      this.$router.push({name: 'ApplyForm', params: {jobId: id}})
    },
    goToDetail (id) {
      this.$router.push({name: 'JobDetail', params: {jobId: id}})
      this.$router.go(0)
    }
  },
  data () {
    return {
      jobId: this.$route.params.jobId,
      title: 'jobDetail',
      departments: [
        {name: 'Retail',
          id: 4,
          desc: 'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
            'checked, be fabulous for the rest of the day - checked and refuse ' +
            'to leave cardboard box climb leg hide from vacuum cleaner when'},
        {name: 'Development',
          id: 3,
          desc: 'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
            'checked, be fabulous for the rest of the day - checked and refuse ' +
            'to leave cardboard box climb leg hide from vacuum cleaner when'}
      ],
      jobs: [ // dummy job data
        {
          id: 1,
          location: 'The Netherlands',
          city: 'Amsterdam',
          postDate: '27-03-2019',
          department: 4,
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
          postDate: '27-03-2019',
          department: 4,
          jobTitle: 'Retail Area Manager',
          requirements: [
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 11},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 42},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 73},
            {rq: 'Use lap as chair steal the warm chair right after you get up', id: 67}
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
            {description: 'Decide to want nothing to do with my owner today', id: 65},
            {description: 'Decide to want nothing to do with my owner today', id: 24},
            {description: 'Decide to want nothing to do with my owner today', id: 33},
            {description: 'Decide to want nothing to do with my owner today', id: 44}
          ]
        }

      ]

    }
  }
}
</script>

<style scoped>
  .job-details{
    background: #f7f7f7;
    border-top: 2px solid #dad7d7;
    border-bottom: 2px solid #dad7d7;
    min-height: 100%;
    height: 100%;
    padding: 50px 0;
  }
  .job-meta{
    text-align: center;
    min-height: 70px;
    display: flex;
    font-weight: 700;
    margin-top: 140px;
    padding-bottom: 20px;
  }
  .job-meta ul {list-style-type: square;}
  .job-meta li {float:left;margin-left:25px; list-style-type: none; align-items: center}

.job-list-container{
  padding: 30px 15px;
}
.apply-btn{
  text-align: center;
  padding: 50px 0;
}
  .other-jobs{
    padding: 20px;
  }
.job-meta > .container > .row > .col-lg-4{
    margin-bottom: 20px;
  }
  .nav-link{
    cursor: pointer;
  }
</style>
