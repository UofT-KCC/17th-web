/**
 * @warning
 * 수정 O
 *
 * @description
 * 부서 리스트.
 * 최소 한명의 임원은 넣어주세요!
 */
export const deptList: string[] = [
  'presidents',
  'academic',
  'external relations',
  'finance',
  'marketing',
  'media',
  'programming',
  'social',
];

/**
 * @warning
 * 수정 O
 *
 * @description
 * 실제 임원 정보. 형식에 맞춰서 써주세요!
 * intro 는 패러그래프로 분리해서 배열에 넣어주세요!
 */
export const execData: {
  dept: string;
  position: string;
  name: string;
  program: string;
  imageSrc: string;
  intro: string[];
}[] = [
  {
    dept: 'presidents',
    position: 'president',
    name: '강서현',
    imageSrc: '/assets/images/exec-headshots/강서현.webp',
    program: 'Math & PhySci',
    intro: [
      '안녕하세요. UTKCC 17기 회장 강서현입니다.',
      '15기 Social 인턴을 시작으로, 끈끈한 커뮤니티 안에서 지난 2년간 UTKCC와 학부생활을 함께하며 유의미한 시간을 많이 보낼 수 있었습니다. 열정이 넘치는 사람들과 함께 커리어 세미나, Case Competition, 커리어 성장 프로그램, 그리고 선배님들과 함께한 네트워킹 이벤트와 커피챗들을 통해 학업과 진로 설정에 무한한 도움을 받았습니다.',
      '17년 전 작은 커뮤니티로 시작했던 UTKCC는 이제 Rotman Commerce, Social Science, Kinesiology, Mathematical & Physical Sciences 등 다양한 전공 아래 열정이 가득한 26명의 17기 임원들과 300명이 넘는 선배님들과 함께하고 있습니다. 제가 선배님들께 받았던 만큼 17기는 후배들과 신입생들이 어렵고 지칠 수도 있는 대학생활 동안 더욱 더 힘을 내어 전진할 수 있도록 최선을 다할 것입니다.',
      'KCC에 항상 많은 관심과 사랑을 주시는 선배님들과 학우 여러분들께 감사드리며, 앞으로의 17기와 KCC에도 많은 응원과 관심 부탁드립니다. 감사합니다.',
    ],
  },
  {
    dept: 'presidents',
    position: 'vice-president',
    name: '한수예',
    imageSrc: '/assets/images/exec-headshots/한수예.webp',
    program: 'Statistics',
    intro: [
      '안녕하세요, UTKCC 17기 부회장 한수예입니다.',
      '15기 Finance 인턴 지원서를 쓰고 있던 때가 엊그제 같은데 어느덧 17기 부회장이 되어 이 단체를 이끌어 나간다는 것이 정말 신기하고 감사한 일인 것 같습니다. 그 시간들 속에서 함께 일했던 임원들과 선배님들로부터 많은 것들을 배우고, 느끼고, 또 깨달았기에 제가 이 자리까지 오게 되지 않았나 싶습니다.',
      '다양한 생각과 풍부한 경험을 가진 사람들과 활발하게 교류하고 네트워킹을 하게 된다면 발전 가능성은 무한하리라 생각됩니다. 그런 기회를 제공해 주는 곳이 바로 지금까지의 UTKCC였으며 앞으로도 이전까지의 포커스와 17기 회장단의 방향성이 잘 버무려져 더 발전하는 단체가 될 수 있도록 노력할 것입니다.',
      '많은 분들 덕분에 제가 이렇게 성장한 만큼 신입생들과 재학생들을 도우며 성장의 길에 함께 해드리고 싶습니다. 진로와 학업, 그리고 성공적인 학교 생활을 위한 도약들을 차근차근 밟아 나가겠습니다.',
      '17기 많은 응원과 지속적인 관심 부탁드립니다. 감사합니다.',
    ],
  },
  {
    dept: 'social',
    position: 'director',
    name: '김보경',
    imageSrc: '/assets/images/exec-headshots/김보경.webp',
    program: 'Econ. & Stat.',
    intro: [],
  },
  {
    dept: 'social',
    position: 'committee',
    name: '이기서',
    imageSrc: '/assets/images/exec-headshots/이기서.webp',
    program: 'Financial Economics specialist',
    intro: [],
  },
  {
    dept: 'social',
    position: 'committee',
    name: '신예서',
    imageSrc: '/assets/images/exec-headshots/신예서.webp',
    program: 'Economics',
    intro: [],
  },
  {
    dept: 'social',
    position: 'committee',
    name: '김준수',
    imageSrc: '/assets/images/exec-headshots/김준수.webp',
    program: 'Statistics',
    intro: [],
  },
  {
    dept: 'academic',
    position: 'director',
    name: '이수나',
    imageSrc: '/assets/images/exec-headshots/이수나.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'academic',
    position: 'committee',
    name: '전재민',
    imageSrc: '/assets/images/exec-headshots/전재민.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'academic',
    position: 'committee',
    name: '이은서',
    imageSrc: '/assets/images/exec-headshots/이은서.webp',
    program: 'Econ. & Stat.',
    intro: [],
  },
  {
    dept: 'external relations',
    position: 'director',
    name: '심유진',
    imageSrc: '/assets/images/exec-headshots/심유진.webp',
    program: 'Statistics',
    intro: [],
  },
  {
    dept: 'external relations',
    position: 'committee',
    name: '배정훈',
    imageSrc: '/assets/images/exec-headshots/배정훈.webp',
    program: 'Econ. & Health Studies',
    intro: [],
  },
  {
    dept: 'external relations',
    position: 'committee',
    name: '진예령',
    imageSrc: '/assets/images/exec-headshots/진예령.webp',
    program: 'Kinesiology & P.E.',
    intro: [],
  },
  {
    dept: 'marketing',
    position: 'director',
    name: '김소현',
    imageSrc: '/assets/images/exec-headshots/김소현.webp',
    program: 'Economics',
    intro: [],
  },
  {
    dept: 'marketing',
    position: 'committee',
    name: '오하린',
    imageSrc: '/assets/images/exec-headshots/오하린.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'marketing',
    position: 'committee',
    name: '조은비',
    imageSrc: '/assets/images/exec-headshots/조은비.webp',
    program: 'Econ. & Stat.',
    intro: [],
  },
  {
    dept: 'marketing',
    position: 'committee',
    name: '임윤아',
    imageSrc: '/assets/images/exec-headshots/임윤아.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'marketing',
    position: 'committee',
    name: '유현준',
    imageSrc: '/assets/images/exec-headshots/유현준.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'finance',
    position: 'director',
    name: '정윤서',
    imageSrc: '/assets/images/exec-headshots/정윤서.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'finance',
    position: 'committee',
    name: '강민서',
    imageSrc: '/assets/images/exec-headshots/강민서.webp',
    program: 'Econ. & IRHR',
    intro: [],
  },
  {
    dept: 'finance',
    position: 'committee',
    name: '홍윤재',
    imageSrc: '/assets/images/exec-headshots/홍윤재.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'media',
    position: 'director',
    name: '지가형',
    imageSrc: '/assets/images/exec-headshots/지가형.webp',
    program: 'Crim. & Sociological Studies',
    intro: [],
  },
  {
    dept: 'media',
    position: 'committee',
    name: '이지현',
    imageSrc: '/assets/images/exec-headshots/이지현.webp',
    program: 'CompSci & Stat.',
    intro: [],
  },
  {
    dept: 'media',
    position: 'committee',
    name: '조예은',
    imageSrc: '/assets/images/exec-headshots/조예은.webp',
    program: 'Math & Stat.',
    intro: [],
  },
  {
    dept: 'programming',
    position: 'director',
    name: '김진건',
    imageSrc: '/assets/images/exec-headshots/김진건.webp',
    program: 'Rotman Commerce',
    intro: [],
  },
  {
    dept: 'programming',
    position: 'committee',
    name: '류재혁',
    imageSrc: '/assets/images/exec-headshots/류재혁.webp',
    program: 'CompSci & Stat.',
    intro: [],
  },
];
