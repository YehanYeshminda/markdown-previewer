import { Injectable } from '@angular/core';

export interface Template {
    name: string;
    category: string;
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class TemplateService {
    private templates: Template[] = [];

    constructor() {
        this.initializeTemplates();
    }

    getTemplates(): Template[] {
        return this.templates;
    }

    getTemplatesByCategory(category: string): Template[] {
        return this.templates.filter(template => template.category === category);
    }

    getTemplateCategories(): string[] {
        return [...new Set(this.templates.map(template => template.category))];
    }

    private initializeTemplates() {
        this.templates = [
            {
                name: 'Project Documentation',
                category: 'Documentation',
                content: this.getProjectDocTemplate()
            },
            {
                name: 'API Documentation',
                category: 'Documentation',
                content: this.getApiDocTemplate()
            },
            {
                name: 'Product Documentation',
                category: 'Documentation',
                content: this.getProductDocTemplate()
            },

            {
                name: 'Meeting Notes',
                category: 'Business',
                content: this.getMeetingNotesTemplate()
            },
            {
                name: 'Weekly Report',
                category: 'Business',
                content: this.getWeeklyReportTemplate()
            },
            {
                name: 'Project Proposal',
                category: 'Business',
                content: this.getProjectProposalTemplate()
            },

            {
                name: 'Blog Post',
                category: 'Content',
                content: this.getBlogPostTemplate()
            },
            {
                name: 'Tutorial',
                category: 'Content',
                content: this.getTutorialTemplate()
            },
            {
                name: 'Book Review',
                category: 'Content',
                content: this.getBookReviewTemplate()
            },

            {
                name: 'Resume',
                category: 'Personal',
                content: this.getResumeTemplate()
            },
            {
                name: 'Research Paper',
                category: 'Academic',
                content: this.getResearchPaperTemplate()
            },
            {
                name: 'Learning Notes',
                category: 'Personal',
                content: this.getLearningNotesTemplate()
            },
            {
                name: 'OTP Verification',
                category: 'Email',
                content: this.getOTPEmailTemplate()
            },
            {
                name: 'Welcome Email',
                category: 'Email',
                content: this.getWelcomeEmailTemplate()
            },
            {
                name: 'Password Reset',
                category: 'Email',
                content: this.getPasswordResetEmailTemplate()
            },
            {
                name: 'Order Confirmation',
                category: 'Email',
                content: this.getOrderConfirmationEmailTemplate()
            },
            {
                name: 'Event Invitation',
                category: 'Email',
                content: this.getEventInvitationEmailTemplate()
            },
            {
                name: 'Feedback Request',
                category: 'Email',
                content: this.getFeedbackRequestEmailTemplate()
            },
            {
                name: 'Newsletter',
                category: 'Email',
                content: this.getNewsletterEmailTemplate()
            }
        ];
    }

    getProjectDocTemplate(): string {
        return `# Project Name

## Overview
Brief description of what this project does and its purpose.

## Installation

\`\`\`bash
npm install project-name
# or
yarn add project-name
\`\`\`

## Usage

\`\`\`javascript
import { someFunction } from 'project-name';

// Example usage
someFunction();
\`\`\`

## API Reference

### someFunction()

Description of what this function does.

**Parameters:**
- \`param1\` (Type): Description
- \`param2\` (Type): Description

**Returns:**
- (Type): Description of return value

## Configuration

The project can be configured using:

\`\`\`json
{
  "setting1": true,
  "setting2": "value"
}
\`\`\`

## Contributing
Instructions for how to contribute to this project.

## License
This project is licensed under the [MIT License](LICENSE).
`;
    }

    getApiDocTemplate(): string {
        return `# API Documentation

## Base URL
\`https://api.example.com/v1\`

## Authentication
All API requests require an API key to be passed in the header:

\`\`\`
Authorization: Bearer YOUR_API_KEY
\`\`\`

## Endpoints

### Get Items

\`GET /items\`

Retrieves a list of items.

#### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| limit | integer | Maximum number of items to return (default: 20) |
| offset | integer | Number of items to skip (default: 0) |
| sort | string | Field to sort by (default: 'createdAt') |

#### Response

\`\`\`json
{
  "data": [
    {
      "id": "123",
      "name": "Example Item",
      "createdAt": "2023-06-01T12:00:00Z"
    }
  ],
  "meta": {
    "total": 100,
    "limit": 20,
    "offset": 0
  }
}
\`\`\`

### Create Item

\`POST /items\`

Creates a new item.

#### Request Body

\`\`\`json
{
  "name": "New Item",
  "description": "Item description"
}
\`\`\`

#### Response

\`\`\`json
{
  "id": "124",
  "name": "New Item",
  "description": "Item description",
  "createdAt": "2023-06-02T12:00:00Z"
}
\`\`\`

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid API key |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Something went wrong on our end |

## Rate Limiting

Requests are limited to 100 per minute per API key.
`;
    }

    getProductDocTemplate(): string {
        return `# Product Name

## Overview
A brief description of the product and its purpose.

![Product Image](https://via.placeholder.com/800x400)

## Features

- **Feature 1**: Description of the first key feature
- **Feature 2**: Description of the second key feature
- **Feature 3**: Description of the third key feature

## Getting Started

### System Requirements

- Requirement 1
- Requirement 2
- Requirement 3

### Installation

1. Step one for installation
2. Step two for installation
3. Step three for installation

## User Guide

### Basic Usage

Instructions for basic usage of the product.

### Advanced Features

Instructions for using the advanced features of the product.

## Troubleshooting

### Common Issue 1

Solution to common issue 1.

### Common Issue 2

Solution to common issue 2.

## FAQs

**Q: Frequently asked question 1?**
A: Answer to frequently asked question 1.

**Q: Frequently asked question 2?**
A: Answer to frequently asked question 2.

## Support

For additional help, contact our support team at support@example.com.

## Legal

### Terms of Service

Outline of the terms of service.

### Privacy Policy

Outline of the privacy policy.
`;
    }

    // Business Templates
    getMeetingNotesTemplate(): string {
        const today = new Date().toISOString().split('T')[0];
        return `# Meeting Notes - ${today}

## Attendees
- Person 1
- Person 2
- Person 3

## Agenda
1. Review previous action items
2. Discuss current project status
3. Plan next steps

## Discussion Points

### Previous Action Items
- [ ] Action 1 assigned to Person 1
- [x] Completed action by Person 2

### Current Status
Summary of the current project status and key updates.

### Decisions Made
- Decision 1
- Decision 2

## Action Items
- [ ] New action item assigned to Person 1, due by DATE
- [ ] New action item assigned to Person 2, due by DATE

## Next Meeting
- Date: 
- Time:
- Location/Link:
`;
    }

    getWeeklyReportTemplate(): string {
        const today = new Date();
        const weekNumber = Math.ceil((today.getDate() + today.getDay()) / 7);

        return `# Weekly Progress Report
## Week ${weekNumber}, ${today.getFullYear()}

### Summary
Brief overview of the week's key activities and achievements.

### Accomplishments
- Major accomplishment 1
- Major accomplishment 2
- Major accomplishment 3

### Project Status

| Project | Status | Progress | Comments |
|---------|--------|----------|----------|
| Project A | On Track | 75% | Going well |
| Project B | At Risk | 40% | Experiencing delays |
| Project C | Completed | 100% | Successfully delivered |

### Challenges & Blockers
- Challenge 1 and how it's being addressed
- Challenge 2 and how it's being addressed

### Next Week's Plan
- Key goal 1 for next week
- Key goal 2 for next week
- Key goal 3 for next week

### Resource Needs
List any resources or support needed.

### Additional Notes
Any other relevant information.
`;
    }

    getProjectProposalTemplate(): string {
        const today = new Date().toISOString().split('T')[0];

        return `# Project Proposal: [Project Name]

**Date:** ${today}  
**Proposed by:** [Your Name]  
**Department:** [Department Name]

## Executive Summary
A brief overview of the project and why it's important (1-2 paragraphs).

## Business Need
Describe the problem or opportunity that this project addresses.

## Proposed Solution
Outline of the proposed approach to solving the problem.

## Benefits
- Benefit 1
- Benefit 2
- Benefit 3

## Scope
### In Scope
- Item 1
- Item 2

### Out of Scope
- Item 1
- Item 2

## Timeline
| Phase | Start Date | End Date | Deliverables |
|-------|------------|----------|--------------|
| Planning | [Date] | [Date] | Project plan, requirements document |
| Development | [Date] | [Date] | Working prototype |
| Testing | [Date] | [Date] | Test reports |
| Deployment | [Date] | [Date] | Live solution |

## Resource Requirements

### Personnel
- Role 1: X hours per week
- Role 2: Y hours per week

### Budget
| Category | Amount | Notes |
|----------|--------|-------|
| Personnel | $XX,XXX | Internal resources |
| Software | $X,XXX | Licenses for X, Y, Z |
| Hardware | $X,XXX | Server costs |
| **Total** | **$XX,XXX** | |

## Success Criteria
- Criteria 1
- Criteria 2
- Criteria 3

## Risks and Mitigation

| Risk | Impact | Likelihood | Mitigation Strategy |
|------|--------|------------|---------------------|
| Risk 1 | High | Medium | Mitigation approach |
| Risk 2 | Medium | Low | Mitigation approach |

## Approvals Required
- [Name], [Position]
- [Name], [Position]
`;
    }

    // Content Templates
    getBlogPostTemplate(): string {
        const today = new Date().toISOString().split('T')[0];
        return `# Blog Post Title

*Published on ${today}*

![Featured Image](https://via.placeholder.com/800x400)

## Introduction

Start with a compelling introduction that hooks the reader and introduces the topic.

## Main Section 1

Your content goes here. You can include:

- Bullet points
- For key ideas
- And important concepts

## Main Section 2

More content with examples:

\`\`\`javascript
// Example code
function example() {
  console.log("Hello, world!");
}
\`\`\`

## Conclusion

Summarize the key points and provide a closing thought or call to action.

---

*Tags:* tag1, tag2, tag3

*Author:* Your Name
`;
    }

    getTutorialTemplate(): string {
        return `# How to [Do Something] - A Complete Tutorial

## Prerequisites
- Requirement 1
- Requirement 2
- Required software/tools

## Introduction
Brief explanation of what we're going to learn and why it's useful.

## Step 1: Getting Started

Description of the first step with detailed instructions.

\`\`\`bash
# Example command
npm install package-name
\`\`\`

## Step 2: Configuration

Explain how to configure the project/tool.

\`\`\`json
{
  "setting": "value",
  "another": true
}
\`\`\`

## Step 3: Implementation

Show how to implement the main functionality.

\`\`\`javascript
function mainFunction() {
  // Implementation details
  return result;
}
\`\`\`

## Common Issues and Troubleshooting

### Problem 1
Solution to problem 1

### Problem 2
Solution to problem 2

## Conclusion

Summary of what was learned and next steps for the reader.

## Additional Resources
- [Link to resource 1](https://example.com)
- [Link to resource 2](https://example.com)
`;
    }

    getBookReviewTemplate(): string {
        return `# Book Review: [Book Title]

![Book Cover](https://via.placeholder.com/200x300)

## Book Information
- **Title**: [Book Title]
- **Author**: [Author Name]
- **Publisher**: [Publisher]
- **Published Date**: [Publication Year]
- **Genre**: [Genre]
- **Pages**: [Number of Pages]
- **ISBN**: [ISBN Number]

## Rating
⭐⭐⭐⭐☆ (4/5 Stars)

## Summary
A brief summary of the book's plot or content without major spoilers.

## Review

### What I Liked
- Strong character development
- Engaging plot
- Beautiful writing style

### What Could Have Been Better
- Pacing issues in the middle section
- Some unresolved plot points

## Key Takeaways
- Main lesson 1
- Main lesson 2
- Main lesson 3

## Favorite Quotes
> "Insert a memorable quote from the book here." - Character Name

> "Another powerful quote from the book." - Character Name

## Who Should Read This Book
This book is perfect for readers who enjoy [type of stories/topics] and are interested in [specific themes].

## Conclusion
Final thoughts on the book and whether you would recommend it to others.
`;
    }

    // Personal Templates
    getResumeTemplate(): string {
        return `# Your Name
**Location** | **Phone** | **Email** | **LinkedIn** | **GitHub**

## Professional Summary
A brief, powerful summary of your career experience and key strengths (2-3 sentences).

## Skills
- **Technical Skills**: List of technical skills
- **Soft Skills**: List of soft skills
- **Languages**: List of languages you speak
- **Certifications**: List of relevant certifications

## Work Experience

### Company Name | Job Title | Date Range
*Location*

- Achievement or responsibility 1
- Achievement or responsibility 2
- Achievement or responsibility 3

### Previous Company | Job Title | Date Range
*Location*

- Achievement or responsibility 1
- Achievement or responsibility 2
- Achievement or responsibility 3

## Education

### University Name | Degree Title
*Date Range*

- GPA (if impressive)
- Relevant coursework
- Academic achievements

## Projects

### Project Name
*Technologies used*

Brief description of the project and your contributions.

### Another Project Name
*Technologies used*

Brief description of the project and your contributions.

## Volunteer Experience

### Organization | Role | Date Range
Brief description of what you did and the impact.

## Languages
- English (Native)
- Spanish (Intermediate)
- Other languages

## References
Available upon request.
`;
    }

    getResearchPaperTemplate(): string {
        return `# Title of Research Paper

**Author**: [Your Name]  
**Institution**: [Your Institution]  
**Date**: [Date]

## Abstract
A brief summary of your research paper including your research question, methodology, results, and conclusions (150-250 words).

## 1. Introduction
### 1.1 Background
Provide context and background information on your research topic.

### 1.2 Research Problem
Clearly state the problem your research addresses.

### 1.3 Research Question(s)
List your specific research questions.

### 1.4 Significance
Explain why this research is important.

## 2. Literature Review
### 2.1 Theoretical Framework
Discuss the theories relevant to your research.

### 2.2 Previous Research
Summarize and critique previous research related to your topic.

### 2.3 Gap in Literature
Identify the gap in existing literature that your research fills.

## 3. Methodology
### 3.1 Research Design
Describe your research approach.

### 3.2 Data Collection
Explain how you collected data.

### 3.3 Data Analysis
Detail the methods used to analyze your data.

### 3.4 Limitations
Acknowledge the limitations of your methodology.

## 4. Results
Present your findings, potentially with tables, graphs, or figures.

## 5. Discussion
### 5.1 Interpretation of Results
Analyze what your results mean.

### 5.2 Relation to Existing Literature
Compare your findings to previous research.

### 5.3 Implications
Discuss the implications of your findings.

## 6. Conclusion
Summarize your research and findings.

## 7. References
List all sources cited in your paper using the appropriate citation format.

## Appendices
Include any supplementary materials that support your research.
`;
    }

    getLearningNotesTemplate(): string {
        return `# Learning Notes: [Subject/Topic]

## Overview
Brief description of the subject/topic and why you're learning it.

## Key Concepts

### Concept 1
- Definition and explanation
- Important details
- Examples

### Concept 2
- Definition and explanation
- Important details
- Examples

## Diagrams/Visualizations

Insert diagrams or visual aids that help understand the concepts.

## Code Examples (if applicable)

\`\`\`javascript
// Example code
function example() {
  return "This is an example";
}
\`\`\`

## Practice Problems

### Problem 1
Problem statement

*Solution:*
Detailed solution

### Problem 2
Problem statement

*Solution:*
Detailed solution

## Questions to Explore Further
- Question 1
- Question 2
- Question 3

## Resources
- [Resource 1](https://example.com)
- [Resource 2](https://example.com)
- [Resource 3](https://example.com)

## Summary
Brief summary of what you've learned and key takeaways.

## Next Steps
What to learn next to build on this knowledge.
`;
    }

    // Email Templates
    getOTPEmailTemplate(): string {
        return `# OTP Verification Email

Subject: Your Verification Code for [Company Name]

---

![Company Logo](https://via.placeholder.com/150x50)

## Verification Code Required

Hello [Customer Name],

Thank you for using [Company/Service Name]. To complete your [action/process], please use the verification code below:

## Your OTP Code: **[123456]**

This code will expire in **10 minutes**.

For security reasons, please do not share this code with anyone. Our team will never ask you for this code.

If you did not request this code, please disregard this message or contact our support team immediately at support@example.com.

---

Thank you,  
The [Company Name] Team

---

*This is an automated message. Please do not reply to this email.*

[Company Name] | [Address] | [Website]  
[Privacy Policy](https://example.com/privacy) | [Terms of Service](https://example.com/terms)
`;
    }

    getWelcomeEmailTemplate(): string {
        return `# Welcome Email Template

Subject: Welcome to [Company Name] - Get Started Today!

---

![Company Logo](https://via.placeholder.com/150x50)

# Welcome to [Company Name]!

## Hi [Customer Name],

Thank you for joining [Company Name]! We're excited to have you on board.

Your account has been successfully created and you can now start [using our service/exploring our products].

## Getting Started

1. **Complete your profile**: [Link to profile page]
2. **Explore our features**: [Link to features page]
3. **Check out our quick start guide**: [Link to guide]

## Need Help?

If you have any questions or need assistance, please don't hesitate to:
- Visit our [Help Center](https://example.com/help)
- Contact our support team at support@example.com
- Call us at (555) 123-4567

## Stay Connected

Follow us on social media for updates and tips:
- [Twitter](https://twitter.com/company)
- [Facebook](https://facebook.com/company)
- [LinkedIn](https://linkedin.com/company)
- [Instagram](https://instagram.com/company)

We're thrilled to have you with us and look forward to helping you [benefit/goal of using service].

---

Best regards,  
[Sender Name]  
[Position], [Company Name]

---

[Company Name] | [Address] | [Website]  
[Privacy Policy](https://example.com/privacy) | [Terms of Service](https://example.com/terms)

*You're receiving this email because you recently signed up for [Company Name]. If this wasn't you, please [contact us](mailto:support@example.com).*
`;
    }

    getPasswordResetEmailTemplate(): string {
        return `# Password Reset Email Template

Subject: Reset Your [Company Name] Password

---

![Company Logo](https://via.placeholder.com/150x50)

## Password Reset Request

Hello [Customer Name],

We received a request to reset the password for your [Company Name] account. To reset your password, please click the button below:

[**Reset Password**](https://example.com/reset-password?token=xyz123)

This link will expire in **24 hours**.

If you didn't request this password reset, you can safely ignore this email and your password will remain unchanged.

For security reasons, this link can only be used once. If you need to reset your password again, please visit [example.com/forgot-password](https://example.com/forgot-password) and submit another request.

---

Thank you,  
The [Company Name] Security Team

---

*This is an automated message. Please do not reply to this email.*

If the button above doesn't work, copy and paste the following URL into your browser:  
https://example.com/reset-password?token=xyz123

[Company Name] | [Address] | [Website]  
[Privacy Policy](https://example.com/privacy) | [Terms of Service](https://example.com/terms)
`;
    }

    getOrderConfirmationEmailTemplate(): string {
        return `# Order Confirmation Email Template

Subject: Order Confirmation #[Order Number] - Thank You for Your Purchase!

---

![Company Logo](https://via.placeholder.com/150x50)

# Order Confirmation

## Thank you for your purchase, [Customer Name]!

We're pleased to confirm that we've received your order. Here's a summary of your purchase:

**Order Number:** #[12345]  
**Order Date:** [Month Day, Year]

## Order Summary

| Product | Quantity | Price |
|---------|----------|-------|
| [Product Name 1] | 1 | $XX.XX |
| [Product Name 2] | 2 | $XX.XX |
| **Subtotal** | | $XX.XX |
| **Shipping** | | $X.XX |
| **Tax** | | $X.XX |
| **Total** | | **$XX.XX** |

## Shipping Information

**Shipping Method:** [Standard/Express/etc.]  
**Estimated Delivery:** [Date Range]

**Shipping Address:**  
[Customer Name]  
[Street Address]  
[City, State ZIP]  
[Country]

## Payment Information

**Payment Method:** [Credit Card / PayPal / etc.]  
**Billing Address:** [Same as shipping / Different address]

## What's Next?

1. You will receive a shipping confirmation email with tracking information once your order ships.
2. You can track your order status at any time by [logging into your account](https://example.com/account).
3. If you have any questions about your order, please visit our [Help Center](https://example.com/help) or contact our customer service at orders@example.com.

Thank you for shopping with [Company Name]!

---

Best regards,  
The [Company Name] Team

---

[Company Name] | [Address] | [Website]  
[Return Policy](https://example.com/returns) | [Privacy Policy](https://example.com/privacy) | [Terms of Service](https://example.com/terms)
`;
    }

    getEventInvitationEmailTemplate(): string {
        return `# Event Invitation Email Template

Subject: You're Invited: [Event Name] - [Date]

---

![Event Banner](https://via.placeholder.com/600x200)

# You're Invited!

## [Event Name]

**Date:** [Day of Week, Month Day, Year]  
**Time:** [Start Time] - [End Time] [Timezone]  
**Location:** [Physical Address or Virtual Platform]

Dear [Recipient Name],

We're delighted to invite you to [Event Name], [brief description of the event and its purpose].

## Event Details

[Provide a detailed description of the event, including its significance, special guests, agenda highlights, etc.]

## Agenda

- [Time]: [Activity 1]
- [Time]: [Activity 2]
- [Time]: [Activity 3]
- [Time]: [Closing remarks]

## [Additional Information Section if needed]

[Any other relevant information such as dress code, parking information, technology requirements for virtual events, etc.]

## RSVP

Please confirm your attendance by [RSVP deadline] by:
- Clicking the button below
- Emailing [email address]
- Calling [phone number]

[**Confirm Attendance**](https://example.com/rsvp)

We look forward to having you join us!

---

Best regards,

[Sender Name]  
[Position]  
[Company/Organization]  
[Contact Information]

---

If you have any questions, please contact [name] at [email] or [phone number].
`;
    }

    getFeedbackRequestEmailTemplate(): string {
        return `# Feedback Request Email Template

Subject: We Value Your Feedback on Your Recent Experience with [Company Name]

---

![Company Logo](https://via.placeholder.com/150x50)

# How Did We Do?

## Hello [Customer Name],

Thank you for recently [using our service/purchasing our product/visiting our store]. At [Company Name], we're committed to providing the best possible experience for our customers.

We would greatly appreciate if you could take a few moments to share your feedback with us. Your insights are invaluable and will help us improve our [products/services].

[**Share Your Feedback**](https://example.com/feedback?id=123)

**This survey will take only 3 minutes to complete.**

As a token of our appreciation for completing the survey, you'll receive [discount/special offer/incentive].

## Questions We'll Ask:

- How satisfied were you with your recent experience?
- Did our [product/service] meet your expectations?
- How likely are you to recommend us to friends or colleagues?
- Any suggestions for improvement?

If you've experienced any issues or have concerns that require immediate attention, please contact our customer service team directly at support@example.com or call us at (555) 123-4567.

Thank you for helping us serve you better!

---

Best regards,  
[Sender Name]  
[Position], [Company Name]

---

[Company Name] | [Address] | [Website]  
[Privacy Policy](https://example.com/privacy) | [Terms of Service](https://example.com/terms)

*If you prefer not to receive feedback requests in the future, please [click here](https://example.com/unsubscribe).*
`;
    }

    getNewsletterEmailTemplate(): string {
        return `# Newsletter Email Template

Subject: [Month/Season] Newsletter: [Key Highlight or Theme]

---

![Newsletter Header](https://via.placeholder.com/600x200)

# [Company Name] Newsletter

## Hello [Recipient Name],

Welcome to our [monthly/quarterly] newsletter! Keep reading for the latest updates, tips, and special offers.

## What's New

### [News Item 1 Title]
[Brief description of first news item with a link to read more]
[Read more →](https://example.com/news1)

### [News Item 2 Title]
[Brief description of second news item with a link to read more]
[Read more →](https://example.com/news2)

## Featured [Product/Service/Article]

![Featured Item Image](https://via.placeholder.com/300x200)

### [Featured Item Title]
[Compelling description of the featured item, explaining its benefits and why readers should be interested]

[**Learn More**](https://example.com/featured)

## Tips & Insights

### [Tip or Article Title]
[Brief preview of helpful content that provides value to your readers]
[Continue reading →](https://example.com/tips)

## Upcoming Events

- **[Event 1 Name]** - [Date] - [Brief description]
- **[Event 2 Name]** - [Date] - [Brief description]

[View All Events →](https://example.com/events)

## Special Offers

![Special Offer](https://via.placeholder.com/300x150)

**[Description of the special offer or promotion]**  
Use code: **[PROMO123]**  
Expires: [Expiration Date]

[**Shop Now**](https://example.com/promo)

---

Stay connected with us:

[Social Media Icons: Facebook, Twitter, Instagram, LinkedIn]

---

[Company Name] | [Address] | [Website]  
[Privacy Policy](https://example.com/privacy) | [Terms of Service](https://example.com/terms)

*You're receiving this email because you subscribed to our newsletter. [Unsubscribe](https://example.com/unsubscribe) | [Update Preferences](https://example.com/preferences)*
`;
    }
}
