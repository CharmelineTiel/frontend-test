<template>
  <div>
    <b-container fluid class="page-title">
      <b-container>
        <h1>Jobs</h1>
        <h2>check them out</h2>
      </b-container>
    </b-container>

    <b-container class="job-list-container">
      <h5>Open positions</h5>
      <b-list-group v-for="job in jobs" :key="job.id">
        <b-list-group-item>
          <router-link :to="/jobs/+job.department+'/'+job.id" v-bind="job">
            <h4 @click="goToDetail(job.id)" >{{job.jobTitle}}</h4>
            <p>{{job.location}}, {{ job.city }}</p>
          </router-link>
        </b-list-group-item>
      </b-list-group>

        <h4>Nothing found?</h4>
        <p>Sign up for a Career Alert</p>

    </b-container>
  </div>
</template>

<script>

import jobdetail from '@/views/JobDetail'
export default {
  name: 'JobList',
  components: {
    jobdetail
  },
  data: function () {
    return {
      departments: [
        {name: 'Retail',
          id: 1,
          desc: 'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
            'checked, be fabulous for the rest of the day - checked and refuse ' +
            'to leave cardboard box climb leg hide from vacuum cleaner when'},
        {name: 'Development',
          id: 2,
          desc: 'yourself 4 hours - checked, have your beauty sleep 18 hours - ' +
            'checked, be fabulous for the rest of the day - checked and refuse ' +
            'to leave cardboard box climb leg hide from vacuum cleaner when'}
      ],
      jobs: [ // dummy job data
        {
          id: 1,
          location: 'The Netherlands',
          city: 'Amsterdam',
          postDate: '20-03-2019',
          department: 'Retail',
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
          department: 'Retail',
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

      ],
      methods: {
        goToDetail (id) {
          this.$router.push({name: 'JobDetail', params: {jobId: id}})
        }
      }
    }
  }
}
</script>

<style scoped>
.job-list-container{
    text-align: center;
    margin-top: 50px;
    padding-bottom:60px;
  }
  .list-group-item{
    margin-bottom: 10px;
  }
</style>
