import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <p>
      My skills include Design System Patterns using Figma, applying the Style Guide for VueJs and the B.E.M. methodology, using libraries such as Element Plus, Phosphor Icons, Ion Icons, Tailwind CSS, Material Icons and Bootstrap. I'm also familiar with NodeJs and Prisma ORM for backend and database frameworks. I have experience working with Git, Github and Bitbucket, and project management based on agile methodologies and using tools like Slack and JIRA.
      </p>
    </Layout>
  )
}