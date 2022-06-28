// Create Speakers Section
const featuredSpeakers = [
  {
    id: 1,
    speakerImage: './images/speaker-1.jpeg',
    speakerName: 'Caleb Pope',
    speakerTitle: 'Artist',
    speakerDescription: 'Grassroots activist who believes that change is possible. Using hashtag slogans to inspire a movement where he calls on men to participate in curbing gender violence. His truth gained him many views and interactions from victims who have gained from him.',
  },
  {
    id: 2,
    speakerImage: './images/speaker-2.jpg',
    speakerName: 'Yvonne Habiba',
    speakerTitle: 'Writer & Newspaper Columnist',
    speakerDescription: 'In the autobiographical book Masaibu Yetu Habiba shares her collected stories of rape, prostitution, and human trafficking. She helps us understand the impacts of speaking out.',
  },
  {
    id: 3,
    speakerImage: './images/speaker-3.jpg',
    speakerName: 'Ruth Odumbe',
    speakerTitle: 'Gender Activist',
    speakerDescription: 'She is involved in many projects, including “Tutimize Ahadi,” which addresses gender-based violence and violence against children and embodies the commitments by governments, the UN, and other bodies to achieve the 2030 Agenda for Sustainable Development.',
  },
  {
    id: 4,
    speakerImage: './images/speaker-4.jpg',
    speakerName: 'Diana Migan',
    speakerTitle: 'Senior Advocate LSK',
    speakerDescription: 'Migan is a youth development expert and does this through YouthHubAfrica, a nonprofit organization that aims to support young people in Africa involved in social change.',
  },
  {
    id: 5,
    speakerImage: './images/speaker-5.jpg',
    speakerName: 'Stern Madegwa',
    speakerTitle: 'Human Rights Journalist',
    speakerDescription: 'He works in his capacity for the engagement of key civil society organizations to collect and disseminate data, contributing to access to information. And, working with key decision-makers on best practices for media engagement.',
  },
  {
    id: 6,
    speakerImage: './images/speaker-6.jpg',
    speakerName: 'Mushie Kalita',
    speakerTitle: 'Radio Presentor & Media Personality',
    speakerDescription: 'Mushie, is known for her activism against GBV. Mushie is a singer, presenter, and actress from Nairobi, Kenya and uses her platform to disseminate important information.',
  },
];
function createSpeakers(featuredSpeakers) {
  const speakersList = document.querySelector('.speakers-section');
  for (let i = 0; i < featuredSpeakers.length; i += 1) {
    const speakers = `
    <ul class="speakers-list">
        <li class="speaker-sp">
            <div class="speaker-image-${featuredSpeakers[i].id}"></div>
            <div class="speaker-info">
            <h3 class="speaker-name">${featuredSpeakers[i].speakerName}</h3>
            <p class="speaker-title">${featuredSpeakers[i].speakerTitle}</p>
            <p class="speaker-description">${featuredSpeakers[i].speakerDescription}</p>
            </div>
        </li>
    </ul>`;
    speakersList.innerHTML += speakers;
  }
}
document.addEventListener('DOMContentLoaded', createSpeakers(featuredSpeakers));
// Create Hamburger Section
const hamburgerIcon = document.querySelector('.hamburger-menu');
const exitButton = document.querySelector('.exit-btn');
const upperSection = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.navbar-items');
// Open Mobile Menu
hamburgerIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  exitButton.style.display = 'block';
  upperSection.style.display = 'block';
  hamburgerIcon.style.display = 'none';
});
// Close Mobile Menu
exitButton.addEventListener('click', () => {
  hamburgerIcon.style.display = 'block';
  mobileMenu.style.display = 'none';
  exitButton.style.display = 'none';
  upperSection.style.display = 'none';
});