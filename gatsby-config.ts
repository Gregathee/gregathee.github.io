import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `John Smith's Software Engineering Portfolio`,
    name: `John Smith`,
    bannerLogo: `/icon.png`,
    description: `Software Engineer and Marine Corps Veteran leveraging 7 years of experience in designing and developing robust software solutions, specializing in 3D data visualization, game development, and automation. Adept at leveraging languages such as Python, C++, and C# to build scalable applications and enhance user experiences. Proven track record of optimizing performance and ensuring high-quality code through rigorous testing and efficient data management. Strong collaborator with a history of successfully leading interdisciplinary teams and mentoring peers. Committed to driving innovation and improving processes through continuous learning and adaptation. `,
    linkedin: `https://www.linkedin.com/in/gregorybusmc/`,
    github: `https://github.com/Gregathee`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config
