import { projects } from './projects'
import { skillCategories } from './skills'
import { socialLinks } from '../constants/socialLinks'

export type Answer = { text: string; links?: { label: string; href: string }[] }
export const quickQuestions = ['Quick Summary', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']
const cv = { label: 'Read the CV', href: '/Sunil_Kafley_CV.pdf' }
const section = (label: string, id: string) => ({ label, href: `/#${id}` })

// CV facts verified against public/Sunil_Kafley_CV.pdf. Keep this resolver
// independent of the UI so a future answer provider can replace it.
export function getPortfolioAnswer(question: string): Answer {
  const q = question.toLowerCase().replace(/[^a-z0-9+#. ]/g, ' ')
  const matches = (pattern: RegExp) => pattern.test(q)
  const project = projects.find(p => q.includes(p.title.toLowerCase()) || q.includes(p.slug.replaceAll('-', ' ')))
  if (project) {
    const cvProjects: Record<string, string> = {
      'budget-tracker-pro': 'The CV describes a cross-platform budgeting app built with React Native, Expo and TypeScript, using Clean Architecture, Jest tests and AsyncStorage. It supports income, expenses, budgets, recurring payments and financial goals.',
      'campus-event-planner': 'The CV describes a campus event management PWA built with React, Vite and TypeScript. It includes CRUD, search, sorting, filtering, offline support and IndexedDB persistence.',
    }
    return {
      text: cvProjects[project.id] ?? (project.detailsPending ? `${project.title} is listed in the portfolio, but verified details are not published yet.` : `${project.title}: ${project.shortDescription}`),
      links: [{ label: 'Browse projects', href: '/projects' }, ...(project.githubUrl ? [{ label: 'Project GitHub', href: project.githubUrl }] : []), ...(project.liveUrl ? [{ label: 'Live project', href: project.liveUrl }] : []), cv],
    }
  }
  if (matches(/\b(contact|email|reach|linkedin|github|hire|available|availability|opportunit\w*)\b/)) return {
    text: 'Sunil is based in Christchurch, New Zealand, and is open to internship, graduate, junior developer and collaboration opportunities. Reach out by email or LinkedIn, or explore his GitHub.',
    links: [...socialLinks.map(s => ({ label: s.name, href: s.href })), section('Contact Sunil', 'contact')],
  }
  if (matches(/\b(education|study|studying|degree|ara|qualification\w*|diploma|university)\b/)) return {
    text: 'According to the CV, Sunil is studying a Bachelor of Information and Communication Technology (Software Development) at Ara Institute of Canterbury in Christchurch (2025–present). He also holds a New Zealand Diploma in Systems Administration (Level 6) from Aspire2 International Business & Technology (2020–2021).', links: [cv],
  }
  if (matches(/\b(experience|work|career|job|administrator|foodstuffs|hospitality)\b/)) return {
    text: 'The CV lists IT Administrator at S V Associates Pvt Ltd (Aug 2013–Dec 2019), supporting Windows systems, user accounts and troubleshooting; Cafe Assistant at Unknown Chapter Coffee Roasters (Jan 2020–Jul 2024); and Store Person at Foodstuffs South Island (Aug 2024–present). His software development experience includes academic and personal projects.', links: [section('Development journey', 'journey'), cv],
  }
  if (matches(/\b(skill\w*|stack|technolog\w*|react|python|django|typescript|frontend|backend|testing|database\w*|language\w*)\b/)) return {
    text: `${skillCategories.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}.`).join(' ')} The CV also lists React Native, PHP, C#, ASP.NET, SQL, Jest and TDD. These are listed skills, not proficiency ratings.`, links: [section('Explore skills', 'skills'), cv],
  }
  if (matches(/\b(project\w*|built|portfolio|demo|app\w*)\b/)) return {
    text: 'Explore Fruit Finder Christchurch, an interactive fruit-tree map; Vehicle Rental Management System, a Django rental application; and Health Management Referral System. The CV also describes Budget Tracker Pro and Campus Event Planner. Ask about a project by name.',
    links: [{ label: 'All projects', href: '/projects' }, ...projects.filter(p => ['fruit-finder-christchurch', 'budget-tracker-pro', 'campus-event-planner'].includes(p.id)).map(p => ({ label: `Ask: ${p.title}`, href: `ask:${p.title}` }))],
  }
  if (matches(/\b(summary|sunil|about|hello|hi|who)\b/)) return {
    text: 'Sunil Kafley is a software engineering student and aspiring full-stack developer based in Christchurch, New Zealand. He builds responsive web applications with React, TypeScript and Django and is studying Software Development at Ara Institute of Canterbury.', links: [section('About Sunil', 'about'), cv],
  }
  if (matches(/\b(cv|resume)\b/)) return { text: 'You can read Sunil’s CV for his qualifications, experience and selected projects.', links: [cv] }
  return { text: 'I don’t have a verified answer to that yet. I can help with Sunil’s summary, skills, projects, experience, education or contact details. Choose a topic below, or contact Sunil directly.', links: [section('Contact Sunil', 'contact')] }
}
