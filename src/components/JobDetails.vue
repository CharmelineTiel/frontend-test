<template>
    <div>
      <b-container fluid>
      <b-row>
      <b-col></b-col>
      <b-col cols="8" class="job-meta">
        <ul>
        <li>{{ jobs[0].location }}</li>
        <li>{{ jobs[0].department}}</li>
        <li>{{ jobs[0].postDate}}</li>
        </ul>
      </b-col>
      <b-col></b-col>
      </b-row>
      </b-container>

      <b-container fluid class="job-details">
        <b-row>
          <b-col></b-col>
          <b-col cols="8">
            <h1>{{jobs[0].jobTitle}}</h1>
            <h4>Job description</h4>
            {{jobs[0].jobDescription}}
            <h4>Tasks and responsibilities</h4>
            <li v-for="requirement in jobs[0].requirements" :key="requirement.id">
              {{requirement.rq}}
            </li>
            <h4>Profile</h4>
            <li v-for="skill in jobs[0].profile" :key="skill.id">
              {{skill.description}}
            </li>
            <b-col lg="5" class="pb-2"><b-button variant="primary">Apply Now</b-button></b-col>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
      </div>
</template>

<script>
export default {
  name: 'jobDetails',
  data: function () {
    return {
      jobs: [
        {
          id: 1,
          location: 'The Netherlands',
          postDate:  '20-03-2019',
          department:  'Retail',
          jobTitle: 'Retail Development Coordinator',
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
        },
        {
          id: 2,
          location: 'Belgium',
          postDate:  '20-03-2019',
          department:  'Retail',
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
.job-details{
  background: #f7f7f7;
  padding:50px 0;
}
.job-meta ul {list-style-type: square; text-align: center; height: 60px;}
.job-meta li {float:left;margin-left:25px; list-style-type: none;}
</style>
