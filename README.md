# Jinja SS CMS - Sanity Studio

Sanity Studio for [Jinja Senior Secondary School](https://jinjass.sc.ug) website.

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Sanity Studio v3** | Headless CMS |
| **TypeScript** | Type safety |
| **GROQ** | Query language |

---

## 📂 Schema Structure

### Singletons (10)

| Schema | Description |
|--------|-------------|
| `siteSettings` | School name, logo, contact info |
| `homePage` | Hero content, stats |
| `navigation` | Navbar items, CTA |
| `unebResults` | UCE/UACE results |
| `feeStructure` | O'Level & A'Level fees |
| `aboutContent` | Vision, mission, core values |
| `admissionsContent` | Requirements, steps, FAQs |
| `termDates` | Opening/closing dates |
| `whyChooseUs` | Reasons cards |
| `contactPage` | Contact info cards |
| `footerSettings` | Quick links, developer info |

### Documents (9)

| Schema | Description |
|--------|-------------|
| `announcement` | Daily announcements |
| `newsArticle` | News & blog posts |
| `staff` | Administration team |
| `galleryImage` | Photo gallery |
| `sport` | Sports (football, netball, etc.) |
| `club` | Student clubs |
| `page` | Generic pages (history, anthem) |
| `subjectCategory` | Sciences, Arts, Co-Curricular |
| `facility` | School facilities |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/jiangsalim/jinjass-studio.git

# Navigate to project
cd jinjass-studio

# Install dependencies
npm install

# Start development server
npm run dev