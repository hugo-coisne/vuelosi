<script setup lang="ts">
import ButtonComponent from '../commons/ButtonComponent.vue'
import CardListComponent from '../commons/cards/CardListComponent.vue'
import TalentCardComponent from '../commons/cards/TalentCardComponent.vue'
import TitleSectionComponent from '../commons/TitleSectionComponent.vue'
import type { Talent } from '@/model/Talent'

const talentsSamplePath = 'src/assets/images/talents-sample/'
const {
  talents = [
    {
      image: talentsSamplePath + 'adrien-talent.webp',
      firstname: 'Adrien',
      lastname: 'Deblock',
      job: 'Lead Dev',
      roles: [
        {
          name: 'Dev',
          tags: 'Code quality, Code review, Audit, ...',
        },
        {
          name: 'Devops',
          tags: 'GCP, AWS, CI/CD, GitOps, ...',
        },
      ],
      technos: ['java', 'node', 'vue', 'docker', 'beer', 'react'],
    },
    {
      image: talentsSamplePath + '/dylan-talent.webp',
      firstname: 'Dylan',
      lastname: 'Deleplanque',
      job: 'Développeur Fullstack',
      roles: [
        {
          name: 'Dev',
          tags: 'Code quality, Code review, Fullstack, ...',
        },
        {
          name: 'Devops',
          tags: 'AWS, CI/CD, GitOps, ...',
        },
      ],
      technos: ['java', 'docker', 'python', 'bigdata'],
    },
    {
      image: talentsSamplePath + '/guillaume.jpeg',
      firstname: 'Guillaume',
      lastname: 'lastname',
      job: 'Développeur Fullstack',
      roles: [
        {
          name: 'Dev',
          tags: 'Code quality, Code review, Audit, ...',
        },
      ],
      technos: ['electron', 'rocket', 'thumb', 'beer', 'react'],
    },
    {
      image: talentsSamplePath + '/hugues.jpg',
      firstname: 'Hugues',
      lastname: 'Dassonval',
      job: 'Happiness manager',
      roles: [
        {
          name: 'Communication',
          tags: 'LinkedIn, Instagram, Communication interne',
        },
        {
          name: 'Administratif',
          tags: 'Contrat, Process',
        },
        {
          name: 'Evenementiel',
          tags: 'Soirée, Afterwork',
        },
      ],
      technos: ['beer'],
    },
    {
      image: talentsSamplePath + '/kevin-talent.webp',
      firstname: 'Kevin',
      lastname: 'Sansen',
      job: 'CEO',
      roles: [
        {
          name: 'Coach',
          tags: 'Consultants, managers, Startup ...',
        },
        {
          name: 'Formateur',
          tags: 'Marketing de soi, Pitch, communication ...',
        },
      ],
      technos: ['electron', 'rocket', 'thumb', 'beer'],
    },
    {
      image: talentsSamplePath + '/noe-talent.webp',
      firstname: 'Noé',
      lastname: 'Pamula',
      job: 'Developpeur & CTO',
      roles: [
        {
          name: 'Dev',
          tags: 'Gestion qualité logiciel, Facilitateur technique',
        },
        {
          name: 'Big Data',
          tags: 'Architecture Big Data, devops, cloud',
        },
        {
          name: 'Formateur',
          tags: 'Scrum, Cloud, Docker, CI/CD, Data',
        },
      ],
      technos: ['java', 'docker', 'python', 'bigdata', 'beer'],
    },
    {
      image: talentsSamplePath + '/photo-eddy-talosi.png',
      firstname: 'Eddy',
      lastname: 'Derampe',
      job: 'CEO Lille',
      roles: [
        {
          name: 'Management',
          tags: 'Consultants, carrières, accompagnement',
        },
        {
          name: 'Recrutement',
          tags: 'Opportunités, talents, associés',
        },
        {
          name: 'Commerce',
          tags: 'Régie, centre de service, formations',
        },
      ],
      technos: ['java', 'node', 'vue', 'docker', 'beer', 'react'],
    },
    {
      image: talentsSamplePath + '/sebastien-talent.webp',
      firstname: 'Sebastien',
      lastname: 'lastname',
      job: 'Tech Leader',
      roles: [
        {
          name: 'Dev',
          tags: 'Code quality, Code review, Audit, Architecture',
        },
        {
          name: 'Fullstack',
          tags: 'front, back, GCP, AWS, CI/CD',
        },
        {
          name: 'Formateur',
          tags: 'Angular, React, Java, devops',
        },
      ],
      technos: ['beer', 'rocket', 'electron', 'node', 'docker'],
    },
  ],
  title = 'Expert & Coach',
  subtitle = 'Notre team',
  description = [
    'Voici une partie de la famille Talosi !',
    'Une team composée :',
    '- D\’experts capable de former et de challenger.',
    '- De coachs qui sont là pour t\’accompagner dans ta carrière et tes envies.',
    'Et surtout, une communauté de passionnés qui ne partage pas qu’une entreprise mais bien plus !!!',
  ],
} = defineProps<{
  talents?: Talent[]
  title?: string
  subtitle?: string
  description?: string[]
}>()
</script>

<template>
  <section id="talents">
    <section class="container our-talents">
      <div class="row">
        <div class="col-md-12 col-lg-4 gs_reveal gs_reveal_fromLeft">
          <TitleSectionComponent :subtitle="subtitle" :title="title" />
          <div class="mt-3 mb-3">
            <p>
              Voici une partie de la famille Talosi !
              <br /><br />
              Une team composée :<br />
              - D’experts capable de former et de challenger.<br />
              - De coachs qui sont là pour t’accompagner dans ta carrière et tes
              envies.<br />
              <br />
              Et surtout, une communauté de passionnés qui ne partage pas qu’une
              entreprise mais bien plus !!!
            </p>
          </div>
          <ButtonComponent
            id="rejoin-us-intro"
            class="mt-3"
            size="large"
            type="secondary"
            routerLink="/contact"
            >Rejoindre l'aventure
          </ButtonComponent>
        </div>
        <div class="col-md-12 col-lg-8 gs_reveal gs_reveal_fromRight">
          <CardListComponent
            :gradientColor="'#EBF0F5'"
            :componentCount="talents.length"
          >
            <TalentCardComponent v-for="talent of talents" :talent="talent" />
          </CardListComponent>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
