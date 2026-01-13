
import { ExperienceItem, PublicationItem, ProjectItem, SkillCategory } from './types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "SIREAL (시리얼)",
    title: "대표",
    period: "2020.10 - 현재",
    description: [
      "협업 툴 기반 조직문화 및 업무 시스템 구축 컨설팅",
      "생산성 교육 콘텐츠 제작 및 배포"
    ]
  },
  {
    company: "Toss Lab (JANDI)",
    title: "마케터",
    period: "2018.04 - 2020.08",
    description: [
      "협업 툴 '잔디' 마케팅 및 스마트워크 콘텐츠 기획"
    ]
  },
  {
    company: "Notion 공식 한국 사용자 모임",
    title: "운영진",
    period: "2018.05 - 현재",
    description: [
      "국내 최대 규모의 노션 커뮤니티 운영 및 이벤트 기획"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "기업 컨설팅 & 교육",
    category: "Consulting",
    description: "조직 내 흩어진 데이터를 Notion으로 통합하고 업무 프로세스 최적화. 성신여대, 세아(SeAH) 등 300회 이상 강의 진행.",
    longDescription: "단순히 도구를 도입하는 것을 넘어, 조직의 고유한 업무 문화를 분석하고 최적의 시스템을 설계합니다. 데이터의 파편화를 방지하고, 실시간 협업이 가능한 대시보드 구축을 통해 업무 가시성을 확보합니다.",
    tags: ["Process Design", "Notion Architecture", "Internal Training"],
    partnersList: [
      "성신여자대학교",
      "세아(SeAH) 그룹",
      "한국문화예술교육진흥원",
      "CJ 올리브네트웍스",
      "LG 전자",
      "SK 텔레콤",
      "네이버 커넥트재단",
      "카카오 벤처스"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "노션 포트폴리오 아카이브",
    category: "Archive",
    description: "개인이 자신을 표현할 수 있도록 노션 포트폴리오 사례를 수집하고 큐레이션하는 프로젝트 운영.",
    longDescription: "수많은 사용자들이 만든 독창적인 노션 포트폴리오 사례들을 수집하고, 그 속에 담긴 구조적 아이디어를 공유합니다. 개인이 자신만의 브랜딩을 효율적으로 관리할 수 있도록 가이드를 제공하는 커뮤니티형 프로젝트입니다.",
    tags: ["Personal Branding", "Curation", "Community"],
    partnersList: [
      "Notion 한국 사용자 모임",
      "개인 창작자 500+ 명",
      "커리어 플랫폼 협업",
      "대학 취업지원센터"
    ],
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "업무 자동화 솔루션",
    category: "Automation",
    description: "반복되는 업무를 Zapier나 Make를 활용해 자동화하여 실질적인 업무 시간 단축 솔루션 제공.",
    longDescription: "단순 반복 작업(Data Entry, Notification, Syncing)을 자동화하여 팀원들이 더 창의적인 업무에 집중할 수 있도록 돕습니다. Zapier와 Make를 활용해 서로 다른 도구(SaaS) 간의 데이터 흐름을 연결합니다.",
    tags: ["Workflow Automation", "Zapier", "Efficiency"],
    partnersList: [
      "IT 스타트업 20여 곳",
      "마케팅 대행사",
      "온라인 쇼핑몰 운영사",
      "비영리 단체"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  { type: 'book', title: '20가지 템플릿으로 배우는 노션 Notion', year: '2024', details: '출판사: 제이펍' },
  { type: 'book', title: '일잘러의 협업도구 컨설팅', year: '2024', details: '출판사: 한빛미디어' },
  { type: 'book', title: '업무와 일상을 정리하는 새로운 방법 Notion', year: '2019', details: '국내 최초 노션 가이드북' },
  { type: 'lecture', title: '온라인 생산성 강의', details: 'Udemy, 인프런, 패스트캠퍼스 등 다수 운영' },
  { type: 'interview', title: '스마트워크 전문가 인터뷰', details: '매거진 한경, 디센터 등 다수 미디어 노출' }
];

export const SKILLS: SkillCategory[] = [
  { name: "Collaboration", items: ["Notion (Certified)", "Slack", "JANDI"], color: "bg-[#e2f3e4]" },
  { name: "Productivity", items: ["Google Workspace", "Evernote"], color: "bg-[#fff9db]" },
  { name: "Automation", items: ["Zapier", "Make (Integromat)"], color: "bg-[#f1f1f1]" },
  { name: "Web", items: ["Oopy", "Ghost"], color: "bg-[#e2f3e4]" }
];
