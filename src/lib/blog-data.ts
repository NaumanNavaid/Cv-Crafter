// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  subcategory?: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  featured?: boolean;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
  };
}

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  postCount: number;
  subcategories?: {
    name: string;
    slug: string;
    description: string;
    postCount: number;
  }[];
}

// Constants
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Resume Tips for 2024",
    slug: "essential-resume-tips-2024",
    excerpt: "Discover the most important resume writing tips that will help you stand out in today's competitive job market.",
    content: `# 10 Essential Resume Tips for 2024

In today's competitive job market, having a well-crafted resume is more important than ever. Here are 10 essential tips to help your resume stand out:

## 1. Tailor Your Resume for Each Application
One size doesn't fit all. Customize your resume for each job application by highlighting relevant skills and experiences.

## 2. Use Action Verbs
Start bullet points with strong action verbs like "Led," "Developed," "Implemented," or "Achieved."

## 3. Quantify Your Achievements
Use numbers to demonstrate impact: "Increased sales by 25%" rather than "Increased sales."

## 4. Keep It Concise
Aim for a one-page resume if you have less than 10 years of experience.

## 5. Use a Clean, Professional Format
Ensure your resume is easy to read with consistent formatting and sufficient white space.

## 6. Include Keywords from Job Descriptions
Many companies use ATS (Applicant Tracking Systems) that scan for specific keywords.

## 7. Highlight Relevant Skills
Create a dedicated skills section that showcases your most relevant technical and soft skills.

## 8. Proofread Multiple Times
Typos and grammatical errors can make you appear unprofessional.

## 9. Include a Professional Summary
Start with a compelling 2-3 sentence summary that highlights your key qualifications.

## 10. Use Reverse Chronological Order
List your experience starting with your most recent position and working backward.

Remember, your resume is often your first impression with a potential employer. Make it count!`,
    category: "Resume Writing",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    readTime: 5,
    featured: true,
    tags: ["resume tips", "job search", "career advice"],
    author: {
      name: "CV Crafter Team"
    }
  },
  {
    id: "2",
    title: "How to Write a Cover Letter That Gets Noticed",
    slug: "write-cover-letter-gets-noticed",
    excerpt: "Learn the art of writing compelling cover letters that grab recruiters' attention and land you interviews.",
    content: `# How to Write a Cover Letter That Gets Noticed

A well-written cover letter can be the difference between getting an interview and having your application overlooked.

## Key Elements of an Effective Cover Letter

### 1. Personalized Salutation
Address the hiring manager by name whenever possible.

### 2. Strong Opening Paragraph
Grab attention immediately by mentioning the position and your enthusiasm.

### 3. Relevant Experience
Highlight 2-3 key experiences that relate to the job requirements.

### 4. Company Knowledge
Show that you've researched the company.

### 5. Call to Action
End with a clear call to action, expressing your desire for an interview.

## Cover Letter Do's and Don'ts

**Do's:**
- Keep it to one page
- Use professional language
- Customize for each application
- Proofread carefully

**Don'ts:**
- Repeat your resume verbatim
- Use generic templates
- Make it all about you
- Forget to include contact information

Your cover letter is your opportunity to show personality and enthusiasm that might not come through in your resume.`,
    category: "Cover Letter",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-10",
    readTime: 4,
    tags: ["cover letter", "job application", "writing tips"],
    author: {
      name: "CV Crafter Team"
    }
  },
  {
    id: "3",
    title: "LinkedIn Profile Optimization Complete Guide",
    slug: "linkedin-profile-optimization-guide",
    excerpt: "Transform your LinkedIn profile into a powerful networking tool that attracts recruiters and opportunities.",
    content: `# LinkedIn Profile Optimization Complete Guide

Your LinkedIn profile is your digital professional brand. Here's how to optimize it:

## Profile Picture and Banner
- Use a professional headshot
- Choose a banner that reflects your industry

## Headline That Stands Out
Include your value proposition:
\`\`\`
Marketing Manager | Helping B2B Tech Companies | Digital Marketing Strategist
\`\`\`

## Compelling About Section
- Start with a hook
- Highlight achievements
- Include keywords
- Show personality

## Experience Section
- Use bullet points
- Include metrics
- Add media files

## Advanced Tips
- Custom URL for professional branding
- Featured section for best work
- Skills with endorsements
- Recommendations from colleagues
- Regular activity for networking

Remember, LinkedIn is about building relationships, not just finding jobs.`,
    category: "LinkedIn",
    subcategory: "Profile Optimization",
    publishedAt: "2024-01-08",
    updatedAt: "2024-01-08",
    readTime: 7,
    tags: ["linkedin", "profile optimization", "personal branding"],
    author: {
      name: "CV Crafter Team"
    }
  },
  {
    id: "4",
    title: "Networking Strategies That Actually Work",
    slug: "networking-strategies-work",
    excerpt: "Build meaningful professional connections that advance your career using these proven networking strategies.",
    content: `# Networking Strategies That Actually Work

Effective networking is about building genuine relationships.

## Quality Over Quantity
Focus on building deep relationships with fewer people rather than superficial connections with many.

## Give Before You Get
- Offer help and value before asking for anything
- Share relevant articles or opportunities
- Make introductions between connections

## Follow Up Consistently
- Send personalized follow-up messages
- Check in periodically with existing connections
- Remember important details about people's lives

## Common Mistakes to Avoid
- Being too transactional
- Not following up
- Dominating conversations
- Forgetting to express gratitude

Networking is a long-term investment in your career. Build relationships authentically and consistently.`,
    category: "Networking",
    publishedAt: "2024-01-05",
    updatedAt: "2024-01-05",
    readTime: 6,
    tags: ["networking", "career development", "professional relationships"],
    author: {
      name: "CV Crafter Team"
    }
  },
  {
    id: "5",
    title: "ATS-Friendly Resume: Complete Guide",
    slug: "ats-friendly-resume-guide",
    excerpt: "Learn how to create resumes that pass Applicant Tracking Systems and reach human recruiters.",
    content: `# ATS-Friendly Resume: Complete Guide

Applicant Tracking Systems (ATS) scan and filter resumes before they reach human eyes.

## What is an ATS?
ATS helps companies manage job applications by scanning resumes for keywords, parsing information, and ranking candidates.

## ATS-Friendly Formatting

### Use Standard Fonts
Stick to common fonts like Arial, Calibri, Georgia, or Times New Roman.

### Simple Layout
- Use standard section headers
- Avoid columns, tables, and graphics
- Use bullet points instead of paragraphs
- Save as .docx or PDF

### Proper Formatting
- Font size: 10-12pt for body, 14-16pt for headers
- Margins: 0.5-1 inch
- Line spacing: 1.0-1.5

## Keyword Optimization
- Identify key skills from job descriptions
- Include exact phrases from job postings
- Use acronyms and full forms
- Strategic placement in summary and experience

## What to Avoid
- Fancy graphics or images
- Unusual fonts or formatting
- Headers and footers
- Tables or columns
- Colorful designs

Your goal is to create a resume that both ATS and human recruiters can easily read and understand.`,
    category: "Resume Writing",
    subcategory: "ATS Optimization",
    publishedAt: "2024-01-03",
    updatedAt: "2024-01-03",
    readTime: 8,
    tags: ["ATS", "resume optimization", "job search tips"],
    author: {
      name: "CV Crafter Team"
    }
  },
  {
    id: "6",
    title: "Remote Job Interview Preparation",
    slug: "remote-job-interview-preparation",
    excerpt: "Master the art of remote interviews with these preparation tips and best practices.",
    content: `# Remote Job Interview Preparation

Remote interviews require different preparation than in-person interviews.

## Technical Setup

### Hardware Check
- Test camera and microphone
- Ensure stable internet connection
- Have backup device ready

### Software Preparation
- Download and test the interview platform
- Update operating system and browser
- Close unnecessary applications

### Environment Setup
- Choose a quiet, well-lit space
- Ensure professional background
- Eliminate distractions
- Check lighting and camera angle

## Common Remote Interview Questions

### Technical Questions
- "How comfortable are you with remote collaboration tools?"
- "What's your home office setup like?"

### Remote Work Skills
- "How do you communicate effectively with remote teams?"
- "How do you stay motivated without direct supervision?"

## Day of Interview

### Final Checks
- Test everything 30 minutes before
- Have water and notes nearby
- Close other browser tabs

### During the Interview
- Join 2-3 minutes early
- Maintain eye contact with camera
- Speak clearly and at a moderate pace
- Ask for clarification if needed

## Follow-up
- Send a personalized thank you email
- Reference specific conversation points
- Ask about next steps and timeline

Remote interviews test both your technical setup and communication skills. Prepare thoroughly to make a great impression.`,
    category: "Interview Tips",
    subcategory: "Remote Interviews",
    publishedAt: "2024-01-01",
    updatedAt: "2024-01-01",
    readTime: 6,
    tags: ["remote work", "interview preparation", "virtual interviews"],
    author: {
      name: "CV Crafter Team"
    }
  }
] as const;

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: "Resume Writing",
    slug: "resume-writing",
    description: "Tips and best practices for creating effective resumes",
    postCount: 2,
    subcategories: [
      {
        name: "ATS Optimization",
        slug: "ats-optimization",
        description: "How to optimize resumes for Applicant Tracking Systems",
        postCount: 1
      }
    ]
  },
  {
    name: "Cover Letter",
    slug: "cover-letter",
    description: "Guide to writing compelling cover letters",
    postCount: 1
  },
  {
    name: "LinkedIn",
    slug: "linkedin",
    description: "Optimize your LinkedIn profile and presence",
    postCount: 1,
    subcategories: [
      {
        name: "Profile Optimization",
        slug: "profile-optimization",
        description: "How to optimize your LinkedIn profile",
        postCount: 1
      }
    ]
  },
  {
    name: "Networking",
    slug: "networking",
    description: "Build professional relationships and connections",
    postCount: 1
  },
  {
    name: "Interview Tips",
    slug: "interview-tips",
    description: "Prepare for job interviews and land your dream job",
    postCount: 1,
    subcategories: [
      {
        name: "Remote Interviews",
        slug: "remote-interviews",
        description: "Tips for virtual and remote job interviews",
        postCount: 1
      }
    ]
  }
] as const;

// Utility Functions
export const getPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find(post => post.slug === slug);

export const getPostsByCategory = (categorySlug: string, subcategorySlug?: string): BlogPost[] =>
  BLOG_POSTS.filter(post => {
    const categoryMatch = post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug;
    if (subcategorySlug) {
      const subcategoryMatch = post.subcategory?.toLowerCase().replace(/\s+/g, '-') === subcategorySlug;
      return categoryMatch && subcategoryMatch;
    }
    return categoryMatch;
  });

export const getFeaturedPosts = (): BlogPost[] =>
  BLOG_POSTS.filter(post => post.featured);

export const getRecentPosts = (limit: number = 5): BlogPost[] =>
  [...BLOG_POSTS]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] =>
  BLOG_POSTS
    .filter(post =>
      post.id !== currentPost.id &&
      (post.category === currentPost.category ||
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);

export const getCategoryBySlug = (slug: string): BlogCategory | undefined =>
  BLOG_CATEGORIES.find(cat => cat.slug === slug);